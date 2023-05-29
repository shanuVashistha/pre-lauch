import { useSelector } from "react-redux";
import { AppStateType, SET_USER, store } from "@/store";
import { UserInterface } from "@/types";

export interface LoginParams {
    username: string
    password: string
}

export class UserFactory {

    constructor () {
        const user = this.get();
        store.dispatch({
            type: SET_USER,
            user: user
        })
    }

    async login (params: LoginParams) {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });
        if (response.status === 200) {
            const { token, data } = await response.json(); // Assuming the response contains a token property
            this.set(data);
            this.setToken(btoa(token));
        }
    }

    async logout () {
        this.removeToken();
        this.remove();
    }

    async current (): Promise<UserInterface> {
        return this.get();
    }

    set (user: any) {
        if (typeof localStorage !== "undefined") {
            localStorage.setItem("user", btoa(JSON.stringify(user)));
        }
        store.dispatch({
            type: SET_USER,
            user: user
        })
    }

    get (): any {
        if (typeof localStorage !== "undefined") {
            try {
                const userData = localStorage.getItem("user");
                if (userData) {
                    const decodedData = atob(userData);
                    const parsedData = JSON.parse(decodedData);
                    if (typeof parsedData === "object" && parsedData !== null) {
                        return parsedData;
                    }
                }
            } catch (e) {
                console.warn(e);
            }
        }

        return {}; // Return an empty object if any error occurs or user data is not available
    }

    setToken (token: any) {
        if (typeof localStorage !== "undefined") {
            localStorage.setItem("login_token", token);
        }
    }

    removeToken () {
        if (typeof localStorage !== "undefined") {
            localStorage.removeItem("login_token");
        }
    }

    getToken () {
        if (typeof localStorage !== "undefined") {
            return localStorage.getItem("login_token");
        }
    }

    remove () {
        localStorage.removeItem("user");
        store.dispatch({
            type: SET_USER,
            user: null
        })
    }
}

export const $user = new UserFactory();

export function useCurrentUser () {
    return useSelector<AppStateType, any>(state => state.user);
}

export function useCurrentUserData () {
    return $user.get();
}
