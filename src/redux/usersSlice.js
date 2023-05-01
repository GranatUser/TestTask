import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers,toggleStatus } from "./operations";

const usersInitialState = {
    users: [],
    isLoading: false,
    error: null,

};

const handlePending = state => {
    state.isLoading = true;
};
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const usersSlice = createSlice({
    name: 'users',
    initialState: usersInitialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, handlePending)
        .addCase(fetchUsers.rejected, handleRejected)

        .addCase(toggleStatus.pending, handlePending)
        .addCase(toggleStatus.rejected, handleRejected)

        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
          
            
        })


      
        .addCase(toggleStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.users.findIndex(
                user => ( user.id === action.payload.id)
              );
              state.users.splice(index, 1, action.payload);
        })

    }
   
    
});
export const usersReducer = usersSlice.reducer;