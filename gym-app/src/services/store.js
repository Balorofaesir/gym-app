import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";

// reducers:
const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
