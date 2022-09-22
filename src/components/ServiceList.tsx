import * as React from 'react';
import { ReactElement, useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { fetchGet } from '../store/sliceGet';
import { fetchDelete } from '../store/sliceDelete';
import { fetchGetId } from '../store/sliceGetId';
import Error from './Error';
import Loader from './Loader';
import { Item } from 'src/interfaces/interfaces';
import { ButtonList, ItemText } from 'src/styles/styles';

type RemoveId = number[]

export default function ServiceList(): ReactElement {
  const navigate = useNavigate();
  const [removeId, setRemoveId] = useState<RemoveId>([]);
  const { items, loading, error } = useAppSelector(state => state.sliceGet);
  const removeLoading = useAppSelector(state => state.sliceDelete.loading);
  const removeError = useAppSelector(state => state.sliceDelete.error);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchGet());
  }, [dispatch]);

  function handleRemove(id: number) {
    setRemoveId((prev) => ([...prev, id]));
    dispatch(fetchDelete(id));
  };

  function handleEdit(id: number) {
    dispatch(fetchGetId(id));
    navigate("/edit");
  };

  if (loading) {
    return <Loader/>;
  };

  if (error || removeError) {
    return <Error/>;
  };

  return (
    <ul>
      {items.map((o: Item) => (
        <li key={o.id}>
          <ItemText>{`${o.name} ${o.price}`}</ItemText>
          {!removeLoading || !removeId.includes(o.id) ?
            <div>
              <ButtonList image='edit.png' onClick={() => handleEdit(o.id)}></ButtonList>
              <ButtonList image='remove.png' onClick={() => handleRemove(o.id)}></ButtonList>
            </div> :
            <div>
              <div className="loader-btn" ></div>
            </div>
          }
        </li>
      ))}
    </ul>
  );
};

