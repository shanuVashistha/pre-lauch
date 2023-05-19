import React, { useContext, useEffect } from "react";
import PrivateLayout from "@/components/Layout/privateLayout";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { LoaderContext } from "@/context/LoaderContext";
import { useSnackbar } from "@/context/SnackbarContext";

const fieldNames: any = {
    facebook: 'Facebook',
    twitter: 'Twitter',
    youtube: 'YouTube',
    linkedin: 'LinkedIn',
    instagram: 'Instagram'
};

const Social: React.FC = () => {
    const { setIsLoading } = useContext(LoaderContext);
    const { openSnackbar } = useSnackbar();
    const [params, setParams] = React.useState<any>({
        facebook: '',
        twitter: '',
        youtube: '',
        linkedin: '',
        instagram: ''
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

        if (Object.keys(errors).length > 0 || emptyParams.length > 0) {
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/update/socialMedia", {
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
        } catch (e: any) {
            openSnackbar(e.message, 'error');
        }

        setIsLoading(false);
    }

    useEffect(() => {
        const fetchSocialMediaLinks = async () => {
            setIsLoading(true);

            try {
                const response = await fetch("/api/get/socialMedia");
                const data = await response.json();

                if (data.error) {
                    openSnackbar(data.error, 'error');
                } else {
                    setParams(data);
                }
            } catch (e: any) {
                openSnackbar(e.message, 'error');
            }
            setIsLoading(false);
        }

        fetchSocialMediaLinks();
    }, []);

    return <PrivateLayout title="Enjoy Mondays Pre Launch - Social">
        <Grid container alignItems="center" className="gap-[8px] mb-[12px]">
            <Typography variant="h5" component={Grid} item xs className="font-medium">
                Social Media
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
                    label="Facebook"
                    variant="outlined"
                    value={params.facebook}
                    onChange={(e) => setParam("facebook", e.target.value)}
                    error={!!errors.facebook}
                    helperText={errors.facebook}
                />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <TextField
                    fullWidth
                    label="Twitter"
                    variant="outlined"
                    value={params.twitter}
                    onChange={(e) => setParam("twitter", e.target.value)}
                    error={!!errors.twitter}
                    helperText={errors.twitter}
                />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <TextField
                    fullWidth
                    label="YouTube"
                    variant="outlined"
                    value={params.youtube}
                    onChange={(e) => setParam("youtube", e.target.value)}
                    error={!!errors.youtube}
                    helperText={errors.youtube}
                />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <TextField
                    fullWidth
                    label="LinkedIn"
                    variant="outlined"
                    value={params.linkedin}
                    onChange={(e) => setParam("linkedin", e.target.value)}
                    error={!!errors.linkedin}
                    helperText={errors.linkedin}
                />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
                <TextField
                    fullWidth
                    label="Instagram"
                    variant="outlined"
                    value={params.instagram}
                    onChange={(e) => setParam("instagram", e.target.value)}
                    error={!!errors.instagram}
                    helperText={errors.instagram}
                />
            </Grid>
        </Grid>
    </PrivateLayout>
}

export default Social;