import { createSlice } from "@reduxjs/toolkit";

const inisialValue = {
  seat: [],
};
const actionSlice = createSlice({
  name: "seats",
  initialState: inisialValue,
  reducers: {
    addSeat(state, action) {
        state.seat.push(action.payload);
    },
  },
});
export default actionSlice.reducer;
export const { addSeat } = actionSlice.actions;
