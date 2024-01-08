import { createSlice } from "@reduxjs/toolkit";

const imageUploadSlice = createSlice({
  name: "user",
  initialState: {
    profileImage: null,
  },
  reducers: {
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
  },
});

export const { setProfileImage } = imageUploadSlice.actions;
export default imageUploadSlice.reducer;
