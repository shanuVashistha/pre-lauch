import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { LoaderContext, LoaderProvider } from "@/context/LoaderContext";
import { useContext } from "react";
import Loader from "@/utils/Loader";

export default function App ({ Component, pageProps }: AppProps) {
    const { isLoading, setIsLoading } = useContext(LoaderContext);
    return <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
        <LoaderProvider>
            <Component {...pageProps} />
            <Loader/>
        </LoaderProvider>
    </LoaderContext.Provider>
}
