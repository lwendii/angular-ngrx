import { Action } from '@ngrx/store';

// Version 7 and older
export enum ActionTypes {
  Login = '[Login Page] Login',
}

export class Login implements Action {
  readonly type = ActionTypes.Login;

  constructor(public payload: { username: string; password: string }) {}
}

export type Union = Login;
