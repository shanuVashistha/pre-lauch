import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import LogoWhite from "../../public/images/logo-white.svg";
import Banner from "../../public/images/banner-featured.png"
import Featured from "../../public/images/Featured.png"
import VideoThumbnail from "../../public/images/video-thumbnail.png"
import PlayIcon from "../../public/images/play.svg"
import OfferImage from "../../public/images/offers.svg"
import { Card } from "@/utils/Card";
import { SocialButton } from "@/utils/SocialButton";
import FacebookIcon from "../../public/images/icons/facebook.svg"
import TwitterIcon from "../../public/images/icons/twitter.svg"
import YouTubeIcon from "../../public/images/icons/youtube.svg"
import LinkedInIcon from "../../public/images/icons/linkedIn.svg"
import InstagramIcon from "../../public/images/icons/instagram.svg"
import { Input, TextArea } from "@/utils/Input";
import { Button } from "@/utils/Button";

const Home: React.FC = () => {
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    return <div>
        <div className="banner px-[80px] pt-[40px] pb-[160px]">
            <div className="logo">
                <Image src={Logo} alt={"logo"} className="w-[105px] h-[64px]"/>
            </div>
            <div className="grid grid-cols-2 gap-8 items-center">
                <div className="">
                    <h1 className="text-[50px] font-bold leading-[74.27px] text-bannerHeading">
                        Love Mondays Again
                    </h1>
                    <p className="text-[18px] leading-[37.13px] font-normal text-bannerSubHeading">
                        Match with great employers - no applying, no stress, just quality opportunities.
                    </p>
                    <div className="mt-[48px] mb-[25px]">
                        <h3 className="text-[28px] leading-[37.13px] font-medium text-bannerFormHeading">
                            First 500 sign-ups get a FREE $250 Resume Assessment.
                        </h3>
                        <div className="flex gap-2 mt-[25px]">
                            <div className="flex-1">
                                <Input
                                    value={email}
                                    placeholder="Enter your email address..."
                                    onChange={e => setEmail(e.target.value)}
                                    className="fill h-[100%]"
                                />
                            </div>
                            <div>
                                <Button
                                    color="primary"
                                    label="Get Started"
                                    onClick={() => console.log(email)}
                                    className="text-[19.86px] leading-[39.71px] font-semibold"
                                />
                            </div>
                        </div>
                    </div>
                    <h3 className="text-[19px] leading-[37.13px] font-medium text-bannerFooterHeading">
                        Enjoy Mondays again! Join our pre-launch list and take the first step to a better career.
                    </h3>
                </div>
                <div className="banner-image">
                    <Image src={Banner} alt={"banner"} className="w-100 h-100"/>
                </div>
            </div>
        </div>
        <div className="py-[42px]">
            <h3 className="text-center text-[42px] leading-[45px] text-[#263041] font-semibold pb-[22px]">
                6 Reasons to Enjoy Mondays
            </h3>
            <p className="text-center text-[18px] font-normal leading-[26px] text-[#363848] w-[488px] m-auto">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Goodbye Sunday Scaries, hello dream job! We're making finding a new career fun again.
            </p>
            <div className="flex py-[120px]">
                <div className="flex-1 items-end justify-between flex flex-col">
                    <div className="w-[346px]">
                        <Card
                            title="NO MORE APPLYING"
                            number={1}
                            background="card-number-one"
                            description="Create your profile and career wishlist and you're done! Employers will match with and reach out to you."
                        />
                    </div>
                    <div className="w-[346px] mr-[88px]">
                        <Card
                            title="FEEL VALUED"
                            number={2}
                            background="card-number-one"
                            description="Match with great employers and get opportunities that align with your expertise, and match 95% of your wants and desires in a dream career."
                        />
                    </div>
                    <div className="w-[346px]">
                        <Card
                            title="DESIGNED BY EXPERTS"
                            number={3}
                            background="card-number-one"
                            description="From resume assessments to strategies, get top-notch career advice throughout the entire process to help you land your dream role."
                        />
                    </div>
                </div>
                <div className="px-[16px]">
                    <Image src={Featured} alt={""} className="w-[300px]"/>
                </div>
                <div className="flex-1 items-start justify-between flex flex-col">
                    <div className="w-[346px]">
                        <Card
                            title="GET MORE RESPONSES"
                            number={4}
                            background="card-number-two"
                            description="No more feeling ghosted by job recruiters! Get actual responses by motivated hiring managers. and hear back from them more often."
                        />
                    </div>
                    <div className="w-[346px] ml-[88px]">
                        <Card
                            title="HASSLE-FREE"
                            number={5}
                            background="card-number-two"
                            description="No more wasted time speaking with recruiters. From researching the employer, the job application to the hiring process, everything’s easy, efficient and transparent."
                        />
                    </div>
                    <div className="w-[346px]">
                        <Card
                            title="FULL SUPPORT"
                            number={6}
                            background="card-number-two"
                            description="Get recruiter customer support and helpful job tips from our resource center team so you can finally Enjoy Mondays again."
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="video-banner py-[142px]">
            <h3 className="text-center text-[42px] leading-[45px] text-[#263041] font-semibold pb-[42px]">
                Who uses Enjoy Mondays
            </h3>
            <div className="">
                <div className="video-container flex justify-center relative">
                    <Image src={VideoThumbnail} alt={"Video Thumbnail"} className="w-[60%]"/>
                    <div className="absolute top-0 left-0 w-[100%] h-[100%] flex justify-center items-center">
                        <button className="video-button-wrapper">
                            <div className="video-button">
                                <Image src={PlayIcon} alt={"Play"}/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-[45px] py-[7px]">
            <div className="flex items-center">
                <div className="flex-1 p-[35px]">
                    <Image src={OfferImage} alt={"Offers"}/>
                </div>
                <div className="flex-1 p-[35px]">
                    <h3 className="text-[42px] leading-[47px] text-[#363848] font-semibold pb-[10px]">
                        Claim your free resume assessment now
                    </h3>
                    <p className="text-[18px] font-normal leading-[32px] text-[#363848]">
                        Upgrade your job search game and get a free $250 resume appraisal today.
                    </p>
                    <div className="mt-[32px]">
                        <div className="flex claim-input-container">
                            <input
                                className="claim-input flex-1"
                                placeholder="Enter your email address..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button
                                label="Sign me up"
                                onClick={() => console.log(email)}
                                color="primary"
                                className="font-medium text-[18px] leading-[21px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#263041] px-[45px] py-[7px]">
            <div className="flex items-center">
                <div className="p-[35px] flex-1 flex flex-col">
                    <div className="pb-[42px]">
                        <Image src={LogoWhite} alt={"Footer Logo"} className="w-[91px]"/>
                    </div>
                    <h3 className="text-[25px] leading-[40.5px] font-semibold text-[#FFFFFF] pb-[16px]">
                        Social Media
                    </h3>
                    <div className="flex items-center">
                        <div className="pr-8">
                            <SocialButton icon={FacebookIcon} url={"#"}/>
                        </div>
                        <div className="pr-8">
                            <SocialButton icon={TwitterIcon} url={"#"}/>
                        </div>
                        <div className="pr-8">
                            <SocialButton icon={YouTubeIcon} url={"#"}/>
                        </div>
                        <div className="pr-8">
                            <SocialButton icon={LinkedInIcon} url={"#"}/>
                        </div>
                        <div className="pr-8">
                            <SocialButton icon={InstagramIcon} url={"#"}/>
                        </div>
                    </div>
                    <p className="pt-[46px] text-[#F3F3F3] text-[14px] leading-[24px] font-normal opacity-50">
                        © Copyright 2023. All rights reserved. Privacy policy.
                    </p>
                </div>
                <div className="p-[35px] flex-1 flex flex-col items-center">
                    <h3 className="text-[31.5px] text-center leading-[40.5px] font-bold text-[#FFFFFF] pb-[40px]">
                        Got any questions?
                    </h3>
                    <div className="pb-[24px] w-[100%]">
                        <Input
                            type={"text"}
                            placeholder={"Enter Your Email"}
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="pb-[40px] w-[100%]">
                        <TextArea
                            placeholder={"Enter Your Message"}
                            onChange={e => setMessage(e.target.value)}
                            value={message}
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
            </div>
        </div>
    </div>
}

export default Home;