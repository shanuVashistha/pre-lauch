import '@/styles/globals.css';
import React, { useContext } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { LoaderContext, LoaderProvider } from '@/context/LoaderContext';
import Loader from '@/utils/Loader';
import { useRouter } from 'next/router';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import authReducer from "@/store/reducers/authReducer";
import { SnackbarProvider } from "@/context/SnackbarContext";
import { SnackBar } from "@/components/SnackBar";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default function App ({ Component, pageProps }: AppProps) {
    const { isLoading, setIsLoading } = useContext(LoaderContext);
    const { login, logout, token } = useAuth();
    const router = useRouter();
    const blogRoutePattern = /^\/blog(\/.*)?$/;
    const isBlogRoute = router.pathname.match(blogRoutePattern);

    const unprotectedRoutes = [
        "/",
        "/home",
        "/calculator",
    ];

    return (
        <Provider store={store}>
            <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
                <LoaderProvider>
                    <SnackbarProvider>
                        {!isBlogRoute && !unprotectedRoutes.includes(router.pathname) ? (
                            <AuthProvider login={login} logout={logout} token={token}>
                                <Component {...pageProps} />
                            </AuthProvider>
                        ) : (
                            <Component {...pageProps} />
                        )}
                        <Loader/>
                        <SnackBar/>
                    </SnackbarProvider>
                </LoaderProvider>
            </LoaderContext.Provider>
        </Provider>
    );
}
