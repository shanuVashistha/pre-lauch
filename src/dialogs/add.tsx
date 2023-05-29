import React, { useContext } from "react";
import { Button, Dialog, DialogProps, Divider, Grid, IconButton, TextField } from "@mui/material";
import { XCircle } from "react-feather";
import { UserInterface } from "@/types";
import { PasswordInput } from "@/utils/PasswordInput";
import { LoaderContext } from "@/context/LoaderContext";

const fieldNames: any = {
    username: 'Username',
    password: "Password",
    phone: "Phone Number",
    email: "Email Address",
    last_name: "Last Name",
    first_name: "First Name",
    confirm_password: "Confirm Password",
};

interface AddEditorDialogInterface extends DialogProps {
    onSuccess: (params: any) => void;
    onCancel: () => void;
}

export const AddEditors: React.FC<AddEditorDialogInterface> = (props) => {
    const { setIsLoading } = useContext(LoaderContext);
    const { onSuccess, onCancel, open, ...rest } = props;
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState<boolean>(false);
    const [errors, setErrors] = React.useState<any>({});
    const [params, setParams] = React.useState<UserInterface | any>({
        role: "editor",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: "",
        status: "active",
    });
    const resetParams = () => {
        setParams({
            role: "editor",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            password: "",
            confirm_password: "",
            status: "active"
        });
    }
    const setParam = (key: string, value: any) => {
        setParams((prev: any) => ({ ...prev, [key]: value }));
        setErrors((prevErrors: any) => {
            const { [key]: deletedKey, ...restErrors } = prevErrors;
            return restErrors;
        });
    }

    const save = async () => {
        setIsLoading(true);
        const emptyParams: any = Object.keys(params).filter((key: string) => !params[key]);

        if (emptyParams.length > 0) {
            const newErrors = emptyParams.reduce((acc: any, cur: any) => {
                acc[cur] = `${fieldNames[cur]} is required`;
                return acc;
            }, {});
            setErrors((prevErrors: any) => ({ ...prevErrors, ...newErrors }));
        }

        if (params.password !== params.confirm_password) {
            setErrors((prevErrors: any) => ({
                ...prevErrors,
                confirmPassword: "New Password and Confirm Password do not match"
            }));
        }

        if (Object.keys(errors).length > 0 || emptyParams.length > 0) {
            setIsLoading(false);
            return;
        }
        await onSuccess(params);
        await resetParams();
    }

    return (
        <Dialog
            fullWidth
            maxWidth={"md"}
            open={open}
            {...rest}
            onClose={onCancel}
        >
            <Grid container alignItems="center" className="p-2">
                <Grid
                    component="h3"
                    item xs
                    className="text-[23px] font-medium text-primary p-2"
                >
                    Add Editor
                </Grid>
                <Grid className="p-2">
                    <IconButton
                        size="small"
                        onClick={async () => {
                            await resetParams();
                            onCancel();
                        }}
                    >
                        <XCircle size={24}/>
                    </IconButton>
                </Grid>
            </Grid>
            <Divider/>
            <Grid container className="p-2">
                <Grid item xs={12} sm={6} className="p-2">
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="First Name"
                        value={params.first_name}
                        error={!!errors.first_name}
                        helperText={errors.first_name}
                        onChange={(e) => setParam("first_name", e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} className="p-2">
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Last Name"
                        value={params.last_name}
                        error={!!errors.last_name}
                        helperText={errors.last_name}
                        onChange={(e) => setParam("last_name", e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} className="p-2">
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Email"
                        value={params.email}
                        error={!!errors.email}
                        helperText={errors.email}
                        onChange={(e) => setParam("email", e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} className="p-2">
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Phone No."
                        value={params.phone}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        onChange={(e) => setParam("phone", e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} className="p-2">
                    <PasswordInput
                        label="Password"
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        value={params.password}
                        error={!!errors.password}
                        helperText={errors.password}
                        onChange={(e) => setParam("password", e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6} className="p-2">
                    <PasswordInput
                        label="Confirm Password"
                        showPassword={showConfirmPassword}
                        setShowPassword={setShowConfirmPassword}
                        value={params.confirm_password}
                        error={!!errors.confirm_password}
                        helperText={errors.confirm_password}
                        onChange={(e) => setParam("confirm_password", e.target.value)}
                    />
                </Grid>
            </Grid>
            <Divider/>
            <Grid container alignItems="center" justifyContent="flex-end" className="p-2">
                <Grid className="p-2">
                    <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        onClick={save}
                    >
                        Create
                    </Button>
                </Grid>
            </Grid>
        </Dialog>
    );
}
