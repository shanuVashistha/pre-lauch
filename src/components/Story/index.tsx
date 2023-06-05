import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Img} from "@/utils/Img";


export const MySlider = () => {
    const settings = {
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: "200px",
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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

    return (
        // <Slider {...settings}>
        <div
            className="bghow     flex md:flex-row md:pr-[70px] pb-[120px] justify-center items-center gap-[35px]   flex-col">


            <div className="flex flex-col md:justify-normal justify-center md:items-start items-center   ">
                <div className="">
                    <Img
                        src={"/jobseeker/''.svg"}
                        alt={"banner"}
                        className="w-[130px] -z-0 relative top-[70px] -left-[75px] h-auto  "
                    />
                    <div className="text-[40px] z-0 relative font-semibold items-start">Real Stories from
                        <br/>
                        Talents
                    </div>
                    <div className="text-[17px] font-medium">Get inspired by these stories.</div>
                </div>


                <div
                    className="rounded-[15px] bg-white w-[260px] md:ml-[130px] h-[299px] mt-[25px] flex flex-col pl-[45px] pr-[16px] pt-[25px]">
                    <div>
                        <Img
                            src={"/jobseeker/smallsign.svg"}
                            alt={"banner"}
                            className="w-[10px] relative  h-auto -left-[30px]  "
                        />
                    </div>
                    <div className="text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud labore et dolore magna aliqua
                    </div>

                    <div className="flex flex-row mt-[20px] ">
                        <div><Img
                            src={"/jobseeker/girl.svg"}
                            alt={"banner"}
                            className="w-[45px] h-auto  "
                        />
                        </div>
                        <div className="flex-col ml-[10px] flex">
                            <div className="text-[16px] font-semibold">Floyd Miles</div>
                            <div className="text-[14px] font-medium">UI/UX Designer</div>

                        </div>

                    </div>

                </div>


            </div>

            <div
                className="flex md:justify-normal justify-center md:items-start items-center  md:mt-[300px] flex-col">

                <div
                    className="rounded-[15px] bg-white w-[320px] h-[249px] flex flex-col pl-[45px] pr-[16px] pt-[25px]">
                    <div>
                        <Img
                            src={"/jobseeker/smallsign.svg"}
                            alt={"banner"}
                            className="w-[10px] relative -left-[30px]  h-auto  "
                        />
                    </div>

                    <div className="text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud labore et dolore magna aliqua
                    </div>
                    <div className="flex flex-row mt-[20px]">
                        <div><Img
                            src={"/jobseeker/girl.svg"}
                            alt={"banner"}
                            className="w-[45px] h-auto  "
                        />
                        </div>
                        <div className="flex-col ml-[10px] flex">
                            <div className="text-[16px] font-semibold">Floyd Miles</div>
                            <div className="text-[14px] font-medium">UI/UX Designer</div>

                        </div>

                    </div>

                </div>

                < div
                    className="rounded-[15px] bg-white w-[260px] mt-[39px] h-[299px] flex flex-col pl-[45px] pr-[16px] pt-[25px]">
                    <div>
                        <Img
                            src={"/jobseeker/smallsign.svg"}
                            alt={"banner"}
                            className="w-[10px]  relative h-auto -left-[30px]  "
                        />
                    </div>
                    <div className="text-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud labore et dolore magna aliqua
                    </div>
                    <div className="flex flex-row mt-[20px]">
                        <div><Img
                            src={"/jobseeker/girl.svg"}
                            alt={"banner"}
                            className="w-[45px] h-auto  "
                        />
                        </div>
                        <div className="flex-col ml-[10px] flex">
                            <div className="text-[16px] font-semibold">Floyd Miles</div>
                            <div className="text-[14px] font-medium">UI/UX Designer</div>

                        </div>


                    </div>


                </div>

            </div>


        </div>
        // </Slider>
    );
};

