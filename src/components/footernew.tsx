import React from "react";
import {SocialButton} from "@/utils/SocialButton";
import {Img} from "@/utils/Img";

export const Footernew: React.FC = () => {


    return <div
        className="bg-[#263041]  md:px-[5px] md:py-[px] p-[21px] md:pt[] pt-[30px] ">
        <div className="flex flex-col  max-w-[1380px] mx-auto lg:flex-row  justify-center items-center">
            <div className="md:p-[35px] lg:flex-1 w-[100%] flex lg:flex-col md:items-start items-start">
                <div className="lg:pb-[20px] ml-[11px]">
                    <Img
                        src={"/images/logowhite.svg"}
                        alt={"Footer Logo"}
                        className="md:w-[91px] w-[70.6px] "
                    />
                </div>
                <div className="lg:flex-auto flex-1 flex flex-col lg:items-start items-end">
                    <h3 className="md:text-[14px] max-w-[330px] md:leading-[18.5px] md:ml-[] ml-[15px] text-[10px] leading-[11.6px] font-normal text-[#FFFFFF] pb-[16px]">
                        Finding your perfect fit is easier than ever with AI job matching. Match, meet, and find your
                        next career opportunity with Enjoy Mondays.
                    </h3>
                    <div className="flex items-center md:mt-[20px]">
                        <div className="lg:pr-8 pr-4">
                            <SocialButton
                                icon={"/images/icons/facebook.svg"}
                                url={"https://www.facebook.com/profile.php?id=100090762161323&mibextid=LQQJ4d"}
                            />
                        </div>
                        <div className="lg:pr-8 pr-4">
                            <SocialButton icon={"/images/icons/twitter.svg"} url={"#"}/>
                        </div>
                        <div className="lg:pr-8 pr-4">
                            <SocialButton
                                icon={"/images/icons/youtube.svg"}
                                url={"https://www.youtube.com/channel/UC1xFBqHYciLGdpon3H21-xw/"}
                            />
                        </div>
                        <div className="lg:pr-8 pr-4">
                            <SocialButton
                                icon={"/images/icons/linkedIn.svg"}
                                url={"https://www.linkedin.com/company/enjoy-mondays/"}
                            />
                        </div>
                        <div>
                            <SocialButton
                                icon={"/images/icons/instagram.svg"}
                                url={"https://www.instagram.com/enjoymondaysinc"}
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 md:mt-[] mt-[25px] md:pr-[10px] ">
                <div>
                    <h5 className="xl:text-[18px] text-[14px] leading-[27px] tracking-[-0.05px] font-semibold md:pb-[26px] pb-[23px] text-[#FFFFFF]">
                        For Job Seekers
                    </h5>

                    <div className="flex flex-col text-[12px] font-medium text-white gap-y-7">
                        <a href="#">How it works</a>
                        <a href="#">Job Seekers FAQ</a>
                        <a href="#">Salary Calculator</a>
                        <a href="#">Sign up</a>
                    </div>

                </div>
                <div>
                    <h5 className="xl:text-[18px]  text-[14px] leading-[27px] tracking-[-0.05px] font-semibold md:pb-[26px] pb-[23px] text-[#FFFFFF]">
                        For Employers </h5>

                    <div className="flex flex-col text-[12px] font-medium text-white gap-y-5">
                        <a href="#">How it works</a>
                        <a href="#">Employer FAQ</a>

                    </div>

                </div>
                <div>
                    <h5 className="xl:text-[18px] md:mt-[0px] mt-[40px] text-[14px] leading-[27px] tracking-[-0.05px] font-semibold md:pb-[26px] pb-[23px] text-[#FFFFFF]">
                        For Employers </h5>

                    <div className="flex flex-col text-[12px] font-medium text-white gap-y-5">
                        <a href="#">How it works</a>
                        <a href="#">Employer FAQ</a>

                    </div>

                </div>
                <div>
                    <h5 className="xl:text-[15px]  md:mt-[0px] mt-[40px] text-[14px] leading-[27px] tracking-[-0.05px] font-medium md:pb-[26px] pb-[23px] text-[#FFFFFF]">
                        Get in Touch with Us </h5>

                    <div className="flex flex-col text-[11px] font-normal text-white gap-y-5">
                        <a href="#"> 7512 W 80th St, Overland Park, KS 66204</a>
                        <a href="#">+123 345123 556</a>

                    </div>

                </div>

            </div>
            <p className="pt-[26px] text-[#F3F3F3] text-[14px] leading-[24px] font-normal opacity-50 lg:hidden text-center">
                © Copyright 2023. All rights reserved. Privacy policy.
            </p>
        </div>
    </div>
}