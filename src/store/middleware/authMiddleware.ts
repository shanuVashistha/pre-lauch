import { AnyAction, Dispatch } from 'redux';
import { RootState } from '../reducers';
import { loginFailure, loginSuccess, logoutSuccess } from "../actions/authActions";

export const login = (credentials: { username: string; password: string }) => async (
    dispatch: Dispatch<AnyAction>,
    getState: () => RootState
) => {
    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });

        if (response.status === 200) {
            const { token } = await response.json(); // Assuming the response contains a token property
            localStorage.setItem('token', token);
            dispatch(loginSuccess(token));
        } else {
            const error = await response.text();
            dispatch(loginFailure(error));
        }
    } catch (error: any) {
        dispatch(loginFailure(error.message));
    }
};

export const logout = () => async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    localStorage.removeItem('token');
    dispatch(logoutSuccess());
};
