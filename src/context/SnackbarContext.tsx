import React, { createContext, useCallback, useState } from 'react';

type SnackbarContextType = {
    openSnackbar: (message: string, type: 'success' | 'error' | 'warning' | 'info') => void;
    closeSnackbar: () => void;
    snackbarMessage: string;
    snackbarType: 'success' | 'error' | 'warning' | 'info';
};

export const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const SnackbarProvider: React.FC = ({ children }) => {
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarType, setSnackbarType] = useState<'success' | 'error' | 'warning' | 'info'>('success');

    const openSnackbar = useCallback((message: string, type: 'success' | 'error' | 'warning' | 'info') => {
        setSnackbarMessage(message);
        setSnackbarType(type);
    }, []);

    const closeSnackbar = useCallback(() => {
        setSnackbarMessage('');
    }, []);

    return (
        <SnackbarContext.Provider value={{ openSnackbar, closeSnackbar, snackbarMessage, snackbarType }}>
            {children}
        </SnackbarContext.Provider>
    );
};
