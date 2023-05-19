import React, { useContext } from "react";
import PrivateLayout from "@/components/Layout/privateLayout";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { LoaderContext } from "@/context/LoaderContext";
import { SnackbarContext } from "@/context/SnackbarContext";

const fieldNames = {
    username: 'Username',
    currentPassword: "Current Password",
    newPassword: "New Password",
    confirmPassword: "Confirm Password"
};

const Security: React.FC = () => {
    const { setIsLoading } = useContext(LoaderContext);
    const { openSnackbar } = useContext(SnackbarContext);
    const [params, setParams] = React.useState<any>({
        username: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = React.useState<any>({});

    const setParam = (key: string, value: any) => {
        setParams((prevParams: any) => {
            return {
                ...prevParams,
                [key]: value,
            };
        });
        setErrors((prevErrors: any) => {
            const { [key]: deletedKey, ...restErrors } = prevErrors;
            return restErrors;
        });
    }

    const save = async () => {
        setIsLoading(true);

        const emptyParams = Object.keys(params).filter(key => !params[key]);

        if (emptyParams.length > 0) {
            const newErrors = emptyParams.reduce((acc, cur) => {
                acc[cur] = `${fieldNames[cur]} is required`;
                return acc;
            }, {});
            setErrors(prevErrors => ({ ...prevErrors, ...newErrors }));
        }

        if (params.newPassword !== params.confirmPassword) {
            setErrors(prevErrors => ({
                ...prevErrors,
                confirmPassword: "New Password and Confirm Password do not match"
            }));
        }

        if (Object.keys(errors).length > 0 || emptyParams.length > 0) {
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/update/password", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });
            const data = await response.json();
            if (data.error) {
                openSnackbar(data.error, 'error');
            } else if (data.message) {
                openSnackbar(data.message, 'success');
            }
        } catch (e) {
            openSnackbar(e.message, 'error');
        }

        setIsLoading(false);
    }


    return <PrivateLayout title="Enjoy Mondays Pre Launch - Security">
        <Grid container alignItems="center" className="gap-[8px] mb-[12px]">
            <Typography variant="h5" component={Grid} item xs className="font-medium">
                Password Security
            </Typography>
            <div>
                <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    onClick={save}
                >
                    Update
                </Button>
            </div>
        </Grid>
        <Grid container className="pt-[20px] gap-[16px]">
            <Grid item md sm={6} xs={12}>
                <TextField
                    fullWidth
                    label="Username"
                    variant="outlined"
                    value={params.username}
                    onChange={(e) => setParam("username", e.target.value)}
                    error={!!errors.username}
                    helperText={errors.username}
                />
            </Grid><Grid item md sm={6} xs={12}>
            <TextField
                fullWidth
                label="Current Password"
                variant="outlined"
                type="password"
                value={params.currentPassword}
                onChange={(e) => setParam("currentPassword", e.target.value)}
                error={!!errors.currentPassword}
                helperText={errors.currentPassword}
            />
        </Grid>
            <Grid item md sm={6} xs={12}>
                <TextField
                    fullWidth
                    label="New Password"
                    variant="outlined"
                    type="password"
                    value={params.newPassword}
                    onChange={(e) => setParam("newPassword", e.target.value)}
                    error={!!errors.newPassword}
                    helperText={errors.newPassword}
                />
            </Grid>
            <Grid item md sm={6} xs={12}>
                <TextField
                    fullWidth
                    label="Confirm New Password"
                    variant="outlined"
                    type="password"
                    value={params.confirmPassword}
                    onChange={(e) => setParam("confirmPassword", e.target.value)}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                />
            </Grid>
        </Grid>
    </PrivateLayout>
}

export default Security;