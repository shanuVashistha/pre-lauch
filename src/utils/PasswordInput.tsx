import React from "react";
import {BaseTextFieldProps, IconButton, InputAdornment, TextField} from "@mui/material";
import {Eye, EyeOff} from "react-feather";

interface PasswordInputInterface extends Partial<BaseTextFieldProps> {
    showPassword: boolean;
    setShowPassword: (value: boolean) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput: React.FC<PasswordInputInterface> = (props) => {
    const {showPassword, setShowPassword, onChange, ...rest} = props;
    return <TextField
        fullWidth
        variant="outlined"
        type={showPassword ? "text" : "password"}
        {...rest}
        onChange={onChange}
        InputProps={{
            endAdornment: <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Eye size={20}/> : <EyeOff size={20}/>}
                </IconButton>
            </InputAdornment>

        }}
    />;
}