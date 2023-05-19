import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

type SnackbarContextType = {
    openSnackbar: (message: string, type: 'success' | 'error' | 'warning' | 'info') => void;
    closeSnackbar: () => void;
    snackbarMessage?: string;
    snackbarType?: 'success' | 'error' | 'warning' | 'info';
};

export const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

type SnackbarProviderProps = {
    children: ReactNode;
};

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ children }) => {
    const [snackbarMessage, setSnackbarMessage] = useState<string | undefined>(undefined);
    const [snackbarType, setSnackbarType] = useState<'success' | 'error' | 'warning' | 'info' | undefined>(undefined);

    const openSnackbar = useCallback(
        (message: string, type: 'success' | 'error' | 'warning' | 'info') => {
            setSnackbarMessage(message);
            setSnackbarType(type);
        },
        []
    );

    const closeSnackbar = useCallback(() => {
        setSnackbarMessage(undefined);
        setSnackbarType(undefined);
    }, []);

    return (
        <SnackbarContext.Provider value={{ openSnackbar, closeSnackbar, snackbarMessage, snackbarType }}>
            {children}
        </SnackbarContext.Provider>
    );
};

export const useSnackbar = () => {
    const snackbarContext = useContext(SnackbarContext);

    if (!snackbarContext) {
        throw new Error('useSnackbar must be used within a SnackbarProvider');
    }

    return snackbarContext;
};
