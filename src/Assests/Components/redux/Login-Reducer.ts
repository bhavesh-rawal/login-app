import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { create, getAll } from './Action';


interface User {
  user_data: User[];
  loading: boolean;
  error: null;
  searchData: User[];
}


//create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data: any, { rejectWithValue }) => {
    // console.log("data", data);
    const response = await create('users', data);
    try {
      const result = await response.data;
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


// Read action
export const getUser = createAsyncThunk(
  "getUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAll('users');
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  }
);

interface UserState {
  user_data: User[];
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  user_data: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.user_data = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user_data = action.payload;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
