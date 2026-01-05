import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: true,
  userProfile: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userProfile = action.payload.userProfile;
    },
    logout: (state) => {
      state.status = false;
      state.userProfile = null;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
