import React from "react";
import {Img} from "@/utils/Img";

const data = [
    {
        icon:"/images/icon1.svg",
        title:"Digital Marketing"
    },
    {
        icon:"/images/icon2.svg",
        title:"Sales"
    },
    {
        icon:"/images/icon3.svg",
        title:"Finance"
    },
    {
        icon:"/images/icon4.svg",
        title:"CyberSecurity"
    },
    {
        icon:"/images/icon5.svg",
        title:"Tech"
    },
    {
        icon:"/images/icon6.svg",
        title:"Engineering"
    },
    {
        icon:"/images/icon7.svg",
        title:"Accounting"
    },
    {
        icon:"/images/icon8.svg",
        title:"Data Science"
    }
]


export const PopularJobCategories: React.FC<any> = () => {

    const content = <>
        <div className="flex flex-col justify-center items-center mx-auto">
            <div className="max-w-[1200px] pt-[70px] pb-[30px] ">
                <h1 className="text-center text-[#2C98F0] text-[42px] font-semibold pb-[20px]">Popular Job Categories </h1>
                <p className="text-center text-[#363848] text-[16px] font-normal pb-[70px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/> do eiusmod tempor incididunt ut labore et dolore</p>
                <div className="w-full mx-auto justify-center items-center flex pb-[100px]">
                    <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[15px]">
                        {data.map((items,index) =>
                            <div className="col-md-2 flex justify-center items-center" key={index}>
                            <div className="flex pl-[16px] bg-white items-center w-[240px] h-[113px] shadow-lg rounded-lg gap-[10px]">
                                <Img src={items.icon} className="w-[40px]" alt={items.title}/>
                                <h1 className="text-[#414141] text-[18px] font-semibold">{items.title}</h1>
                            </div>
                        </div>
                            )}
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
