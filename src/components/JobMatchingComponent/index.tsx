import React from "react";
import {Img} from "@/utils/Img";



export const JobMatchingComponent: React.FC<any> = () => {

    const content = <>
        <div className="flex flex-col justify-center items-center mx-auto">
            <div className="max-w-[1200px] pt-[70px] pb-[30px] ">
                <div className="w-full justify-center items-center flex md:flex-row flex-col">
                    <div className="w-[50vw]">
                        <div className="w-full h-full rounded-lg p-[40px]" >
                            <Img src="/images/jobImage.jpg" className="w-full h-full rounded-2xl" alt={"workPic"}/>
                        </div>
                    </div>
                    <div className="w-[50vw] relative ml-[40px]">
                        <div className="w-full h-full relative ">
                            <p className="text-[#0070F0] text-[23px]">Hassle-free Job Matching</p>
                            <h1 className="text-[#363848] text-[42px] leading-[50px] font-semibold pb-[20px]">Level up your Job Search  with Enjoy Mondays</h1>
                            <p className="text-[#7A7A7A] text-[16px] leading-[25px] pb-[20px]">Frictionless, painless and stress-free, we help you connect to opportunities that matter to you. Try us for free and experience a new way to find your dream job</p>
                            <p className="text-[#4A4A4A] text-[20px] font-medium pb-[20px]">Ready to find your new career?</p>
                            <button className="text-[10px] lg:text-[17px] bg-[#F9B400] text-white  font-semibold  leading-[14px] cursor-pointer w-[115px] h-[40px] lg:w-[115px] lg:h-[45px]  rounded-lg">I'm Ready</button>
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
