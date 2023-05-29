import React, { useContext, useState } from "react";
import PrivateLayout from "@/components/Layout/privateLayout";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { LoaderContext } from "@/context/LoaderContext";
import { useSnackbar } from "@/context/SnackbarContext";
import { useCurrentUserData } from "@/factories/UserFactory";
import { PasswordInput } from "@/utils/PasswordInput";

const fieldNames: any = {
    username: 'Username',
    currentPassword: "Current Password",
    newPassword: "New Password",
    confirmPassword: "Confirm Password"
};

const Security: React.FC = () => {
    const { setIsLoading } = useContext(LoaderContext);
    const { openSnackbar } = useSnackbar();
    const user = useCurrentUserData();

    const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    const [params, setParams] = React.useState<any>({
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

        const emptyParams: any = Object.keys(params).filter(key => !params[key]);

        if (emptyParams.length > 0) {
            const newErrors = emptyParams.reduce((acc: any, cur: any) => {
                acc[cur] = `${fieldNames[cur]} is required`;
                return acc;
            }, {});
            setErrors((prevErrors: any) => ({ ...prevErrors, ...newErrors }));
        }

        if (params.newPassword !== params.confirmPassword) {
            setErrors((prevErrors: any) => ({
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
                body: JSON.stringify({ username: user.username || "", ...params })
            });
            const data = await response.json();
            if (data.error) {
                openSnackbar(data.error, 'error');
            } else if (data.message) {
                openSnackbar(data.message, 'success');
            }
        } catch (e: any) {
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
                    disabled
                    value={user.username || ""}
                />
            </Grid>
            <Grid item md sm={6} xs={12}>
                <PasswordInput
                    showPassword={showCurrentPassword}
                    setShowPassword={setShowCurrentPassword}
                    label="Current Password"
                    value={params.currentPassword}
                    onChange={(e) => setParam("currentPassword", e.target.value)}
                    error={!!errors.currentPassword}
                    helperText={errors.currentPassword}
                />
            </Grid>
            <Grid item md sm={6} xs={12}>
                <PasswordInput
                    showPassword={showNewPassword}
                    setShowPassword={setShowNewPassword}
                    label="New Password"
                    value={params.newPassword}
                    onChange={(e) => setParam("newPassword", e.target.value)}
                    error={!!errors.newPassword}
                    helperText={errors.newPassword}
                />
            </Grid>
            <Grid item md sm={6} xs={12}>
                <PasswordInput
                    showPassword={showConfirmPassword}
                    setShowPassword={setShowConfirmPassword}
                    label="Confirm New Password"
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