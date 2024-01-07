import { configureStore } from "@reduxjs/toolkit";
import dataStoreReducer from "./dataStoreSlice";

export const store = configureStore({
  reducer: {
    dataStore: dataStoreReducer,
  },
});
