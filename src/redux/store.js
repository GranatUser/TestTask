import { configureStore } from "@reduxjs/toolkit";
import {usersReducer} from './usersSlice';
import { indexReducer } from "./indexSlice";
export const store = configureStore({
    reducer: {
      users: usersReducer,
      index:indexReducer
    },
  });