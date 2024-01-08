import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
};

export const deleteSlice = createSlice({
  name: "deleteSlice",
  initialState,
  reducers: {
    setUserID: (state, action) => {
      state.userId = action.payload._id;
    },
    removeUserID: (state) => {
      state.userId = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserID, removeUserID } = deleteSlice.actions;

export default deleteSlice.reducer;
