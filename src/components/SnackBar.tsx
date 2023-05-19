import React, { useContext } from 'react';
import { Alert, Slide, SlideProps, Snackbar } from "@mui/material";
import { SnackbarContext } from "@/context/SnackbarContext";

const SlideTransition = (props: SlideProps) => {
    return <Slide {...props} direction="up"/>;
}

export const SnackBar: React.FC = () => {
    const { snackbarMessage, snackbarType, closeSnackbar } = useContext(SnackbarContext);

    const open = Boolean(snackbarMessage);

    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={closeSnackbar}
            TransitionComponent={SlideTransition}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert severity={snackbarType} onClose={closeSnackbar}>
                {snackbarMessage}
            </Alert>
        </Snackbar>
    );
}
