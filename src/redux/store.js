import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "./slices/roleslice";
import membersReducer from "./slices/membersSlice";

export const store = configureStore({
  reducer: {
    role: roleReducer,
    members: membersReducer,
  },
});
