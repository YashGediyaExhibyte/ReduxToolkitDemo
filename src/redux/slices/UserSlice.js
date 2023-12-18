import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      const userId = action.payload;
      const userIndex = state.findIndex((user) => user.id === userId);
      if (userIndex !== -1) {
        state.splice(userIndex, 1);
      }
    },
    clearAllUser(state) {
      return (state = []);
    },
  },
});

export default userSlice.reducer;

export const { addUser, deleteUser, clearAllUser } = userSlice.actions;
