import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../feature/ApiSlice/apiSlice";

import deleteReducer from "../feature/Delete/deleteUserSlice";
import deleteModalReducer from "../feature/Modal/DeleteModalSlice";
import authReducer from "../feature/auth/authSlice";

// import userReducer from '../State/userSlice'
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    modal: deleteModalReducer,
    deleteUser: deleteReducer,
  },
  // devTools: import.meta.env.VITE_ENV !== "PRODUCTION",
  middleware: (gDM) => gDM().concat(apiSlice.middleware),
});
