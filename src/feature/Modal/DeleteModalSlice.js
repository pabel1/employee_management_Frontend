import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

export const deleteModalSlice = createSlice({
  name: "deleteModalSlice",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.show = true;
    },
    closeModal: (state) => {
      state.show = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { closeModal, showModal } = deleteModalSlice.actions;

export default deleteModalSlice.reducer;
