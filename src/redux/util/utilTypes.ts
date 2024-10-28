export interface utilStateType {
  generateModalIsOpen: boolean;
  importProject: {
    modalIsOpen: boolean;
    github: {
      infoIsOpen: boolean;
      permissionIsOpen: boolean;
    };
  };
}

export interface utilActionType {
  payload: RecursivePartial<utilStateType>;
}

type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends object ? RecursivePartial<T[P]> : T[P];
};
