import { createSlice } from "@reduxjs/toolkit";
import currentUser from "./../data/user.json";

const userSlice = createSlice({
  name: "user",
  initialState: currentUser,
  reducers: {
    updateProfile(state, action) {
      state = { ...action.payload };
      return state;
    },
  },
});

export const { updateProfile } = userSlice.actions;
export default userSlice.reducer;
