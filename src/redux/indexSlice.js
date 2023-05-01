import { createSlice } from "@reduxjs/toolkit";

const initialState=3;

const indexSlice=createSlice({
    name:'index',
    initialState:initialState,
    reducers:{
            setIndex(state,action){
               return state+3;
            }
    }

})
export const {setIndex}=indexSlice.actions;
export const indexReducer = indexSlice.reducer;