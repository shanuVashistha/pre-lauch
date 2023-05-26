import React, {createContext, useState} from "react";
import {useRouter} from "next/router";

interface LoaderContextProps {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
}

export const LoaderContext = createContext<LoaderContextProps>({
    isLoading: false,
    setIsLoading: () => {
    },
});

export const LoaderProvider: React.FC<any> = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    // useEffect(() => {
    //     const handleStart = () => {
    //         setIsLoading(true);
    //     };
    //
    //     const handleComplete = () => {
    //         setIsLoading(false);
    //     };
    //
    //     router.events.on('routeChangeStart', handleStart);
    //     router.events.on('routeChangeComplete', handleComplete);
    //     router.events.on('routeChangeError', handleComplete);
    //
    //     if (router.isReady) {
    //         setIsLoading(false);
    //     }
    //
    //     return () => {
    //         router.events.off('routeChangeStart', handleStart);
    //         router.events.off('routeChangeComplete', handleComplete);
    //         router.events.off('routeChangeError', handleComplete);
    //     };
    // }, [router.events]);

    return (
        <LoaderContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </LoaderContext.Provider>
    );
};