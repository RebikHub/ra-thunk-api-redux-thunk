import * as React from 'react';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchPostReset, fetchPost } from '../store/slicePost';
import Error from './Error';
import { Item } from 'src/interfaces/interfaces';
import { SyntheticEvent } from 'react';
import { EditButtons, EditInput, Form, HiddenDiv, LoaderBtn } from 'src/styles/styles';
import '../index.css'

export default function ServiceEdit(): ReactElement {
  const location = useLocation();
  const navigate = useNavigate();
  
  console.log(location.pathname);
  console.log(location);

  const [input, setInput] = useState<Item>({
    id: 0,
    name: '',
    price: 0,
    content: ''
  });
  const {item, loading, error} = useAppSelector(state => state.sliceGetId);
  const dispatch = useAppDispatch();
  const post = useAppSelector(state => state.slicePost);

  useEffect(() => {
    if (item) {
      setInput({
        id: item.id,
        name: item.name,
        price: item.price,
        content: item.content
      })
    }
  }, [item])

  useEffect(() => {
    setTimeout(() => {
      if (post.error || error) {
        navigate('/services');
      }
    }, 3 * 1000);
  }, [post.error, error, navigate]);

  useEffect(() => {
    if (post.save === 'ok') {
      navigate('/services');
      dispatch(fetchPostReset());
    };
  }, [dispatch, navigate, post.save]);

  function inputName(ev: ChangeEvent<HTMLInputElement>) {
    setInput((prev) => ({...prev, name: ev.target.value}));
  };

  function inputPrice(ev: ChangeEvent<HTMLInputElement>) {
    setInput((prev) => ({...prev, price: Number(ev.target.value)}));
  };

  function inputContent(ev: ChangeEvent<HTMLInputElement>) {
    setInput((prev) => ({...prev, content: ev.target.value}));
  };

  function enterService(ev: SyntheticEvent) {
    ev.preventDefault();
    dispatch(fetchPost(input));
    navigate(-1)
  };

  if (post.error || error) {
    return <Error/>;
  };

  return (
    <Form onSubmit={enterService} opacity={loading || post.loading ? '0.3' : '1'}>
      <HiddenDiv none={loading || post.loading ? 'block' : 'none'}/>
      <EditInput>
        <label htmlFor="name">Название</label>
        <input name='name' type="text"
          required
          value={input.name === '' ? '' : input.name}
          onChange={inputName} />
        <label htmlFor="price">Стоимость</label>
        <input name='price' type="text"
          required
          value={input.price}
          onChange={inputPrice} />
        <label htmlFor="description">Описание</label>
        <input name='description' type="text"
          required
          value={input.content}
          onChange={inputContent} />
      </EditInput>
      <EditButtons>
        <button type='button' onClick={() => navigate('/services')}>Отмена</button>
        {loading || post.loading ?
          <LoaderBtn/> :
        <button type='submit'>Сохранить</button>}
      </EditButtons>
    </Form>
  );
};
