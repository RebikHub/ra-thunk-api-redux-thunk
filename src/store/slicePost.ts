import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostSave, Item } from "../interfaces/interfaces";
import axios from "axios";
import type { AppDispatch } from './index';

const initialState: IPostSave = {
  loading: false,
  error: null,
  save: null
};

export const slicePost = createSlice({
  name: 'slicePost',
  initialState: initialState,
  reducers: {
    fetchPostRequest: (state) => {
    state.loading = true;
    state.error = null;
    state.save = null;
    },
    fetchPostError: (state, actions: PayloadAction<null | string>) => {
      state.loading = false;
      state.error = actions.payload;
      state.save = null;
    },
    fetchPostSuccess: (state) => {
      state.loading = false;
      state.error = null;
      state.save = 'ok';
    },
    fetchPostReset: (state) => {
      state.loading = false;
      state.error = null;
      state.save = null;
    },
  }
});

export const fetchPost = (item: Item) => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchPostRequest());
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}`, item);
      console.log(response);
      
      if (response.status !== 204) {
        throw new Error(response.statusText);
      };
      dispatch(fetchPostSuccess());
    } catch (e: any) {
      dispatch(fetchPostError(e.message));
    };
  };
};

export const {
  fetchPostRequest,
  fetchPostError,
  fetchPostSuccess,
  fetchPostReset
} = slicePost.actions;

export default slicePost.reducer;
