import { createSlice } from "@reduxjs/toolkit";
import { utilActionType, utilStateType } from "./utilTypes";

const initialState: utilStateType = {
  generateModalIsOpen: false,
};

export const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    SET_GENERATE_MODAL_STATE: (state, action: utilActionType) => {
      state.generateModalIsOpen = action.payload.generateModalIsOpen;
    },
  },
});

export const { SET_GENERATE_MODAL_STATE } = utilSlice.actions;
export default utilSlice.reducer;
