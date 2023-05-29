import React, {createContext, useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {LoaderContext} from "@/context/LoaderContext";
import {LoginInterface} from "@/types";
import {login, logout} from "@/store/middleware/authMiddleware";

interface AuthContextProps {
    login: (params: LoginInterface) => void;
    logout: () => void;
    token?: string;
}

const AuthContext = createContext<AuthContextProps>({
    login: () => {
    },
    logout: () => {
    },
    token: "",
});

export const AuthProvider: React.FC<any> = ({children}: { children: any }) => {
    const dispatch: any = useDispatch();
    const router: any = useRouter();
    const {setIsLoading} = useContext(LoaderContext);
    const token: any = useSelector((state: any) => state.auth.token);

    const handleLogin = (params: LoginInterface) => {
        setIsLoading(true);
        dispatch(login(params))
            .then(() => {
                setIsLoading(false);
                let token = localStorage.getItem("token");
                if(token){
                    router.push("/admin");
                }
            })
            .catch((error: any) => {
                console.error(error);
                setIsLoading(false);
            });
    };

    const handleLogout = () => {
        setIsLoading(true);
        dispatch(logout())
            .then(() => {
                router.push("/login");
            })
            .catch((error: any) => {
                console.error(error);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        setIsLoading(true);
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            const lastAdminRoute = localStorage.getItem("lastAdminRoute");
            router.push(lastAdminRoute || "/admin");
        } else {
            router.push("/login");
        }

        setIsLoading(false);
    }, [token]);

    useEffect(() => {
        localStorage.setItem("lastAdminRoute", router.asPath);
    }, [router.pathname]);

    return (
        <AuthContext.Provider value={{login: handleLogin, logout: handleLogout, token}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
