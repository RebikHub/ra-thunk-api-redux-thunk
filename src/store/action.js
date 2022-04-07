export const FETCH_GET_SUCCESS = 'FETCH_GET_SUCCESS';
export const FETCH_GET_ERROR = 'FETCH_GET_ERROR';
export const FETCH_GET_REQUEST = 'FETCH_GET_REQUEST';

export const FETCH_GET_ID_SUCCESS = 'FETCH_GET_ID_SUCCESS';
export const FETCH_GET_ID_ERROR = 'FETCH_GET_ID_ERROR';
export const FETCH_GET_ID_REQUEST = 'FETCH_GET_ID_REQUEST';

export const FETCH_DELETE_SUCCESS = 'FETCH_DELETE_SUCCESS';
export const FETCH_DELETE_ERROR = 'FETCH_DELETE_ERROR';
export const FETCH_DELETE_REQUEST = 'FETCH_DELETE_REQUEST';

export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_ERROR = 'FETCH_POST_ERROR';
export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST';
export const FETCH_POST_RESET = 'FETCH_POST_RESET';

export const fetchGetRequest = () => ({
  type: FETCH_GET_REQUEST,
});

export const fetchGetError = (error) => ({
  type: FETCH_GET_ERROR,
  payload: {
    error,
  },
});

export const fetchGetSuccess = (items) => ({
  type: FETCH_GET_SUCCESS,
  payload: {
    items,
  },
});

export const fetchDeleteRequest = () => ({
  type: FETCH_DELETE_REQUEST,
});

export const fetchDeleteError = (error) => ({
  type: FETCH_DELETE_ERROR,
  payload: {
    error,
  },
});

export const fetchDeleteSuccess = () => ({
  type: FETCH_DELETE_SUCCESS,
});

export const fetchGetIdRequest = () => ({
  type: FETCH_GET_ID_REQUEST,
});

export const fetchGetIdError = (error) => ({
  type: FETCH_GET_ID_ERROR,
  payload: {
    error,
  },
});

export const fetchGetIdSuccess = (item) => ({
  type: FETCH_GET_ID_SUCCESS,
  payload: {
    item
  }
});

export const fetchPostRequest = () => ({
  type: FETCH_POST_REQUEST,
});

export const fetchPostError = (error) => ({
  type: FETCH_POST_ERROR,
  payload: {
    error,
  },
});

export const fetchPostSuccess = () => ({
  type: FETCH_POST_SUCCESS,
});

export const fetchPostReset = () => ({
  type: FETCH_POST_RESET,
});
