export interface IUserState {
  data: {};
}

export interface IUserAction {
  type: IUserActionType;
  payload?: IUserState;
}

export enum IUserActionType {
  USER,
  LOGOUT,
}

const initState: IUserState = { data: {} };

const reducer = (state: IUserState, action: IUserAction): IUserState => {
  switch (action.type) {
    case IUserActionType.USER:
      return action.payload ?? state;
    case IUserActionType.LOGOUT:
      return initState;
    default:
      return state;
  }
};

export default { reducer, initState };
