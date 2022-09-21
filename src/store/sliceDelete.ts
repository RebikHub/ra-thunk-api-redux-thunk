import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStatus } from "../interfaces/interfaces";
import axios from "axios";
import type { AppDispatch } from './index';
import { fetchGet } from "./sliceGet";

const initialState: IStatus = {
  loading: false,
  error: null,
};


export const sliceDelete = createSlice({
  name: 'sliceDelete',
  initialState: initialState,
  reducers: {
    fetchDeleteRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDeleteError: (state, actions: PayloadAction<null | string>) => {
      state.loading = false;
      state.error = actions.payload;
    },
    fetchDeleteSuccess: (state) => {
    state.loading = false;
    state.error = null;
    }
  }
});

export const fetchDelete = (id: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchDeleteRequest());
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}/${id}`);
      console.log(response);
      
      if (response.status !== 204) {
        throw new Error(response.statusText);
      };
      dispatch(fetchDeleteSuccess());
    } catch (e: any) {
      dispatch(fetchDeleteError(e.message));
    };
    dispatch(fetchGet());
  };
};

export const {
  fetchDeleteRequest,
  fetchDeleteError,
  fetchDeleteSuccess
} = sliceDelete.actions;

export default sliceDelete.reducer;