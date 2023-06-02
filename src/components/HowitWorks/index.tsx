import React from "react";

import backgroundImage from "../../../public/images/icons/background.jpg";
import image from "../../../public/images/BannerPic.png";

import {Img} from "@/utils/Img";
import Header from "@/components/CommonHeader";

const data = [
    {
        index:"01",
        title:"Create your Profile",
        subtitle:"It takes less than 10 minutes!"
    },
    {
        index:"02",
        title:"Tell us About Yourself",
        subtitle:"With our Talent-match questionnaire"
    },
    {
        index:"03",
        title:"Match with Great Jobs",
        subtitle: "That are a 95% match to your profile"
    },
    {
        index:"04",
        title:"Start Monday!",
        subtitle:"Faster, easier job searching is finally here."
    }
]


export const HowitWorks: React.FC<any> = () => {

    const content = <>
        <div className="flex flex-col justify-center items-center mx-auto">
            <div className="max-w-[1200px] pt-[70px] pb-[30px] ">
                <h1 className="text-center text-[#44B480] text-[42px] font-semibold pb-[60px]">How It Works </h1>
            <div className="w-full justify-center items-center flex md:flex-row flex-col-reverse">
            <div className="w-[50vw] relative ml-[40px]">
                <div className="absolute w-[1.4px] h-[280px] top-[30px] left-[25px]">
                    <Img src="/images/Line.png" className="w-full h-full" alt={"line"}/>
                </div>
                <div className="w-full h-full relative">
                    {data.map((item,index) =>
                    <div className="flex gap-[15px]" key={index}>
                        <div className="rounded-full bg-[#44B480] h-[50px] w-[50px] flex justify-center items-center font-normal text-[19px] text-white overflow-x-hidden">{item.index}</div>
                        <div className="pt-[5px] pb-[10px]">
                            <p className="font-normal text-[25px] text-[#08111F] leading-[39px] pb-[10px]">{item.title}</p>
                            <p className="font-normal text-[22px] text-[#7A7A7A]">{item.subtitle}</p>
                        </div>
                    </div>
                    )}
                </div>
            </div>
                <div className="w-[50vw]">
                    <div className="w-full h-full">
                        <Img src="/images/workPic.png" className="w-full h-full" alt={"workPic"}/>
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
