import { AnyAction } from 'redux';

export const loginSuccess = (token: string): AnyAction => ({
    type: 'LOGIN_SUCCESS',
    payload: token,
});

export const loginFailure = (error: string): AnyAction => ({
    type: 'LOGIN_FAILURE',
    payload: error,
});

export const logoutSuccess = (): AnyAction => ({
    type: 'LOGOUT_SUCCESS',
});
