import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import sliceDelete from './sliceDelete';
import sliceGet from './sliceGet';
import sliceGetId from './sliceGetId';
import slicePost from './slicePost';

export const store = configureStore({
  reducer: {
    sliceDelete,
    sliceGet,
    sliceGetId,
    slicePost
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;