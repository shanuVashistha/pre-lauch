import React, { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { LoaderContext } from "@/context/LoaderContext";
import { $user } from "@/factories/UserFactory";

interface AuthContextProps {
    token?: any;
}

const AuthContext = createContext<AuthContextProps>({
    token: null,
});

export const AuthProvider: React.FC<any> = ({ children }: { children: any }) => {
    const dispatch: any = useDispatch();
    const router = useRouter();
    const token = $user.getToken();
    const { setIsLoading } = useContext(LoaderContext);

    useEffect(() => {
        setIsLoading(true);
        if (token) {
            const lastAdminRoute = localStorage.getItem("lastAdminRoute");
            router.push(lastAdminRoute || "/admin");
        } else {
            router.push("/login");
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        localStorage.setItem("lastAdminRoute", router.asPath);
    }, [router.pathname]);

    return (
        <AuthContext.Provider value={{ token }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextProps => useContext(AuthContext);
