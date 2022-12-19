import { configureStore } from "@reduxjs/toolkit";
import { dummyReducer } from "../features";

const store = configureStore({
  reducer: {
    dummyReducer: dummyReducer,
  },
});

export default store;
