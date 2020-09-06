const initState: IAuthState = { showSignUp: false, showSignIn: false };

export interface IAuthState {
  showSignIn: boolean;
  showSignUp: boolean;
}

export enum EAuthAction {
  SIGNIN_SHOW,
  SIGNUP_SHOW,
  ALL_HIDE,
}

const reducer = (state: IAuthState, action: EAuthAction): IAuthState => {
  console.log(action);
  switch (action) {
    case EAuthAction.SIGNIN_SHOW:
      return { showSignIn: true, showSignUp: false };
    case EAuthAction.SIGNUP_SHOW:
      return { showSignIn: false, showSignUp: true };
    case EAuthAction.ALL_HIDE:
      return initState;
    default:
      return state;
  }
};

export default { reducer, initState };
