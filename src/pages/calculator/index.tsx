import React, {FC, useEffect, useState} from 'react';
import {Header} from "@/components/Header";
import {Grid, MenuItem, Paper, TextField} from "@mui/material";
import {Footer} from "@/components/Footer";
import {CalculatorInterface} from "@/types";
import Head from "next/head";
import {Banner} from "@/components/Banner";
import {company_size, experience, industries, location, roles, skills} from "@/helper/data";
import {BarChart} from "@/components/Chart"

const CalculatorPage: FC = () => {
    const [params, setParams] = useState<CalculatorInterface>({
        role: 'design',
        experience: 'junior_intern',
        location: 'Washington D.C.',
        company_size: '',
        industry: '',
        skills: ''
    });

    const [errors, setErrors] = useState<any>("");
    const [seoData, setSeoData] = useState<any>({});

    const setParam = (key: string, value: any) => {
        setParams((prevParams: any) => {
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

    const getSeoData = async () => {
        const response = await fetch(`/api/get/seo`);
        const data = await response.json();
        setSeoData(data.filter((item: any) => item.page === "calculator")[0]);
    }

    useEffect(() => {
        getSeoData();
    }, []);

    return <>
        <Head>
            <title>{seoData.page_title}</title>
            <meta name="description" content={seoData.description}/>
            <meta name="keywords" content={seoData.keywords}/>
            <meta name="title" content={seoData.title}/>
        </Head>
        <Grid
            container
            wrap="nowrap"
            direction="column"
            className="main min-h-[100vh]"
            style={{background: 'linear-gradient(109.04deg, #FFFCF3 0%, #EFF7FF 43.23%, #E8FAF3 98.1%)'}}
        >
            <Grid className="w-full">
                <Header/>
            </Grid>
            <Banner
                image="/images/banners/calculator.png"
                title="Salary Calculator"
            />
            <Grid item xs>
                <Grid container direction="column" wrap="nowrap" className="mx-auto w-full max-w-[1340px]">
                    <h5
                        className="text-center font-medium text-[16px] md:text-[20px] lg:text-[27px] leading-[20px] md:leading-[35.1px] text-[#334049] lg:mt-[28px] p-[16px]"
                    >
                        Software Engineering salaries in Washington D.C.
                    </h5>
                    <div
                        className="font-light text-[14px] md:text-[18px] leading-[20px] md:leading-[28.89px] text-center text-[#263041] max-w-[868px] mx-auto p-[16px]"
                    >
                        See what you could be making with a company on Hired. Filter by skills, locations, industries,
                        and company types. <span className="font-medium">Salary data is from real interviews and offers on Enjoy Mondays.</span>
                    </div>
                    <Grid container className="p-[8px]">
                        <Grid item xs={12} md={7}>
                            <Grid container direction="column" wrap="nowrap">
                                <Grid container className="p-[8px]">
                                    <Grid item xs={12} sm={4} className="p-[8px]">
                                        <TextField
                                            fullWidth
                                            select
                                            size="small"
                                            variant="outlined"
                                            label="Role"
                                            value={params.role}
                                            onChange={(e: any) => setParam("role", e.target.value)}
                                        >
                                            {
                                                roles.map((row: any, index: number) => <MenuItem
                                                    key={index}
                                                    value={row.slug}
                                                    className="text-[13px]"
                                                >
                                                    {row.label}
                                                </MenuItem>)
                                            }
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} sm={4} className="p-[8px]">
                                        <TextField
                                            fullWidth
                                            select
                                            size="small"
                                            variant="outlined"
                                            label="Years of Experience"
                                            value={params.experience}
                                            onChange={(e: any) => setParam("experience", e.target.value)}
                                        >
                                            {
                                                experience.map((row: any, index: number) => <MenuItem
                                                    key={index}
                                                    value={row.slug}
                                                    className="text-[13px]"
                                                >
                                                    {row.label}
                                                </MenuItem>)
                                            }
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={12} sm={4} className="p-[8px]">
                                        <TextField
                                            fullWidth
                                            select
                                            size="small"
                                            variant="outlined"
                                            label="Location"
                                            value={params.location}
                                            onChange={(e: any) => setParam("location", e.target.value)}
                                        >
                                            {
                                                location.map((row: any, index: number) => <MenuItem
                                                    key={index}
                                                    value={row}
                                                    className="text-[13px]"
                                                >
                                                    {row}
                                                </MenuItem>)
                                            }
                                        </TextField>
                                    </Grid>
                                </Grid>
                                <Grid container className="p-[8px]">
                                    <Paper className="flex w-full">
                                        <BarChart params={params}/>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={5} className="py-[4px]">
                            <div className="p-[8px] text-primary text-[16px] leading-[25.68px]">
                                Select additional filters to further define your salary range.
                            </div>
                            {
                                skills.filter((item: any) => item.role.includes(params.role)).length !== 0 &&
                                <div className="p-[8px] text-[#30323F] font-medium text-[16px] leading-[25.68px]">
                                    Skills
                                </div>
                            }
                            <div className="p-[8px] flex flex-wrap gap-[12px]">
                                {
                                    skills.filter((item: any) => item.role.includes(params.role)).map((row: any, index: number) =>
                                        <div
                                            key={index}
                                            className="py-[8px] px-[10px] cursor-pointer bg-[#D9EEFF] rounded-[4.28375px] text-[#209BFF] text-[12px] leading-[18px] tracking-[0.86px] text-center"
                                        >
                                            {row.label}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="p-[8px] text-[#30323F] font-medium text-[16px] leading-[25.68px]">
                                Industry
                            </div>
                            <div className="p-[8px] flex flex-wrap gap-[12px]">
                                {
                                    industries.map((row: any, index: number) =>
                                        <div
                                            key={index}
                                            className="py-[8px] px-[10px] cursor-pointer bg-[#D9EEFF] rounded-[4.28375px] text-[#209BFF] text-[12px] leading-[18px] tracking-[0.86px] text-center"
                                        >
                                            {row.label}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="p-[8px] text-[#30323F] font-medium text-[16px] leading-[25.68px]">
                                Company Size
                            </div>
                            <div className="p-[8px] flex flex-wrap gap-[12px]">
                                {
                                    company_size.map((row: any, index: number) =>
                                        <div
                                            key={index}
                                            className="py-[8px] px-[10px] cursor-pointer bg-[#D9EEFF] rounded-[4.28375px] text-[#209BFF] text-[12px] leading-[18px] tracking-[0.86px] text-center"
                                        >
                                            {row.label}
                                        </div>
                                    )
                                }
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    </>
}

export default CalculatorPage;