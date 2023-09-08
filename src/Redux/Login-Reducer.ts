import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { create, getAll, update } from './Action';


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
    const response = await create('users', data)
    try {
      return response.data;
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


//update action
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await update(data.id, 'users', data);
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
        state.user_data.push(action.payload)
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
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // state.user_data = action.payload;
        state.user_data = state.user_data.map((i: any) =>
          i.id === action.payload.id ? action.payload : i
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

  },
});

export default userSlice.reducer;
