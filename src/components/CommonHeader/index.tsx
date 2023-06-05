import React, { useState } from "react";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";
import {Img} from "@/utils/Img";

const Index: React.FC<any> = () => {
    const[openMenu, setOpenMenu] = useState();
    const[sticky, openSticky] = useState(false);
    
    function setFixed () {
        if(window.scrollY >= 100){
            openSticky(true);
        }
        else {
            openSticky(false);
        }
    }

    // window.addEventListener("scroll", setFixed);

    const handleOpenSidebar = () => {
        setOpenMenu(!openMenu);
    };

    return (<>
        <div className ={sticky? `navbar fixed`:`navbar`}>
        <div className="max-w-[1377.5px] mx-auto">
            <div className="md:block hidden">
            <nav className="flex  2xl:py-[37px] xl:py-[30px] lg:py-[27px] md:py-[27px] md:px-[20px] lg:px-[40px] sticky top-0 z-10 items-center justify-between">
                <div className=" md:w-[74px] lg:w-[94.14px] h-auto">
                    <Link href={"/"}>
                        <Img src={logo}  alt="logo"/>
                    </Link>
                </div>
                <div className="flex flex-row items-center gap-[57px] ">
                    <Link href="/">
                        <p className="text-[#141414] md:text-[12px] lg:text-[16px]  font-medium">Home</p>
                    </Link>
                    <Link href="/">
                        <p className="text-[#141414] md:text-[12px] lg:text-[16px]  font-medium">Resources</p>
                    </Link>
                    <Link href="/">
                        <p className="text-[#141414] md:text-[12px] lg:text-[16px]  font-medium">About Us</p>
                    </Link>
                    <Link href="/">
                        <p className="text-[#141414] md:text-[12px] lg:text-[16px]  font-medium">Contact Us</p>
                    </Link>
                </div>
                <div className="flex flex-row gap-[17.79px]">
                    <button className="bg-white text-[#141414] md:text-[12px] lg:text-[16px] font-medium md:w-[70px] lg:w-[90px] xl:w-[105px] h-[40px] rounded-lg" style={{border:"1.10577px solid rgba(20, 20, 20, 0.1", boxShadow:"0px 1.10577px 2.21154px rgba(0, 0, 0, 0.03)"}}>
                        Sign In
                    </button>
                    <button className="bg-[#F9B400] text-white md:text-[12px] lg:text-[16px] font-medium md:w-[70px] lg:w-[90px] xl:w-[105px] h-[40px] rounded-lg" style={{}}>
                        Sign Up
                    </button>
                </div>
            </nav>
            </div>
            <div className="block md:hidden absolute top-0 w-full">
                <div className={sticky ? `bg-white` : `bg-transparent`}>
            <nav className=" flex flex-col px-[10px] py-[20px] sticky top-0 z-10 justify-center items-center w-full">
                <div className="flex flex-row  justify-between items-center w-full px-[10px]">
                <div className="w-[64.14px] h-auto">
                    <Link href={"/"}>
                        <Img src={logo}  alt="logo"/>
                    </Link>
                </div>
                    { (openMenu === false)? <><button className="cursor-pointer h-[40px]" onClick={ ()=> handleOpenSidebar() }> <Img src="/images/icons/close.svg" alt={"menuIcon"} className="w-full h-full" /> </button></>:<><button className="cursor-pointer h-[40px]" onClick={ ()=> handleOpenSidebar() }> <Img src="/images/icons/menuIcon.svg" alt={"MenuIcon"} className="w-full h-full" /> </button></> }
                </div>
                { (openMenu === false) ? <>
                <div className="bg-white w-full py-[80px] rounded-lg mt-[20px] transition ease-out duration-500">
                        <div className="flex flex-col items-center gap-[30px] ">
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
                        <div className="flex flex-row gap-[17.79px] justify-center items-center pt-[40px]">
                            <button className="bg-white text-[#141414] text-[17px] font-medium w-[90px] h-[40px] rounded-lg" style={{border:"1.10577px solid rgba(20, 20, 20, 0.1", boxShadow:"0px 1.10577px 2.21154px rgba(0, 0, 0, 0.03)"}}>
                                Sign In
                            </button>
                            <button className="bg-[#F9B400] text-white text-[17px] font-medium w-[90px] h-[40px] rounded-lg" style={{}}>
                                Sign Up
                            </button>
                        </div>
                </div>
                </>:<></>}
            </nav>
            </div>
            </div>
        </div>
        </div>
    </>);
};

export default Index;
