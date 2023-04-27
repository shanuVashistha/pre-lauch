import React from "react";
import MyVideo from "./Components/video";
import Link from "next/link";
import ReactPlayer from 'react-player'

import { Card } from "@/utils/Card";
import { SocialButton } from "@/utils/SocialButton";
import { Input, TextArea } from "@/utils/Input";
import { Button } from "@/utils/Button";
import { Img } from "@/utils/Img";
import {BlogInterface, BlogBodyInterface, BlogListInterface} from "@/utils/types";
import { BlogCards } from "@/utils/BlogCards";




const Home: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  return (
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
          <Img
            src={"/images/logo.png"}
            alt={"logo"}
            className="md:w-[105px] md:h-[64px] w-[73.93px] h-[45px]"
          />
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
              <div className="flex md:flex-row flex-col gap-2 md:mt-[25px] mt-[10px]">
                <div className="md:flex-1 ">
                  <Input
                    value={email}
                    placeholder="Enter your email address..."
                    onChange={(e) => setEmail(e.target.value)}
                    className="  fill h-[100%] bg-white  "
                  />
                </div>
                <div>
                  <Button
                    color="primary"
                    label="Count me in"
                    onClick={() => console.log(email)}
                    className="md:w-[180px]  md:text-[19.86px] md:leading-[39.71px] text-[12px] leading-[17.63px] font-semibold"
                  />
                </div>
              </div>
            </div>
            <h3 className="md:text-[19px] md:leading-[30.13px] text-[12px] leading-[17.6px] md:pt-0 pt-[21px] font-medium text-bannerFooterHeading">
              Enjoy Mondays again! Join our pre-launch list and take the first
              step to a better career.
            </h3>
          </div>
          <div className="md:flex-1 banner-image w-[100%] ">
            <Img
              src={"/hero1.png"}
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
          <div className="flex-1 lg:items-end items-stretch justify-center lg:justify-between flex flex-wrap lg:flex-col lg:flex-nowrap">
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
              src={"/images/Featured.png"}
              alt={""}
              className="w-[300px] mx-auto"
            />
          </div>
          <div className="flex-1 lg:items-start items-center justify-center lg:justify-between flex flex-wrap lg:flex-col lg:flex-nowrap">
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
            src={"/images/who-uses-right.png"}
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
              src={"/images/video-thumbnail.png"}
              alt={"Video Thumbnail"}
              className="md:w-[60%] w-[100%] "
            />
            
            <div className="absolute top-0 left-0 w-[100%] h-[100%] flex justify-center items-center">
              <button className="video-button-wrapper " >
                
                <div className="video-button ">
                  <Img
                    src={"/images/play.svg"}
                    alt={"Play"}
                    className=" w-auto h-auto"
                     
                  />
           
                  
           <ReactPlayer width="200px" height="200px" url="/video1.mp4" controls={true}/>
                </div>
                
              </button>
            </div>
          </div>
        </div>
        <div className="video-banner-liners left">
          <Img
            src={"/images/who-uses-left.png"}
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
              <div className="flex justify-between md:w-[510px] claim-input-container md:px-[10px] md:py-[5px] p-[8px]">
                <input
                  className="claim-input md:flex-1 md:w-auto w-[190px]   md:p-[16px] p-[8px] bg-transparent"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  label="Sign me up"
                  onClick={() => console.log(email)}
                  color="primary"
                  className=" font-medium md:text-[16px] md:w-[150px] text-[10px] md:leading-[21px] "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-[150px] mt-[50px]">
          <div>
            <h3 className=" flex justify-center md:text-[44px] font-bold md:leading-[74.27px] text-bannerHeading text-[31px] leading-[55px]">
              Enjoy our Blogs
            </h3>
            <p className="text-center md:text-[15px]  md:leading-[24px] text-[#363848] md:w-[490px] w-[300px] m-auto text-[12px] leading-[18.41px]">
              We will give you industry tips, discuss booming industries, and
              talk shop about the job market today.
            </p>
          </div>
          <div className=" flex md:flex-row flex-col md:justify-normal items-center    md:mx-[28px]   md:gap-[70px]  md:mt-[70px] mt-[60px] md:space-y-0 space-y-14      md:mb-[160px] mb-[100px] ">
            <BlogCards
              img="/images/card11.png"
              title="How to build strong
portfolio and get a Job
in UI/UX"
              background="card-number-one"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
              className="  "
              url="1"
            />
            <BlogCards
              img="/images/card11.png"
              title="How to build strong
portfolio and get a Job
in UI/UX"
              background="card-number-one"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
              className="  "
              url="1"
            />
            <BlogCards
              img="/images/card11.png"
              title="How to build strong
portfolio and get a Job
in UI/UX"
              background="card-number-one"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
              className="  "
              url="1"
            />
          </div>
        </div>
      </div>
      {/* p- 40px  */}
      <div className="bg-[#263041] md:px-[45px] md:py-[7px] p-[21px] md:pt[] pt-[30px] ">
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
                  <SocialButton icon={"/images/icons/facebook.svg"} url={"#"} />
                </div>
                <div className="lg:pr-8 pr-4">
                  <SocialButton icon={"/images/icons/twitter.svg"} url={"#"} />
                </div>
                <div className="lg:pr-8 pr-4">
                  <SocialButton icon={"/images/icons/youtube.svg"} url={"#"} />
                </div>
                <div className="lg:pr-8 pr-4">
                  <SocialButton icon={"/images/icons/linkedIn.svg"} url={"#"} />
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
          <div className="md:p-[35px] p-[16px] md:mt-0 mt-[20px] flex-1 flex flex-col items-center lg:w-auto md:w-[70%] w-[100%]">
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
      <div>
        
      </div>
<div>
  
</div>
    </div>
  );
};

export default Home;
