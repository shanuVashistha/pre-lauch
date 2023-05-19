import React, { useContext, useState } from "react";
import { Img } from "@/utils/Img";
import { SocialButton } from "@/utils/SocialButton";
import { Input, TextArea } from "@/utils/Input";
import { Button } from "@/utils/Button";
import { LoaderContext } from "@/context/LoaderContext";

export const Footer: React.FC = () => {
    const { setIsLoading } = useContext(LoaderContext);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState("");
    const [showGreetings, setShowGreetings] = useState(false);

    const signUp = async () => {
        setErrors("");
        if (!email) {
            setErrors("Please enter a email address");
            return;
        } else if (email && !/\S+@\S+\.\S+/.test(email)) {
            setErrors("Please enter a valid email address");
            return;
        }
        if (!message) {
            setErrors("Please enter a message");
            return;
        }
        setIsLoading(true);
        const response = await fetch("/api/create/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, message }),
        });
        const data = await response.json();

        if (data.success) {
            setMessage("");
            setEmail("");
            setErrors("");
            setShowGreetings(true);
        }
        setIsLoading(false);
    }

    return <div className="bg-[#263041] md:px-[45px] md:py-[7px] p-[21px] md:pt[] pt-[30px] ">
        <div className="flex flex-col lg:flex-row items-center">
            <div className="md:p-[35px] lg:flex-1 w-[100%] flex lg:flex-col md:items-start items-center">
                <div className="lg:pb-[59px]">
                    <Img
                        src={"/images/logo-white.svg"}
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
                            <SocialButton
                                icon={"/images/icons/facebook.svg"}
                                url={"https://www.facebook.com/profile.php?id=100090762161323&mibextid=LQQJ4d"}
                            />
                        </div>
                        <div className="lg:pr-8 pr-4">
                            <SocialButton icon={"/images/icons/twitter.svg"} url={"#"}/>
                        </div>
                        <div className="lg:pr-8 pr-4">
                            <SocialButton
                                icon={"/images/icons/youtube.svg"}
                                url={"https://www.youtube.com/channel/UC1xFBqHYciLGdpon3H21-xw/"}
                            />
                        </div>
                        <div className="lg:pr-8 pr-4">
                            <SocialButton
                                icon={"/images/icons/linkedIn.svg"}
                                url={"https://www.linkedin.com/company/enjoy-mondays/"}
                            />
                        </div>
                        <div>
                            <SocialButton
                                icon={"/images/icons/instagram.svg"}
                                url={"https://www.instagram.com/enjoymondaysinc"}
                            />
                        </div>
                    </div>
                    <p className="pt-[46px] text-[#F3F3F3] text-[14px] leading-[24px] font-normal opacity-50 lg:flex hidden">
                        © Copyright 2023. All rights reserved. Privacy policy.
                    </p>
                </div>
            </div>
            <div
                className="md:p-[35px] p-[16px] md:mt-0 mt-[20px] flex-1 lg:w-auto md:w-[70%] w-[100%]"
            >
                {!showGreetings ?
                    <div className="w-full flex flex-col items-center">
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
                            {
                                errors && <p className="text-red-500 font-medium text-[13px] py-[8px]">
                                    {errors}
                                </p>
                            }
                        </div>
                        <div>
                            <Button
                                label="Send your message"
                                onClick={signUp}
                                color="primary"
                                className="text-[16.2px] leading-[16px] font-semibold"
                            />
                        </div>
                    </div>
                    :
                    <h3 className="text-center md:text-[15px] md:leading-[30.13px] text-[12px] leading-[17.6px] pt-[21px] font-medium text-white">
                        Thanks for contacting us! We will get back to you soon.
                    </h3>
                }
            </div>
            <p className="pt-[26px] text-[#F3F3F3] text-[14px] leading-[24px] font-normal opacity-50 lg:hidden text-center">
                © Copyright 2023. All rights reserved. Privacy policy.
            </p>
        </div>
    </div>
}