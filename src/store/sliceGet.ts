import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetItems, Item } from "../interfaces/interfaces";
import axios from "axios";
import type { AppDispatch } from './index';

const initialState: IGetItems = {
  items: [],
  loading: false,
  error: null,
};

export const sliceGet = createSlice({
  name: 'sliceGet',
  initialState: initialState,
  reducers: {
    fetchGetRequest: (state) => {
    state.loading = true;
    state.error = null;
    },
    fetchGetError: (state, actions: PayloadAction<null | string>) => {
      state.loading = false;
      state.error = actions.payload;
    },
    fetchGetSuccess: (state, actions: PayloadAction<Item[]>) => {
      state.items = actions.payload;
      state.loading = false;
      state.error = null;
    }
  }
});

export const fetchGet = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchGetRequest());
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
      console.log(response);
      
      if (response.status !== 200) {
        throw new Error(response.statusText);
      };

      dispatch(fetchGetSuccess(response.data));
    } catch (e: any) {
      dispatch(fetchGetError(e.message));
    };
  };
};

export const {
  fetchGetRequest,
  fetchGetError,
  fetchGetSuccess
} = sliceGet.actions;

export default sliceGet.reducer;



// export const getTodoAsync = (data) => async (dispatch) => {
//   try {
//     const response = await axios.get(`${API_URL}/${data}`);
//     dispatch(getTodo(response.data));
//   } catch (err) {
//     throw new Error(err);
//   }
// };

// export const addTodoAsync = (data) => async (dispatch) => {
//   try {
//     // console.log(data);
//     const response = await axios.post(API_URL, data);
//     // console.log(response);
//     dispatch(addTodo(response.data));
//   } catch (err) {
//     throw new Error(err);
//   }
// };