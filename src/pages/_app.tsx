import '@/styles/globals.css';
import React, { useContext } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { LoaderContext, LoaderProvider } from '@/context/LoaderContext';
import Loader from '@/utils/Loader';
import { useRouter } from 'next/router';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { SnackbarProvider } from "@/context/SnackbarContext";
import { SnackBar } from "@/components/SnackBar";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme";
import { store } from "@/store";

export default function App ({ Component, pageProps }: AppProps) {
    const { isLoading, setIsLoading } = useContext(LoaderContext);
    const { token } = useAuth();
    const router = useRouter();
    const blogRoutePattern = /^\/blog(\/.*)?$/;
    const isBlogRoute = router.pathname.match(blogRoutePattern);

    const unprotectedRoutes = [
        "/",
        "/home",
        "/employer",
        "/calculator",
        "/blogs",
        "/404"
    ];

    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
                    <LoaderProvider>
                        <SnackbarProvider>
                            {!isBlogRoute && !unprotectedRoutes.includes(router.pathname) ? (
                                <AuthProvider token={token}>
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
        </ThemeProvider>
    );
}
