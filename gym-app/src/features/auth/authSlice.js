import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {login} from "./authAPI";

const initialState = {
  isAuth: false,
  token: null,
  profile: null,
  error: null,
  isLoading: false,
};

export const loginActionAsync = createAsyncThunk('auth/login', async ({email, password}) => {
  const response = await login(email, password);

  return response;
})



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      return {
        ...state,
        isAuth: false,
        token: null,
        profile: null,
      };
    },
    setAuthUser: (state, action) => {
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        profile: action.payload.profile,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginActionAsync.fulfilled, (state, action) => {
      return {
        ...state,
        isAuth: true,
        token: action.payload.token,
        profile: action.payload.profile,
      };
    });
    builder.addCase(loginActionAsync.rejected, (state, action) => {
      return {
        ...state,
        isAuth: false,
        token: null,
        error: action.error.message,
      };
    });
    builder.addCase(loginActionAsync.pending, (state) => {
      return {
        ...state,
        isAuth: false,
        token: null,
        error: null,
        isLoading: true,
      };
    });
  },
});

export const selectAuth = ({ auth }) => ({
  isAuth: auth.isAuth,
  profile: auth.profile,
  token: auth.token,
});

export const { logout, setAuthUser } = authSlice.actions;

export default authSlice.reducer;
