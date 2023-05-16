import React, { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { LoaderContext } from "@/context/LoaderContext";
import { LoginInterface } from "@/types";
import { login, logout } from "@/store/middleware/authMiddleware";

interface AuthContextProps {
    login: (params: LoginInterface) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    login: () => {
    },
    logout: () => {
    },
});

export const AuthProvider: React.FC = ({ children }: { children: any }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { setIsLoading } = useContext(LoaderContext);
    const token = useSelector((state) => state.auth.token);

    const handleLogin = (params: LoginInterface) => {
        setIsLoading(true);
        dispatch(login(params))
            .then(() => {
                router.push("/admin");
            })
            .catch((error) => {
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
            .catch((error) => {
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
        if (router.pathname.startsWith("/admin")) {
            localStorage.setItem("lastAdminRoute", router.pathname);
        }
    }, [router.pathname]);

    return (
        <AuthContext.Provider value={{ login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
