import React from "react";
import { Img } from "@/utils/Img";
import { SocialButton } from "@/utils/SocialButton";
import { Input, TextArea } from "@/utils/Input";
import { Button } from "@/utils/Button";

export const Footer: React.FC = () => {
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    return <div className="bg-[#263041] md:px-[45px] md:py-[7px] p-[21px] md:pt[] pt-[30px] ">
        <div className="flex flex-col lg:flex-row items-center">
            <div className="md:p-[35px] lg:flex-1 w-[100%] flex lg:flex-col md:items-start items-center">
                <div className="lg:pb-[59px]">
                    <Img
                        src={"/images/logowhite.svg"}
                        alt={"Footer Logo"}
                        className="md:w-[91px] w-[70.6px] "
                    />
                </div>
                <div className="lg:flex-auto flex-1 flex flex-col lg:items-start items-end">
                    <h3 className="md:text-[25px] md:leading-[40.5px] text-[15px] leading-[11.6px] font-semibold text-[#FFFFFF] pb-[16px]">
                        Social Media
                    </h3>
                    <div className="flex items-center md:mt-[20px]">
                        <div className="lg:pr-8 pr-4">
                            <SocialButton icon={"/images/icons/facebook.svg"} url={"#"}/>
                        </div>
                        <div className="lg:pr-8 pr-4">
                            <SocialButton icon={"/images/icons/twitter.svg"} url={"#"}/>
                        </div>
                        <div className="lg:pr-8 pr-4">
                            <SocialButton icon={"/images/icons/youtube.svg"} url={"#"}/>
                        </div>
                        <div className="lg:pr-8 pr-4">
                            <SocialButton icon={"/images/icons/linkedIn.svg"} url={"#"}/>
                        </div>
                        <div>
                            <SocialButton
                                icon={"/images/icons/instagram.svg"}
                                url={"#"}
                            />
                        </div>
                    </div>
                    <p className="pt-[46px] text-[#F3F3F3] text-[14px] leading-[24px] font-normal opacity-50 lg:flex hidden">
                        © Copyright 2023. All rights reserved. Privacy policy.
                    </p>
                </div>
            </div>
            <div
                className="md:p-[35px] p-[16px] md:mt-0 mt-[20px] flex-1 flex flex-col items-center lg:w-auto md:w-[70%] w-[100%]">
                <h3 className="text-[31.5px] text-center leading-[40.5px] font-bold text-[#FFFFFF] pb-[40px]">
                    Got any questions?
                </h3>
                <div className="mb-[24px] w-[100%]  ">
                    <Input
                        type={"text"}
                        placeholder={"Enter Your Email"}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className=" w-full md:w-[296px]"
                    />
                </div>
                <div className="mb-[40px] w-[100%]">
                    <TextArea
                        placeholder={"Enter Your Message"}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className="w-[] md:w-[296px]"
                    />
                </div>
                <div>
                    <Button
                        label="Send your message"
                        onClick={() => console.log(email, message)}
                        color="primary"
                        className="text-[16.2px] leading-[16px] font-semibold"
                    />
                </div>
            </div>
            <p className="pt-[26px] text-[#F3F3F3] text-[14px] leading-[24px] font-normal opacity-50 lg:hidden text-center">
                © Copyright 2023. All rights reserved. Privacy policy.
            </p>
        </div>
    </div>
}