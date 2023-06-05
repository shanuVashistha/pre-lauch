import React from "react";
import {Img} from "@/utils/Img";



export const JobMatchingComponent: React.FC<any> = () => {

    const content = <>
        <div className="flex flex-col justify-center items-center mx-auto">
            <div className="w-full lg:max-w-[1200px] pt-[70px] pb-[30px] ">
                <div className="w-full justify-center items-center flex md:flex-row flex-col">
                    <div className="w-[100vw] md:w-[50vw]">
                        <div className="w-full h-full rounded-lg p-[20px] md:p-[10px] lg:p-[40px]" >
                            <Img src="/images/jobImage.jpg" className="w-full h-full rounded-2xl" alt={"workPic"}/>
                        </div>
                    </div>
                    <div className="w-[90vw] md:w-[50vw] relative ml-[20px] md:ml-[40px]">
                        <div className="w-[100%] h-full relative pr-0 md:pr-[10px] ">
                            <p className="text-[#0070F0] text-[15px] md:text-[20px] lg:text-[23px] ">Hassle-free Job Matching</p>
                            <h1 className="text-[#363848] text-[20px] sm:text-[38px] sm:leading-[50px] md:text-[28px] lg:text-[38px] xl:text-[42px] md:leading-[40px] lg:leading-[50px]  font-semibold pb-[20px]">Level up your Job Search  with Enjoy Mondays</h1>
                            <p className="text-[#7A7A7A] text-[16px] leading-[25px] pb-[20px] pr-[5px] md:pr-0">Frictionless, painless and stress-free, we help you connect to opportunities that matter to you. Try us for free and experience a new way to find your dream job</p>
                            <p className="text-[#4A4A4A] text-[16px] sm:text-[20px] font-medium pb-[20px]">Ready to find your new career?</p>
                            <button className="text-[14px] lg:text-[17px] bg-[#F9B400] text-white  font-semibold  leading-[14px] cursor-pointer w-[115px] h-[40px] lg:w-[115px] lg:h-[45px]  rounded-lg">I'm Ready</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    return (
        <>
            <div
                className="custom-drop-shadow bg-cover bg-center bg-no-repeat relative bg-white  mx-auto"
            >
                {content}
            </div>
        </>
    );
};
