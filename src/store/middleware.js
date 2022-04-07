import {
  fetchGetRequest,
  fetchGetError,
  fetchGetSuccess,
  fetchDeleteRequest,
  fetchDeleteError,
  fetchDeleteSuccess,
  fetchGetIdRequest,
  fetchGetIdError,
  fetchGetIdSuccess,
  fetchPostRequest,
  fetchPostError,
  fetchPostSuccess,
} from './action';

export const fetchGet = () => {
  return async (dispatch) => {
    dispatch(fetchGetRequest());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      };
      const data = await response.json();
      dispatch(fetchGetSuccess(data));
    } catch (e) {
      dispatch(fetchGetError(e.message));
    };
  };
};

export const fetchDelete = (id) => {
  return async (dispatch) => {
    dispatch(fetchDeleteRequest());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      };
      dispatch(fetchDeleteSuccess());
    } catch (e) {
      dispatch(fetchDeleteError(e.message));
    };
    dispatch(fetchGet());
  };
};

export const fetchGetId = (id) => {
  return async (dispatch) => {
    dispatch(fetchGetIdRequest());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      };
      const data = await response.json();
      dispatch(fetchGetIdSuccess(data));
    } catch (e) {
      dispatch(fetchGetIdError(e.message));
    };
  };
};

export const fetchPost = (item) => {
  return async (dispatch) => {
    dispatch(fetchPostRequest());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
        method: 'POST',
        body: JSON.stringify(item),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      };
      dispatch(fetchPostSuccess());
    } catch (e) {
      dispatch(fetchPostError(e.message));
    };
  };
};