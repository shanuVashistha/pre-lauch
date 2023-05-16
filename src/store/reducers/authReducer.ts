import { AnyAction } from 'redux';

interface AuthState {
    token: string | null;
    error: string | null;
}

const initialState: AuthState = {
    token: null,
    error: null,
};

const authReducer = (state = initialState, action: AnyAction): AuthState => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                token: action.payload,
                error: null,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                token: null,
                error: action.payload,
            };
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                token: null,
                error: null,
            };
        default:
            return state;
    }
};

export default authReducer;
