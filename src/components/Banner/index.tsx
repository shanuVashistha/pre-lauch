import React from "react";

import backgroundImage from "../../../public/images/icons/background.jpg";
import image from "../../../public/images/BannerPic.png";

import {Img} from "@/utils/Img";
import Header from "@/components/CommonHeader";



export const EmployeeBanner: React.FC<any> = () => {

    const content = <>
        <Header/>
        <div
            className="2xl:max-w-[1327.5px] xl:max-w-[1960px] relative mx-auto HeroSection    pt-[100px]  pb-[140px] xl:pb-[230px] 2xl:pb-[260px]">
            <div className="flex  flex-col md:flex-row items-center justify-between ">
                <div
                    className="col-md-6 HeroContent">
                    <div className="w-full h-full">
                    <h1 className="text-center HeroHeading md:text-start text-[47px] font-semibold text-[#383F47]  leading-[57px] md:tracking-[-1.55px] pb-[14px] mx-auto md:m-0">
                        Match with the Perfect Job <br/> Opportunities
                    </h1>

                    <p
                        className="text-center HeroParagarph md:text-start  text-[#6D6D6D]  font-normal text-[19px] leading-[26px] tracking-[-0.68px] pb-[18px] md:pb-[40px] mx-auto md:m-0">
                        Spend less time looking and more time matching with great jobs in <br/> the Tech, Engineering, Sales, Marketing, Accounting, and Finance
                    </p>
                    <div className="flex justify-center items-center md:justify-start gap-[29px]">
                        <button className="text-[10px] lg:text-[17px] bg-[#F9B400] text-white  font-semibold  leading-[14px] cursor-pointer w-[110px] h-[40px] lg:w-[185px] lg:h-[45px]  rounded-lg">I'm a Job Seeker</button>
                        <button className="text-[10px] lg:text-[17px] bg-[#3ABAB1] text-white  font-semibold  leading-[14px] cursor-pointer w-[110px] h-[40px] lg:w-[185px] lg:h-[45px]  rounded-lg">I'm an Employer</button>
                    </div>
                    </div>
                </div>
                <div className="md:block absolute  AppIcon  hidden">
                    <Img
                        src={image}
                        alt="ICON"
                        className="h-[100%] w-auto"
                    />
                </div>
                <div className="block relative mobileImageIcon w-[90%] mx-auto  mt-[-55px] md:hidden">
                    <Img
                        src={image}
                        alt="ICON"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    </>
    return (
        <>
            <div
                style={{ backgroundImage: `url(${backgroundImage})`}}
                className="backgroundImage bg-cover bg-center bg-no-repeat relative md:pb-[18px]  mx-auto"
            >
                {content}
            </div>
        </>
    );
};
