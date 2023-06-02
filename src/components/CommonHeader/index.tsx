import React, { useState } from "react";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";
import {Img} from "@/utils/Img";
const Index: React.FC<any> = () => {


    return (<>
        <div className="max-w-[1377.5px] mx-auto">
            <nav className="flex bg-transparent 2xl:py-[37px] xl:py-[30px] lg:py-[27px] md:py-[27px] pl-[38px] pr-[64px] sticky top-0 z-10 items-center justify-between">
                <div className="w-[94.14px] h-auto">
                    <Link href={"/"}>
                        <Img src={logo}  alt="logo"/>
                    </Link>
                </div>
                <div className="flex flex-row items-center gap-[57px] ">
                    <Link href="/">
                        <p className="text-[#141414] text-[17px]  font-medium">Home</p>
                    </Link>
                    <Link href="/">
                        <p className="text-[#141414] text-[17px]  font-medium">Resources</p>
                    </Link>
                    <Link href="/">
                        <p className="text-[#141414] text-[17px]  font-medium">About Us</p>
                    </Link>
                    <Link href="/">
                        <p className="text-[#141414] text-[17px]  font-medium">Contact Us</p>
                    </Link>
                </div>
                <div className="flex flex-row gap-[17.79px]">
                    <button className="bg-white text-[#141414] text-[17px] font-medium w-[90px] h-[40px] rounded-lg" style={{border:"1.10577px solid rgba(20, 20, 20, 0.1", boxShadow:"0px 1.10577px 2.21154px rgba(0, 0, 0, 0.03)"}}>
                        Sign In
                    </button>
                    <button className="bg-[#F9B400] text-white text-[17px] font-medium w-[90px] h-[40px] rounded-lg" style={{}}>
                        Sign Up
                    </button>
                </div>
                <div className="md:hidden block">
                    hii
                </div>
            </nav>
        </div>
    </>);
};

export default Index;
