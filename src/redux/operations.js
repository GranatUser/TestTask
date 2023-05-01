import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://641fbb4a25cb6572103c6acb.mockapi.io/api/v1";


export const fetchUsers = createAsyncThunk(
    "users/fetchAll",
    async (_, thunkAPI) => {
        try {
            const users = await axios.get('/users');
            return users.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
export const toggleStatus = createAsyncThunk(
    "users/toggleCompleted",
    async (user, thunkAPI) => {
        
      try {
        const response = await axios.put(`/users/${user.id}`, {
          status: !user.status,
          followers:Number(!user.status?user.followers+1:user.followers-1)
        });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );