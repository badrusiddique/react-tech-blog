import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";

const storeContext = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default storeContext;
