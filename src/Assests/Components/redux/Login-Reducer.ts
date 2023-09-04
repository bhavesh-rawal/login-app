import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAll } from './Action';


interface User {
  user_data: User[];
  loading: boolean;
  error: any;
  searchData: User[];
}

// Read action
export const getUser = createAsyncThunk<User[], void, { rejectValue: any }>(
  "getUser",
  async (_, { rejectWithValue }: any) => {
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
