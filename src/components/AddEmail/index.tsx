import {Button} from "@/utils/Button";
import React, {useContext, useState} from "react";
import {LoaderContext} from "@/context/LoaderContext";




export const AddEmail: React.FC<any> = () => {
    const {setIsLoading} = useContext(LoaderContext);
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState("");
    const [showGreetings, setShowGreetings] = useState(false);


    const signUp = async () => {
        setErrors("");
        if (!email) {
            setErrors("Please enter an email address");
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors("Please enter a valid email address");
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch("/api/create/signups", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email}),
            });
            const data: any = await response.json();
            if (!data.success) {
                setErrors(data.error || "Failed to sign up. Please try again later.");
            }

            if (data.success) {
                setEmail("");
                setErrors("");
                setShowGreetings(true);
            }
        } catch (error: any) {
            setErrors(error.message);
        }
        setIsLoading(false);
    };




    const content = <>
        <div className="flex flex-col justify-center items-center mx-auto">
            <div className="w-full lg:max-w-[1200px] pt-[70px] pb-[30px] ">
                <div className="w-full justify-center items-center flex md:flex-row flex-col">
                    <div className="w-[100vw] md:w-[50vw]">
                        <h1 className="text-[30px] md:text-[32px] lg:text-[42px] text-center md:text-start text-[#414141] ml-[20px] font-semibold">Never Want to Miss <br/>
                            Any Job News?</h1>
                    </div>
                    <div className="w-[90vw] md:w-[50vw] relative ml-[20px] md:ml-[40px]">
                        <div className="mt-[32px]">
                            {
                                !showGreetings ? <div
                                        className="flex justify-between md:w-[90%] claim-input-container md:px-[10px] md:py-[5px] p-[8px]">
                                        <input
                                            className="claim-input  md:flex-1 md:w-auto w-[190px]   md:p-[16px] p-[8px] bg-transparent"
                                            placeholder="Enter your email address..."
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <Button
                                            label="Sign me up"
                                            onClick={signUp}
                                            color="primary"
                                            className=" font-medium md:text-[14px] md:w-[150px] text-[8px] md:leading-[21px] "
                                        />
                                    </div> :
                                    <h3 className="text-center md:text-[15px] md:leading-[30.13px] text-[12px] leading-[17.6px] pt-[21px] font-medium text-bannerFooterHeading">
                                        Great you take your first step to a better career. We will be in touch soon!
                                    </h3>
                            }
                            {
                                errors && <p className="text-red-500 font-medium text-[13px] pt-[8px]">
                                    {errors}
                                </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    return (
        <>
            <div
                style={{background: "rgba(176, 220, 255, 0.27)"}}
                className="bg-cover bg-center bg-no-repeat relative   mx-auto"
            >
                {content}
            </div>
        </>
    );
};






