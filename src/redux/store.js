import { configureStore } from "@reduxjs/toolkit";
import {usersReducer} from './usersSlice';
import { indexReducer } from "./indexSlice";
import { filtersReducer } from "./filterSlice";
export const store = configureStore({
    reducer: {
      users: usersReducer,
      index:indexReducer,
      filter:filtersReducer
    },
  });