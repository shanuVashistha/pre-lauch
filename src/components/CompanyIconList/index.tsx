import React from "react";

import backgroundImage from "../../../public/images/icons/background.jpg";
import image from "../../../public/images/BannerPic.png";

import {Img} from "@/utils/Img";
import Header from "@/components/CommonHeader";



export const CompanyIconList: React.FC<any> = () => {

    const content = <>
            <div className="flex flex-col justify-center items-center mx-auto">
                <div className="max-w-[1120px] max-h-[275px] pt-[70px] pb-[50px] ">
                <div>
                    <h1 className="text-[##333333] text-center text-[21.14px] font-bold">Join Most Well Known <span className="text-[#F2994A]">Companies</span> Around The World</h1>
                </div>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-[20px] mx-auto pt-[20px]">
                    <div className="col-md-2 w-full h-full p-[20px]">
                        <Img src="/images/icons/logo1.svg" className="w-auto h-full" alt={"CompaniesIcon"}/>
                    </div>
                    <div className="col-md-2 w-full h-full p-[20px]">
                        <Img src="/images/icons/logo2.svg" className="w-auto h-full" alt={"CompaniesIcon"}/>
                    </div>
                    <div className="col-md-2 w-full h-full p-[20px]">
                        <Img src="/images/icons/logo3.svg" className="w-auto h-full" alt={"CompaniesIcon"}/>
                    </div>
                    <div className="col-md-2 w-full h-full p-[20px]">
                        <Img src="/images/icons/logo4.svg" className="w-auto h-full" alt={"CompaniesIcon"}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    return (
        <>
            <div
                className="custom-drop-shadow border-t-[1px] border-b-[1px] border-[#000000]  bg-cover bg-center bg-no-repeat relative bg-white  mx-auto"
            >
                {content}
            </div>
        </>
    );
};