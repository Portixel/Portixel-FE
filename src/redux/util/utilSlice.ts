import { createSlice } from "@reduxjs/toolkit";
import { utilActionType, utilStateType } from "./utilTypes";

const initialState: utilStateType = {
  generateModalIsOpen: false,
  importProject: {
    modalIsOpen: false,
    github: { infoIsOpen: false, permissionIsOpen: false },
    figma: { infoIsOpen: false },
  },
};

export const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    SET_GENERATE_MODAL_STATE: (state, action: utilActionType) => {
      state.generateModalIsOpen = action.payload.generateModalIsOpen || false;
    },

    SET_IMPORT_PROJECT_STATE: (state, action: utilActionType) => {
      state.importProject.modalIsOpen =
        action.payload.importProject?.modalIsOpen || false;

      state.importProject.github.infoIsOpen =
        action.payload.importProject?.github?.infoIsOpen || false;

      state.importProject.github.permissionIsOpen =
        action.payload.importProject?.github?.permissionIsOpen || false;

      state.importProject.figma.infoIsOpen =
        action.payload.importProject?.figma?.infoIsOpen || false;
    },
  },
});

export const { SET_GENERATE_MODAL_STATE, SET_IMPORT_PROJECT_STATE } =
  utilSlice.actions;
export default utilSlice.reducer;
