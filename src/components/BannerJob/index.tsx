import React, {useContext, useEffect, useState} from "react";
import {Button} from "@/utils/Button";
import {Img} from "@/utils/Img";
import {BlogCards} from "@/utils/BlogCards";
// @ts-ignore
import {Footernew} from "@/components/footernew";
import Navbar from "@/components/Navbar"
import {useRouter} from "next/router";
import {LoaderContext} from "@/context/LoaderContext";
import Head from "next/head";
import {MySlider} from "@/components/Story"


const BannerJob: React.FC = () => {
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
    const imageData = [
        {
            src: "/jobseeker/slack.svg",
            alt: "banner",
        },
        {
            src: "/jobseeker/micro.svg",
            alt: "banner",
        },
        {
            src: "/jobseeker/google.svg",
            alt: "banner",
        },
        {
            src: "/jobseeker/air.svg",
            alt: "banner",
        }
    ];
    const cardData = [
        {
            src: "/jobseeker/Digital1.png",
            alt: "banner",
            className: "w-[130px] h-auto"
        },
        {
            src: "/jobseeker/sales.svg",
            alt: "banner",
            className: "w-[110px] h-auto"
        },
        {
            src: "/jobseeker/data.svg",
            alt: "banner",
            className: "w-[130px] h-auto"
        },
        {
            src: "/jobseeker/cybersvg.svg",
            alt: "banner",
            className: "w-[130px] h-auto"
        },
        {
            src: "/jobseeker/tech.svg",
            alt: "banner",
            className: "w-[110px] h-auto"
        },
        {
            src: "/jobseeker/engi.svg",
            alt: "banner",
            className: "w-[130px] h-auto"
        },
        {
            src: "/jobseeker/accounting.svg",
            alt: "banner",
            className: "w-[130px] h-auto"
        },
        {
            src: "/jobseeker/data.svg",
            alt: "banner",
            className: "w-[130px] h-auto"
        }
    ];
    const settings = {
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: "100px",
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1120,
                settings: {
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                },
            },
        ],
    };
    const mobileSettings = {
        dots: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: "50px",
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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


                {/* navbar */}
                {/* navbar */}
                {/* navbar */}
                {/* navbar */}


                <Navbar/>


                {/* banner */}
                {/* banner */}
                {/* banner */}
                {/* banner */}


                <div className=" md:px-[80px] bgbanner -z-0  md:pt-[40px]  px-[24px] relative">
                    <div className="moving-item-wrapper z-10">


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
                    <div
                        className="flex max-w-[1390px] md:flex-row   mx-auto justify-center flex-col gap-8  pt-[30px] md:pt-0">
                        <div className="md:flex-1 w-[100%] h-auto">
                            <Img
                                src={"/jobseeker/lines.svg"}
                                alt={"banner"}
                                className="  hidden md:flex absolute w-auto h-auto left-[0px] top-[40px] -z-100 "
                            />
                            <h1 className="md:text-[40px] md:pt-[75px]  z-10 pt-[35px] font-bold md:leading-[50.27px] text-bannerHeading text-[37px] md:text-start text-center leading-[40px]">
                                Match with the Perfect Job Opportunities
                            </h1>
                            <p className=" my-3 md:text-[17px] md:leading-[24px] md:pt[32px] pt-[8px] text-[12px] md:text-start text-center  font-normal text-bannerSubHeading">
                                Spend less time looking and more time matching with fulfilling
                                jobs in Tech, Engineering, Sales, Marketing, Accounting, and
                                Finance.
                            </p>
                            <div className="md:mt-[24px] md:mb-[25px] mt-[30px]">
                                <div
                                    className="flex flex-row md:justify-normal justify-center  gap-3 md:mt-[25px] mt-[10px] ">
                                    <div>
                                        <Button
                                            color="primary"
                                            label="I'm a Job Seeker"
                                            onClick={() => router.push("/")}
                                            className="md:max-w-[170px] z-0 max-w-[175px] h-[45px]  md:text-[14.86px] md:leading-[19.71px] text-[12px] leading-[17.63px] font-semibold"
                                        />
                                    </div>
                                    <div>
                                        <Button
                                            color="secondary1"
                                            label=" I'm an Employer"
                                            onClick={() => router.push("/")}
                                            className="md:max-w-[170px] z-10 max-w-[175px]   h-[45px]  md:text-[14.86px] md:leading-[19.71px] text-[12px] leading-[17.63px] font-semibold"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 z-10 banner-image md:mt-[90px] w-[100%] h-auto ">
                            <Img
                                src={"/jobseeker/girl.svg"}
                                alt={"banner"}
                                className="w-100   hidden md:flex w-[100%] "
                            />

                            <Img
                                src={"/jobseeker/girl.svg"}
                                alt={"banner"}
                                className="w-[100%] md:hidden "
                            />
                        </div>
                    </div>
                </div>
                {/* Companies section */}
                {/* Companies section */}
                {/* Companies section */}
                {/* Companies section */}
                <div className="flex flex-col bgcomp max-w-[1740px] mx-auto     p-[50px] ">
                    <h3 className="md:text-[20px] text-[14px] text-center font-bold ">Join Most Well Known <span
                        className="text-[#F2994A]">Companies</span> Around The World</h3>
                    <div
                        className="flex md:flex-row mx-auto flex-col gap-y-[50px] lg:gap-[138px] md:gap-[65px] mt-[50px]">
                        {imageData.map((image, index) => (
                            <Img
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                className={"w-[130px] h-auto"}
                            />
                        ))}
                    </div>
                </div>
                {/*how it works*/}
                {/*how it works*/}
                {/*how it works*/}
                {/*how it works*/}
                <div className="bghow pb-[100px] lg:pl-[80px] ">
                    <h1 className="md:text-[40px]  pt-[50px] text-[25px] font-bold text-[#44B480] text-center">
                        How It Works</h1>
                    <div
                        className="flex md:flex-row md:justify-center md:mt-[50px] mt-[20px] justify-center items-center gap-[50px]  flex-col ">


                        <div className="flex flex-col ">

                            <div className="flex flex-row mt-[12px]">
                                <div>

                                    <div
                                        className={` rounded-full bg-[#44B480]  flex items-center md:text-[16.42px] md:leading-[29.12px] text-[20px] leading-[22.5px]  font-semibold text-[#fff] md:px-[11px] md:py-[9px] p-[5px] md:w-[41.78px] md:h-[42.3px] w-[32px] h-[34px]`}>
                                        01
                                    </div>
                                </div>
                                <div className="flex flex-col ml-[10px]">
                                    <h1 className="md:text-[20px] text-[16px] font-normal">Create your Profile</h1>
                                    <h1 className="md:text-[16px] text-[10px] mt-[6px]  font-normal">It takes less than
                                        10 minutes!</h1>
                                </div>
                            </div>
                            <div className="flex flex-row mt-[15px]">
                                <div>

                                    <div
                                        className={` rounded-full bg-[#44B480]  flex items-center md:text-[16.42px] md:leading-[29.12px] text-[20px] leading-[22.5px]  font-semibold text-[#fff] md:px-[11px] md:py-[9px] p-[5px] md:w-[41.78px] md:h-[42.3px] w-[32px] h-[34px]`}>
                                        02
                                    </div>
                                </div>
                                <div className="flex flex-col ml-[10px]">
                                    <h1 className="md:text-[20px] text-[16px]  font-normal">Tell us About Yourself</h1>
                                    <h1 className="md:text-[16px] mt-[6px] text-[10px] font-normal">With our
                                        Talent-match questionnaire</h1>
                                </div>
                            </div>
                            <div className="flex flex-row mt-[15px]">
                                <div>

                                    <div
                                        className={` rounded-full bg-[#44B480]  flex items-center md:text-[16.42px] md:leading-[29.12px] text-[20px] leading-[22.5px]  font-semibold text-[#fff] md:px-[11px] md:py-[9px] p-[5px] md:w-[41.78px] md:h-[42.3px] w-[32px] h-[34px]`}>
                                        03
                                    </div>
                                </div>
                                <div className="flex flex-col ml-[10px]">
                                    <h1 className="md:text-[20px] text-[16px] font-normal">Match with Great Jobs</h1>
                                    <h1 className="md:text-[16px] mt-[6px] text-[10px] font-normal">That are a 95% match
                                        to your profile</h1>
                                </div>
                            </div>
                            <div className="flex flex-row mt-[15px]">
                                <div>

                                    <div
                                        className={` rounded-full bg-[#44B480]  flex items-center md:text-[16.42px] md:leading-[29.12px] text-[20px] leading-[22.5px]  font-semibold text-[#fff] md:px-[11px] md:py-[9px] p-[5px] md:w-[41.78px] md:h-[42.3px] w-[32px] h-[34px]`}>
                                        04
                                    </div>
                                </div>
                                <div className="flex flex-col ml-[10px]">
                                    <h1 className="md:text-[20px] text-[16px] font-normal">Start Monday!</h1>
                                    <h1 className="md:text-[16px] mt-[6px] text-[10px] font-normal">Faster, easier job
                                        searching is finally here.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex  md:mt-[0px] mt-[12px]">
                            <Img
                                src={"/jobseeker/video.svg"}
                                alt={"banner"}
                                className="w-[430px] h-auto  "
                            />
                            <Img
                                src={"/jobseeker/Rectangle.svg"}
                                alt={"banner"}
                                className="w-[80px] h-auto md:block hidden relative ml-[15px] -top-[115px]  "
                            />
                        </div>
                        <Img
                            src={"/jobseeker/rectangle1.svg"}
                            alt={"banner"}
                            className="w-[80px] h-auto  md:block hidden relative lg:right-[180px] md:right-[105px] md:top-[215px] lg:top-[230px]  "
                        />

                    </div>
                </div>
                {/*job categories*/}
                {/*job categories*/}
                {/*job categories*/}
                {/*job categories*/}
                <div className="flex justify-center bghow flex-col items-center">

                    <div
                        className="md:text-[35px] flex justify-center items-center text-[20px] text-center text-[#2C98F0] font-bold">Popular
                        Job Categories
                    </div>
                    <div
                        className="text-[13px] mt-[12px] text-[#363848] font-normal text-center flex max-w-[430px] font-normal">Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore
                    </div>

                    <div
                        className="md:grid md:grid-cols-4 justify-center mt-[40px]  pb-[80px] flex flex-wrap gap-[20px]">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white items-center  rounded-[22px] pl-[10px] py-[17px] md:py-[30px] md:w-[170px] lg:w-[200px] w-[160px] h-[60px] md:h-[85px]"
                            >
                                <Img src={card.src} alt={card.alt} className={card.className}/>
                            </div>
                        ))}
                    </div>
                </div>
                {/*job match*/}
                {/*job match*/}
                {/*job match*/}
                {/*job match*/}
                {/*job match*/}
                <div className="flex md:flex-row py-[80px] flex-col gap-[50px] justify-center items-center">
                    <div>
                        <Img
                            src={"/jobseeker/group.svg"}
                            alt={"banner"}
                            className="w-[480px] h-auto  "
                        />
                    </div>
                    <div className="flex flex-col md:justify-normal justify-center md:items-start items-center">
                        <div className="md:text-[20px] text-[28px] font-medium text-[#0070F0]">Hassle-free Job Matching
                        </div>
                        <div
                            className="lg:text-[35px] md:text-[25px] lg:leading-[45px] md:leading-[30px] md:text-start text-center text-[18px] font-semibold ">Level
                            up your Job Search <br/> with Enjoy Mondays
                        </div>
                        <div
                            className=" text-[14px] mt-[6px] md:text-start text-center font-normal text-[#7A7A7A] md:max-w-[450px]">Frictionless,
                            painless and stress-free, we help you connect to opportunities that matter to you. Try us
                            for free and experience a new way to find your dream job
                        </div>
                        <div className="text-[16px] mt-[13px]  font-medium">Ready to find your new career?</div>
                        <div><Button
                            color="primary"
                            label=" I'm Ready!"
                            onClick={() => router.push("/")}
                            className="md:max-w-[170px] max-w-[175px]  mt-[10px]  h-[45px]  md:text-[16.86px] md:leading-[39.71px] text-[12px] leading-[17.63px] font-semibold"
                        /></div>
                    </div>
                </div>
                {/*real stories*/}
                {/*real stories*/}
                {/*real stories*/}
                {/*real stories*/}
                {/*real stories*/}
                {/*real stories*/}
                {/*real stories*/}
                <MySlider/>
                {/*blogcards*/}
                {/*blogcards*/}
                {/*blogcards*/}
                {/*blogcards*/}
                {/*blogcards*/}
                {/*blogcards*/}
                <div className="md:py-[42px] p-[24px] bghow md:pt-[76px] md:pb-[126px] pt-[50px] pb-[50px]">
                    <div>
                        <h3 className=" flex justify-center text-blue-600 md:text-[44px] font-bold md:leading-[74.27px] text-bannerHeading text-[25px] leading-[55px]">
                            Learn how to get hired
                        </h3>
                        <p className="text-center md:text-[15px]   md:leading-[24px] text-[#363848] md:w-[490px] w-[300px] m-auto text-[12px] leading-[18.41px]">We
                            will give you industry tips, discuss booming industries, and talk shop about the job
                            market
                            today.
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
                {/*never miss section*/}
                {/*never miss section*/}
                {/*never miss section*/}
                {/*never miss section*/}
                {/*never miss section*/}
                {/*never miss section*/}
                <div
                    className="flex md:flex-row flex-col bgnever  justify-center md:gap-[10px] lg:gap-[200px] p-[30px] py-[50px]">
                    <div
                        className=" md:text-[35px] sm:text-[22px] text-[20px]  leading-[40px] items-start justify-start font-semibold max-w-[400px]">
                        <div> Never Want to Miss Any Job News?
                        </div>

                    </div>
                    <div>
                        <div className="mt-[18px]">
                            {
                                !showGreetings ? <div
                                        className="flex justify-between md:w-[410px] h-[54px] claim-input-container md:px-[10px] md:py-[5px] p-[8px]">
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
                                            className=" font-medium md:text-[16px] md:w-[130px] text-[10px] md:leading-[21px] "
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
                {/*footer*/}
                {/*footer*/}
                {/*footer*/}
                {/*footer*/}
                {/*footer*/}
                {/*footer*/}
                {/*footer*/}

                <Footernew/>
            </div>
        </>
    );
};
export default BannerJob;