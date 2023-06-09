import React, {useContext, useEffect, useState} from "react";
import {Card} from "@/utils/Card";
import {Input} from "@/utils/Input";
import {Button} from "@/utils/Button";
import {Img} from "@/utils/Img";
import {BlogCards} from "@/utils/BlogCards";
import {Footer} from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import Dialog from "@/components/Dialog";
import {useRouter} from "next/router";
import {LoaderContext} from "@/context/LoaderContext";
import Head from "next/head";

const Home: React.FC = () => {
    const {setIsLoading} = useContext(LoaderContext);
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState("");
    const [showGreetings, setShowGreetings] = useState(false);
    const [open, setOpen] = useState(false);
    const [blogs, setBlogs] = useState<any>([]);
    const router = useRouter();
    const [seoData, setSeoData] = useState<any>({});

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

    const getBlogs = async () => {
        setIsLoading(true);
        const response = await fetch(`/api/get/blogs?withoutPagination=true`);
        const data = await response.json();
        setBlogs(data);
        setIsLoading(false);
    }

    const getSeoData = async () => {
        const response = await fetch(`/api/get/seo`);
        const data = await response.json();
        setSeoData(data.filter((item: any) => item.page === "home")[0]);
    }

    useEffect(() => {
        getBlogs();
        getSeoData()
    }, []);


    return (
        <>
            <Head>
                <title>{seoData?.page_title}</title>
                <meta name="description" content={seoData?.description}/>
                <meta name="keywords" content={seoData?.keywords}/>
                <meta name="title" content={seoData?.title || "Enjoy Mondays"}/>
            </Head>
            <div>
                <div className="banner md:px-[80px] md:pt-[40px] md:pb-[160px] p-[24px] relative">
                    <div className="moving-item-wrapper">
                        <Img
                            src={"/images/moving-items/1.svg"}
                            alt={"moving item"}
                            id="moving-item-1"
                            className="moving-item  "
                        />

                        <Img
                            src={"/images/moving-items/2.svg"}
                            alt={"moving item"}
                            id="moving-item-2"
                            className="moving-item md:block hidden "
                        />
                        <Img
                            src={"/images/moving-items/3.svg"}
                            alt={"moving item"}
                            id="moving-item-3"
                            className="moving-item  "
                        />
                        <Img
                            src={"/images/moving-items/4.svg"}
                            alt={"moving item"}
                            id="moving-item-4"
                            className="moving-item  "
                        />
                        <Img
                            src={"/images/moving-items/5.svg"}
                            alt={"moving item"}
                            id="moving-item-5"
                            className="moving-item "
                        />
                        <Img
                            src={"/images/moving-items/6.svg"}
                            alt={"moving item"}
                            id="moving-item-6"
                            className="moving-item md:block hidden "
                        />
                        <Img
                            src={"/images/moving-items/7.svg"}
                            alt={"moving item"}
                            id="moving-item-7"
                            className="moving-item "
                        />
                        <Img
                            src={"/images/moving-items/8.svg"}
                            alt={"moving item"}
                            id="moving-item-8"
                            className="moving-item md:block hidden"
                        />
                    </div>
                    <div className="logo">
                        <a onClick={() => router.push("/")} className="cursor-pointer">
                            <Img
                                src={"/images/logo.png"}
                                alt={"logo"}
                                className="md:w-[105px] md:h-[64px] w-[73.93px] h-[45px]"
                            />
                        </a>
                    </div>
                    <div className="flex md:flex-row flex-col gap-8 items-center pt-[30px] md:pt-0">
                        <div className="md:flex-1 w-[100%] ">
                            <h1 className="md:text-[50px] md:pt-[75px] pt-[35px] font-bold md:leading-[74.27px] text-bannerHeading text-[35px] leading-[40px]">
                                Love Mondays Again
                            </h1>
                            <p className="md:text-[18px] md:leading-[30.13px] md:pt-[px] pt-[8px] text-[12px] leading-[17.6px] font-normal text-bannerSubHeading">
                                Match with great employers - no applying, no stress, just quality
                                opportunities.
                            </p>
                            <p className=" my-3 md:text-[17px] md:leading-[24px] md:pt[32px] pt-[8px] text-[12px]  font-normal text-bannerSubHeading">
                                Spend less time looking and more time matching with fulfilling
                                jobs in Tech, Engineering, Sales, Marketing, Accounting, and
                                Finance.
                            </p>
                            <div className="md:mt-[24px] md:mb-[25px] mt-[30px]">
                                <h3 className="md:text-[28px] md:leading-[37.13px] text-[15px] leading-[17.6px] font-medium text-bannerFormHeading">
                                    First 500 sign-ups get a FREE $250 Resume Assessment.
                                </h3>
                                {
                                    !showGreetings ?
                                        <div className="flex md:flex-row flex-col gap-2 md:mt-[25px] mt-[10px] ">
                                            <div className="md:flex-1">
                                                <Input
                                                    value={email}
                                                    placeholder="Enter your email address..."
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="fill bg-white md:h-full"
                                                />
                                            </div>
                                            <div>
                                                <Button
                                                    color="primary"
                                                    label="Count me in"
                                                    onClick={signUp}
                                                    className="md:w-[180px]  md:text-[19.86px] md:leading-[39.71px] text-[12px] leading-[17.63px] font-semibold"
                                                />
                                            </div>
                                        </div> :
                                        <h3 className="text-center md:text-[15px] md:leading-[30.13px] text-[12px] leading-[17.6px] pt-[21px] font-medium text-bannerFooterHeading">
                                            Thank you for signing up for our pre-launch. We appreciate your interest in
                                            our
                                            upcoming service and are thrilled to have you as one of our early
                                            supporters.
                                            Better Mondays start here.
                                        </h3>
                                }
                                {
                                    errors && <p className="text-red-500 font-medium text-[13px] pt-[8px]">
                                        {errors}
                                    </p>
                                }
                            </div>
                            <h3 className="md:text-[19px] md:leading-[30.13px] text-[12px] leading-[17.6px] md:pt-0 pt-[21px] font-medium text-bannerFooterHeading">
                                Enjoy Mondays again! Join our pre-launch list and take the first
                                step to a better career.
                            </h3>
                        </div>
                        <div className="md:flex-1 banner-image w-[100%] ">
                            <Img
                                src={"/images/hero.svg"}
                                alt={"banner"}
                                className="w-100 h-100 hidden md:flex w-[100%] "
                            />
                            <Img
                                src={"/images/banner-featured-mobile.png"}
                                alt={"banner"}
                                className="w-[100%] md:hidden "
                            />
                        </div>
                    </div>
                </div>

                <div className="md:py-[42px] p-[24px]">
                    <h3 className="text-center md:text-[42px] md:leading-[45px] text-[30px] leading-[35px] text-[#263041] font-semibold pb-[22px]">
                        6 Reasons to Enjoy Mondays
                    </h3>
                    <p className="text-center md:text-[18px] font-normal md:leading-[26px] text-[#363848] md:w-[488px] m-auto text-[12px] leading-[12.41px]">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Goodbye Sunday Scaries, hello dream job! We're making finding a new
                        career fun again.
                    </p>
                    <div className="flex lg:flex-row flex-col md:py-[120px] py-[30px]">
                        <div
                            className="flex-1 lg:items-end items-stretch justify-center lg:justify-between flex flex-wrap lg:flex-col lg:flex-nowrap">
                            <div className="lg:w-[346px] w-[50%] lg:p-0 p-[6px]">
                                <Card
                                    title="NO MORE APPLYING"
                                    number={1}
                                    background="card-number-one"
                                    description="Create your profile and career wishlist and you're done! Employers will match with and reach out to you."
                                    className="md:h-auto h-[100%] "
                                />
                            </div>
                            <div className="lg:w-[346px] w-[50%] lg:mr-[88px] lg:p-0 p-[6px]">
                                <Card
                                    title="FEEL VALUED"
                                    number={2}
                                    background="card-number-one"
                                    description="Match with great employers and get opportunities that align with your expertise, and match 95% of your wants and desires in a dream career."
                                    className="md:h-auto h-[100%]"
                                />
                            </div>
                            <div className="lg:w-[346px] w-[70%] lg:p-0 p-[6px]">
                                <Card
                                    title="DESIGNED BY EXPERTS"
                                    number={3}
                                    background="card-number-one"
                                    description="From resume assessments to strategies, get top-notch career advice throughout the entire process to help you land your dream role."
                                    className="md:h-auto h-[100%]"
                                />
                            </div>
                        </div>
                        <div className="px-[16px] md:py-0 py-[20px]">
                            <Img
                                src={"/images/featured.png"}
                                alt={""}
                                className="w-[300px] mx-auto"
                            />
                        </div>
                        <div
                            className="flex-1 lg:items-start items-center justify-center lg:justify-between flex flex-wrap lg:flex-col lg:flex-nowrap">
                            <div className="lg:w-[346px] w-[50%] lg:p-0 p-[6px]">
                                <Card
                                    title="GET MORE RESPONSES"
                                    number={4}
                                    background="card-number-two"
                                    description="No more feeling ghosted by job recruiters! Get actual responses by motivated hiring managers. and hear back from them more often."
                                    className="md:h-auto h-[100%]"
                                />
                            </div>
                            <div className="lg:w-[346px] w-[50%] lg:ml-[88px] lg:p-0 p-[6px]">
                                <Card
                                    title="HASSLE-FREE"
                                    number={5}
                                    background="card-number-two"
                                    description="No more wasted time speaking with recruiters. From researching the employer, the job application to the hiring process, everything’s easy, efficient and transparent."
                                    className="md:h-auto h-[100%]"
                                />
                            </div>
                            <div className="lg:w-[346px] w-[70%] lg:p-0 p-[6px]">
                                <Card
                                    title="100% CONFIDENTIAL"
                                    number={6}
                                    background="card-number-two"
                                    description="With Enjoy Mondays, the search for the perfect job is 100% confidential until you request to interview. Our full transparency approach creates an equal playing field."
                                    className="md:h-auto h-[100%]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="video-banner relative md:py-[142px] px-[30px]">
                    <div className="video-banner-liners right">
                        <Img
                            src="/images/right.png"
                            alt={"right liner"}
                            className="md:w-[400px]  w-[100px]"
                        />
                    </div>
                    <h3 className="text-center md:text-[42px] md:leading-[45px] text-[30px] leading-[35px] text-[#263041] font-semibold pb-[42px]">
                        Who uses Enjoy Mondays
                    </h3>
                    <div className="">
                        <div className="video-container flex justify-center relative">
                            <Img
                                src="/images/thumbnail.png"
                                alt={"Video Thumbnail"}
                                className="md:w-[60%] w-[100%] "
                            />
                            <div className="absolute top-0 left-0 w-[100%] h-[100%] flex justify-center items-center">
                                <button className="video-button-wrapper" onClick={() => setOpen(true)}>
                                    <div className="video-button ">
                                        <Img
                                            src="/images/play.svg"
                                            alt={"Play"}
                                            className=" w-auto h-auto"
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="video-banner-liners left">
                        <Img
                            src="/images/left.png"
                            alt={"left liner"}
                            className="md:w-[250px] w-[70px]"
                        />
                    </div>
                </div>

                <div className="md:px-[45px] md:py-[7px] p-[27px]">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:flex-1 md:p-[35px] md:pb-[35px] pb-[15px] w-[100%]">
                            <Img
                                src={"/images/offer.svg"}
                                alt={"Offers"}
                                className=" w-[100%] h-auto "
                            />
                        </div>
                        <div className="lg:flex-1 md:p-[35px] w-[100%]">
                            <h3 className="md:text-[42px] md:leading-[47px] text-[20px] leading-[30px] text-[#363848] font-semibold pb-[10px]">
                                Claim your free resume assessment now
                            </h3>
                            <p className="md:text-[19px] text-[10px] leading-[15px] font-medium md:leading-[32px]">
                                Upgrade your job search game and get a free $250 resume appraisal
                                today.
                            </p>

                            <div className="mt-[32px]">
                                {
                                    !showGreetings ? <div
                                            className="flex justify-between md:w-[510px] claim-input-container md:px-[10px] md:py-[5px] p-[8px]">
                                            <input
                                                className="claim-input md:flex-1 md:w-auto w-[190px]   md:p-[16px] p-[8px] bg-transparent"
                                                placeholder="Enter your email address..."
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <Button
                                                label="Sign me up"
                                                onClick={signUp}
                                                color="primary"
                                                className=" font-medium md:text-[16px] md:w-[150px] text-[10px] md:leading-[21px] "
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

                <div className="md:py-[42px] p-[24px] md:mt-[126px] md:mb-[126px] mt-[50px] mb-[50px]">
                    <div>
                        <h3 className=" flex justify-center md:text-[44px] font-bold md:leading-[74.27px] text-bannerHeading text-[31px] leading-[55px]">
                            Enjoy our Blogs
                        </h3>
                        <p className="text-center md:text-[15px]  md:leading-[24px] text-[#363848] md:w-[490px] w-[300px] m-auto text-[12px] leading-[18.41px]">
                            We will give you industry tips, discuss booming industries, and
                            talk shop about the job market today.
                        </p>
                    </div>
                    <div
                        className="mt-[70px] max-w-[1180px] mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[50px] gap-[30px]"
                    >
                        {
                            blogs.slice(0, 3).map((blog: any, index: number) =>
                                <div key={index}>
                                    <BlogCards
                                        img={blog.image}
                                        title={blog.title}
                                        description={blog.description}
                                        url={blog.slug}
                                    />
                                </div>)
                        }
                    </div>
                </div>

                <Footer/>

                <Dialog
                    content={
                        <VideoPlayer
                            src="/images/video/intro.mp4"
                            type="video/mp4"
                            width="100%"
                            height="100%"
                            loop
                            autoplay
                        />
                    }
                    isOpen={open}
                    onCancel={() => setOpen(false)}
                />
            </div>
        </>
    );
};

export default Home;