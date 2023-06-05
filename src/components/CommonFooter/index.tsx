import React from "react";
import {Img} from "@/utils/Img";
import {SocialButton} from "@/utils/SocialButton";
import Link from "next/link";



export const CommonFooter: React.FC<any> = () => {

    const content = <>
        <div className="flex flex-col justify-center items-center mx-auto">
            <div className="w-full lg:max-w-[1200px] pt-[70px] pb-[80px] md:pb-[30px] ">
                <div className="flex flex-col lg:flex-row justify-center items-center md:justify-start md:items-start gap-[40px] md:gap-[40px] px-0 md:px-[20px] lg:px-[10px]">
                    <div className="flex flex-col md:flex-row gap-[40px] md:gap-[50px] lg:gap-0 mx-auto ">
                    <div className="w-[90vw] md:w-[40vw] lg:w-[25vw]">
                        <div className=" w-[100%] flex flex-col items-start">
                            <div className="pb-[9px]">
                                <Img
                                    src={"/images/logowhite.svg"}
                                    alt={"Footer Logo"}
                                    className="md:w-[91px] w-[70.6px] "
                                />
                            </div>
                            <div className="flex flex-col items-start ">
                               <p className="text-[14px] text-white pb-[10px]">Finding your perfect fit is easier than ever with AI job matching. Match, meet, and find your next career opportunity with Enjoy Mondays.</p>
                                <div className="flex ">
                                    <div className="pr-2">
                                        <SocialButton
                                            icon={"/images/icons/facebook.svg"}
                                            url={"https://www.facebook.com/profile.php?id=100090762161323&mibextid=LQQJ4d"}
                                        />
                                    </div>
                                    <div className="pr-2">
                                        <SocialButton icon={"/images/icons/twitter.svg"} url={"#"}/>
                                    </div>
                                    <div className="pr-2">
                                        <SocialButton
                                            icon={"/images/icons/youtube.svg"}
                                            url={"https://www.youtube.com/channel/UC1xFBqHYciLGdpon3H21-xw/"}
                                        />
                                    </div>
                                    <div className="pr-2">
                                        <SocialButton
                                            icon={"/images/icons/linkedIn.svg"}
                                            url={"https://www.linkedin.com/company/enjoy-mondays/"}
                                        />
                                    </div>
                                    <div className="pr-2">
                                        <SocialButton
                                            icon={"/images/icons/instagram.svg"}
                                            url={"https://www.instagram.com/enjoymondaysinc"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[90vw] md:w-[30vw] lg:w-[15vw]">
                    <div className =" flex flex-col gap-[20px]">
                        <h1 className="text-white text-[18px] font-semibold">For Job Seekers</h1>
                        <Link href={"/"}>
                            <p className="text-white cursor-pointer text-[14px] font-medium">How it Works</p>
                        </Link>
                        <Link href={"/"}>
                            <p className="text-white cursor-pointer text-[14px] font-medium">Job Seekers FAQ</p>
                        </Link>
                        <Link href={"/"}>
                            <p className="text-white cursor-pointer text-[14px] font-medium">Salary Calculator</p>
                        </Link>
                        <Link href={"/"}>
                            <p className="text-white cursor-pointer text-[14px] font-medium">Sign up</p>
                        </Link>
                    </div>
                    </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-[40px] md:gap-[20px] mx-auto">
                    <div className="w-[90vw] md:w-[25vw] lg:w-[15vw]">
                        <div className =" flex flex-col gap-[20px]">
                            <h1 className="text-white text-[18px] font-semibold">For Employers</h1>
                            <Link href={"/"}>
                                <p className="text-white cursor-pointer text-[14px] font-medium">How it Works</p>
                            </Link>
                            <Link href={"/"}>
                                <p className="text-white cursor-pointer text-[14px] font-medium">Employer FAQ</p>
                            </Link>
                        </div>
                    </div>
                    <div className="w-[90vw] md:w-[25vw] lg:w-[15vw]">
                        <div className =" flex flex-col gap-[20px]">
                            <h1 className="text-white text-[18px] font-semibold">For Employers</h1>
                            <Link href={"/"}>
                                <p className="text-white cursor-pointer text-[14px] font-medium">How it Works</p>
                            </Link>
                            <Link href={"/"}>
                                <p className="text-white cursor-pointer text-[14px] font-medium">Employer FAQ</p>
                            </Link>
                        </div>
                    </div>
                    <div className="w-[90vw] md:w-[25vw] lg:w-[18vw]">
                        <div className =" flex flex-col gap-[20px]">
                            <h1 className="text-white text-[18px] font-semibold">Get in Touch with Us</h1>
                            <Link href={"/"}>
                                <div className=" flex flex-row gap-[10px] text-white cursor-pointer text-[14px] font-medium flex">
                                <div className="h-[20px]"><Img src="/images/icons/address.svg" className="w-full h-full" alt={"Icon"}/></div>
                                <span className="text-white cursor-pointer text-[14px]">7512 W 80th St, Overland Park, KS 66204</span>
                                </div>
                            </Link>
                            <Link href={"/"}>
                                <div className=" flex flex-row gap-[10px] text-white cursor-pointer text-[14px] font-medium flex">
                                    <div className="h-[20px]"><Img src="/images/icons/phone.svg" className="w-full h-full" alt={"Icon"}/></div>
                                    <span className="text-white cursor-pointer text-[14px]">+123 345123 556</span>
                                </div>
                            </Link>
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
                className="bg-[#263041] pt-[30px] pb-[20px] bg-cover bg-center bg-no-repeat relative mx-auto"
            >
                {content}
            </div>
        </>
    );
};
