import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import { fetchGet } from '../store/sliceGet';
import { fetchDelete } from '../store/sliceDelete';
import { fetchGetId } from '../store/sliceGetId';
import Error from './Error';
import Loader from './Loader';

export default function ServiceList() {
  const navigate = useNavigate();
  const [removeId, setRemoveId] = useState([]);
  const { items, loading, error } = useAppSelector(state => state.sliceGet);
  const removeLoading = useAppSelector(state => state.sliceDelete.loading);
  const removeError = useAppSelector(state => state.sliceDelete.error);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchGet());
  }, [dispatch]);

  function handleRemove(id) {
    setRemoveId((prev) => ([...prev, id]));
    dispatch(fetchDelete(id));
  };

  function handleEdit(id) {
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
      {items.map(o => (
        <li key={o.id}>
          <p className="item-text">{`${o.name} ${o.price}`}</p>
          {!removeLoading || !removeId.includes(o.id) ?
            <div>
              <button className="btn-edit" onClick={() => handleEdit(o.id)}></button>
              <button className="btn-remove" onClick={() => handleRemove(o.id)}></button>
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

