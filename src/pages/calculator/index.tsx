import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Grid } from "@mui/material";
import { Footer } from "@/components/Footer";
import { CalculatorInterface } from "@/types";

const CalculatorPage = () => {

    const [params, setParams] = useState<CalculatorInterface>({
        occupation: '',
        experience: '',
        location: '',
        company_size: '',
        industry: '',
        skills: ['']
    });

    const [errors, setErrors] = useState<any>("");

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
    };


    return <Grid
        container
        wrap="nowrap"
        direction="column"
        className="main min-h-[100vh]"
        style={{ background: 'linear-gradient(109.04deg, #FFFCF3 0%, #EFF7FF 43.23%, #E8FAF3 98.1%)' }}
    >
        <Grid className="w-full">
            <Header/>
        </Grid>
        <Grid item xs>
            <Grid container direction="column" wrap="nowrap" className="md:py-[100px] py-[50px]">
                <h1
                    className="text-center font-medium text-[20px] md:text-[32px] lg:text-[42px] leading-[40px] md:leading-[63px] tracking-[0.003em] text-[#334049] p-[16px]"
                >
                    Salary Calculator
                </h1>
                <h5
                    className="text-center font-medium text-[16px] md:text-[20px] lg:text-[27px] leading-[20px] md:leading-[35.1px] text-[#334049] lg:mt-[28px] md:mt-[16px] mt-[8px] p-[16px]"
                >
                    Software Engineering salaries in Washington D.C.
                </h5>
                <div
                    className="font-light text-[14px] md:text-[18px] leading-[20px] md:leading-[28.89px] text-center text-[#263041] max-w-[868px] mx-auto p-[16px]"
                >
                    See what you could be making with a company on Hired. Filter by skills, locations, industries, and
                    company types. <span className="font-medium">Salary data is from real interviews and offers on Enjoy Mondays.</span>
                </div>
                <Grid container className="p-[8px]">
                    <Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Footer/>
    </Grid>
}

export default CalculatorPage;