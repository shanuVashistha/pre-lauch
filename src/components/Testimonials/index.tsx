import React, {useContext, useEffect, useState} from "react";
import {BlogCards} from "@/utils/BlogCards";
import {Img} from "@/utils/Img";
import {LoaderContext} from "@/context/LoaderContext";


export const TestimonialsComponent: React.FC<any> = () => {

    const content = <>
        <div className="flex flex-col justify-center items-center mx-auto">
            <div className="w-full lg:max-w-[1200px]  relative pt-[140px] pb-[100px] ml-0 ">
                <div className="w-full relative">
                    <div className="relative flex flex-col  mb-[-80px] ml-[20px] sm:ml-[200px] md:ml-[100px]">
                        <span className="w-[100px] left-0 sm:w-[180px] opacity-[0.2] z-0 absolute top-[-40px] sm:top-[-80px] sm:left-[-90px] xl:top-[-100px] xl:left-[-120px]">
                            <Img src="/images/icons/Quote.svg" className="w-full h-full" alt={"QuoteIcon" }/>
                        </span>
                    <h1 className="w-full text-[#1F284F] text-[30px] sm:text-[35px] lg:text-[42px] overflow-hidden z-2 font-semibold">Real Stories from <br/> Talents </h1>
                        <p className="w-full text-[#575757] text-[14px]  lg:pb-0 lg:text-[18px] pb-[120px] md:pb-[20px] overflow-hidden z-2">Get inspired by these stories.</p>
                    </div>
                    <div className="90vw">
                        <div className="relative flex flex-col md:flex-row gap-[20px] justify-center items-center">
                        <div className="relative  bg-white rounded-lg p-[10px] m-[10px] md:m-0 w-[300px] h-[354px]">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <span className="w-[20px] opacity-[0.4] absolute top-4 left-4">
                            <Img src="/images/icons/Quote.svg" className="w-full h-full" alt={"QuoteIcon" }/>
                        </span>
                        <p className="text-[16px] text-[#171819] leading-[30px] font-normal pl-[40px] pt-[10px] pr-[5px] pb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud labore et dolore magna aliqua</p>
                    </div>
                    <div className="flex flex-row mx-[40px] gap-[20px]">
                        <div className="w-[40px] h-[40px] rounded-full mt-[5px]">
                        <Img src="/images/icons/authorIcon1.svg" alt={"AuthourIcon"}/>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-[#1F284F] text-[18px] font-semibold">Floyd Miles</h1>
                            <p className="text-[#575757] text-[14px]">UI/UX Designer</p>
                        </div>
                    </div>
                </div>
                 </div>
                        <div className="relative flex flex-col gap-[20px]">
                        <div className="relative  bg-white rounded-lg p-[10px] w-[300px] h-[354px] md:w-[410px] md:h-[264px]">
                            <div className="flex flex-col">
                                <div className="flex flex-row">
                        <span className="w-[20px] opacity-[0.4] absolute top-4 left-4">
                            <Img src="/images/icons/Quote.svg" className="w-full h-full" alt={"QuoteIcon" }/>
                        </span>
                                    <p className="text-[16px] text-[#171819] leading-[30px] font-normal pl-[40px] pt-[10px] pr-[5px] pb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud labore et dolore magna aliqua</p>
                                </div>
                                <div className="flex flex-row mx-[40px] gap-[20px]">
                                    <div className="w-[40px] h-[40px] rounded-full mt-[5px]">
                                        <Img src="/images/icons/authorIcon2.svg" alt={"AuthourIcon"}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <h1 className="text-[#1F284F] text-[18px] font-semibold">Jane Cooper</h1>
                                        <p className="text-[#575757] text-[14px]">Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" relative  bg-white rounded-lg p-[10px] w-[300px] h-[354px]">
                            <div className="flex flex-col">
                                <div className="flex flex-row">
                        <span className="w-[20px] opacity-[0.4] absolute top-4 left-4">
                            <Img src="/images/icons/Quote.svg" className="w-full h-full" alt={"QuoteIcon" }/>
                        </span>
                                    <p className="text-[16px] text-[#171819] leading-[30px] font-normal pl-[40px] pt-[10px] pr-[5px] pb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud labore et dolore magna aliqua</p>
                                </div>
                                <div className="flex flex-row mx-[40px] gap-[20px]">
                                    <div className="w-[40px] h-[40px] rounded-full mt-[5px]">
                                        <Img src="/images/icons/authorIcon3.svg" alt={"AuthourIcon"}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <h1 className="text-[#1F284F] text-[18px] font-semibold">Kristin Watson</h1>
                                        <p className="text-[#575757] text-[14px]">Software Engineer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
    </>
    return (
        <>
            <div
                style={{background:"linear-gradient(110.35deg, #FFF8E4 0%, #E6F2FF 47.51%, #E5FFF5 100%)"}}
                className="bg-cover bg-center bg-no-repeat relative bg-white  mx-auto"
            >
                {content}
            </div>
        </>
    );
};
