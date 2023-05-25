import React, {useContext} from "react";
import PrivateLayout from "@/components/Layout/privateLayout";
import {Button, Divider, Grid, Paper, TextField, Typography} from "@mui/material";
import {SeoInterface} from "@/types";
import {GetServerSideProps} from "next";
import {configApi} from "@/helper/Lookups/config";
import {LoaderContext} from "@/context/LoaderContext";
import {useSnackbar} from "@/context/SnackbarContext";

const SEO: React.FC<any> = (props) => {
    const {setIsLoading} = useContext(LoaderContext);
    const {openSnackbar} = useSnackbar();
    const [blogParams, setBlogParams] = React.useState<SeoInterface>({
        title: props.seo.find((s: any) => s.page === 'blog').title,
        description: props.seo.find((s: any) => s.page === 'blog').description,
        keywords: props.seo.find((s: any) => s.page === 'blog').keywords,
        page: 'blog',
        page_title: props.seo.find((s: any) => s.page === 'blog').page_title
    });

    const [homeParams, setHomeParams] = React.useState<SeoInterface>({
        title: props.seo.find((s: any) => s.page === 'home').title,
        description: props.seo.find((s: any) => s.page === 'home').description,
        keywords: props.seo.find((s: any) => s.page === 'home').keywords,
        page: 'home',
        page_title: props.seo.find((s: any) => s.page === 'home').page_title
    });

    const [calculatorParams, setCalculatorParams] = React.useState<SeoInterface>({
        title: props.seo.find((s: any) => s.page === 'calculator').title,
        description: props.seo.find((s: any) => s.page === 'calculator').description,
        keywords: props.seo.find((s: any) => s.page === 'calculator').keywords,
        page: 'calculator',
        page_title: props.seo.find((s: any) => s.page === 'calculator').page_title
    });

    const [errors, setErrors] = React.useState<any>({});

    const setBlogParam = (key: string, value: any) => {
        setBlogParams((prevParams: any) => {
            return {
                ...prevParams,
                [key]: value,
            };
        });

        setErrors((prevErrors: any) => {
            const {[key]: deletedKey, ...restErrors} = prevErrors;
            return restErrors;
        });
    };

    const setHomeParam = (key: string, value: any) => {
        setHomeParams((prevParams: any) => {
            return {
                ...prevParams,
                [key]: value,
            };
        });

        setErrors((prevErrors: any) => {
            const {[key]: deletedKey, ...restErrors} = prevErrors;
            return restErrors;
        });
    }

    const setCalculatorParam = (key: string, value: any) => {
        setCalculatorParams((prevParams: any) => {
            return {
                ...prevParams,
                [key]: value,
            };
        });

        setErrors((prevErrors: any) => {
            const {[key]: deletedKey, ...restErrors} = prevErrors;
            return restErrors;
        });
    }

    const save = async (page: any) => {
        setIsLoading(true);

        try {

            let params

            if (page === 'blog') {
                params = blogParams;
            } else if (page === 'home') {
                params = homeParams;
            } else if (page === 'calculator') {
                params = calculatorParams;
            }

            const response = await fetch("/api/update/seo", {
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

    return (
        <PrivateLayout title="Enjoy Mondays Pre Launch - SEO">
            <Typography variant="h5" component={Grid} item xs className="font-medium p-2 mb-[12px]">
                Seo Configuration
            </Typography>
            <Grid container>
                <Grid className="p-2" item xs={12} md={6}>
                    <Paper>
                        <Grid container alignItems="center" wrap="nowrap" className="p-2">
                            <Typography component={Grid} item xs variant="h6" className="p-2">
                                Home Page
                            </Typography>
                            <Grid className="p-2">
                                <Button
                                    variant="outlined"
                                    size="small"
                                    color="primary"
                                    onClick={() => save('home')}
                                >
                                    Update
                                </Button>
                            </Grid>
                        </Grid>
                        <Divider/>
                        <Grid container className="p-2">
                            <Grid item xs={12} className="p-2">
                                <TextField
                                    fullWidth
                                    label="Page Title"
                                    variant="outlined"
                                    value={homeParams.page_title}
                                    onChange={(e) => setHomeParam("page_title", e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} className="p-2">
                                <TextField
                                    fullWidth
                                    label="Meta Title"
                                    variant="outlined"
                                    value={homeParams.title}
                                    onChange={(e) => setHomeParam("title", e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} className="p-2">
                                <TextField
                                    fullWidth
                                    label="Meta Keywords"
                                    variant="outlined"
                                    value={homeParams.keywords}
                                    onChange={(e) => setHomeParam("keywords", e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} className="p-2">
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={5}
                                    label="Meta Description"
                                    variant="outlined"
                                    value={homeParams.description}
                                    onChange={(e) => setHomeParam("description", e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid className="p-2" item xs={12} md={6}>
                    <Paper>
                        <Grid container alignItems="center" wrap="nowrap" className="p-2">
                            <Typography component={Grid} item xs variant="h6" className="p-2">
                                Calculator Page
                            </Typography>
                            <Grid className="p-2">
                                <Button
                                    variant="outlined"
                                    size="small"
                                    color="primary"
                                    onClick={() => save('calculator')}
                                >
                                    Update
                                </Button>
                            </Grid>
                        </Grid>
                        <Divider/>
                        <Grid container className="p-2">
                            <Grid item xs={12} className="p-2">
                                <TextField
                                    fullWidth
                                    label="Page Title"
                                    variant="outlined"
                                    value={calculatorParams.page_title}
                                    onChange={(e) => setCalculatorParam("page_title", e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} className="p-2">
                                <TextField
                                    fullWidth
                                    label="Meta Title"
                                    variant="outlined"
                                    value={calculatorParams.title}
                                    onChange={(e) => setCalculatorParam("title", e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} className="p-2">
                                <TextField
                                    fullWidth
                                    label="Meta Keywords"
                                    variant="outlined"
                                    value={calculatorParams.keywords}
                                    onChange={(e) => setCalculatorParam("keywords", e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} className="p-2">
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={5}
                                    label="Meta Description"
                                    variant="outlined"
                                    value={calculatorParams.description}
                                    onChange={(e) => setCalculatorParam("description", e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid className="p-2" item xs={12} md={6}>
                    <Paper>
                        <Grid container alignItems="center" wrap="nowrap" className="p-2">
                            <Typography component={Grid} item xs variant="h6" className="p-2">
                                Blog Page
                            </Typography>
                            <Grid className="p-2">
                                <Button
                                    variant="outlined"
                                    size="small"
                                    color="primary"
                                    onClick={() => save('blog')}
                                >
                                    Update
                                </Button>
                            </Grid>
                        </Grid>
                        <Divider/>
                        <Grid container className="p-2">
                            <Grid item xs={12} className="p-2">
                                <TextField
                                    fullWidth
                                    label="Page Title"
                                    variant="outlined"
                                    value={blogParams.page_title}
                                    onChange={(e) => setBlogParam("page_title", e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} className="p-2">
                                <TextField
                                    fullWidth
                                    label="Meta Title"
                                    variant="outlined"
                                    value={blogParams.title}
                                    onChange={(e) => setBlogParam("title", e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} className="p-2">
                                <TextField
                                    fullWidth
                                    label="Meta Keywords"
                                    variant="outlined"
                                    value={blogParams.keywords}
                                    onChange={(e) => setBlogParam("keywords", e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} className="p-2">
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={5}
                                    label="Meta Description"
                                    variant="outlined"
                                    value={blogParams.description}
                                    onChange={(e) => setBlogParam("description", e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </PrivateLayout>
    );
}

export default SEO;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const data = await configApi.getSeo()

    return {
        props: {
            seo: data,
        },
    };
}