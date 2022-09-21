import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGetIdItem, Item } from "../interfaces/interfaces";
import axios from "axios";
import type { AppDispatch } from './index';

const initialState: IGetIdItem = {
  item: null,
  loading: false,
  error: null,
};

export const sliceGetId = createSlice({
  name: 'sliceGetId',
  initialState: initialState,
  reducers: {
    fetchGetIdRequest: (state) => {
    state.loading = true;
    state.error = null;
    },
    fetchGetIdError: (state, actions: PayloadAction<null | string>) => {
      state.loading = false;
      state.error = actions.payload;
    },
    fetchGetIdSuccess: (state, actions: PayloadAction<Item>) => {
      state.item = actions.payload;
      state.loading = false;
      state.error = null;
    }
  }
});

export const fetchGetId = (id: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchGetIdRequest());
    try {
      const response = await axios(`${process.env.REACT_APP_API_URL}/${id}`);
      console.log(response);
      
      if (response.status !== 200) {
        throw new Error(response.statusText);
      };
      dispatch(fetchGetIdSuccess(response.data));
    } catch (e: any) {
      dispatch(fetchGetIdError(e.message));
    };
  };
};

export const {
  fetchGetIdRequest,
  fetchGetIdError,
  fetchGetIdSuccess
} = sliceGetId.actions;

export default sliceGetId.reducer;
