import React from "react";
import { useState } from "react";
import fs from 'fs';
import path from 'path';
import {
  BlogInterface,
  BlogBodyInterface,
  BlogListInterface,
} from "@/utils/types";
import { Img } from "@/utils/Img";
import { Button } from "@/utils/Button";
import { SocialButton } from "@/utils/SocialButton";
import { Input, TextArea } from "@/utils/Input";

export const BlogP: React.FC<BlogInterface> = (props) => {
 
  const { id, slug, title, subTitle, img, description, body } = props;
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
 

  return (
    <div key={id}>
      <div>
        <Img
          className=" md:w-[105px] md:mx-[95px] mx-[35px] md:my-[40px] my-[20px] md:h-[64px] w-[73.93px] h-[45px]"
          src="/images/logo.png"
          alt=""
        />
      </div>

      <h3 className=" flex justify-center md:px-[50px] md:text-[37px] md:pt-[105px] pt-[35px] font-semibold md:leading-[40.27px] text-bannerHeading text-[13px] leading-[20px] tracking-normal">
        {title}
      </h3>

       <h3 className="md:text-[28px] text-[15px] md:mt-[5px] font-semibold  text-bannerHeading md:mx-[195px] mx-[47px]">
        {subTitle}
      </h3>
      <div className="md:mx-[195px] mx-[47px]  md:pt-[15px] pt-[7px] md:text-[18px]  font-normal md:leading-[26px] text-[#77838F]  text-[12px] leading-[12.41px]">
        <ul>
          {description?.map((item, index) => (
            <li   key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
    
      <div className="flex justify-center md:pt-[60px] pt-[25px]">
        <Img
          src="/bloglogo.svg"
          alt="ll "
          className="md:w-auto w-[300px] md:h-auto h-[190px]"
        />
        {img}
      </div>

      <div>
        <h3 className="md:text-[28px] text-[15px] md:mt-[35px] font-semibold  text-bannerHeading md:mx-[195px] mx-[47px]">
          {body.title}
        </h3>

        <div className="md:mx-[195px] mx-[47px] md:pt-[5px] pt-[4px] md:text-[18px]  font-normal md:leading-[26px] text-[#77838F]  text-[12px] leading-[12.41px]">
          <ul>
            {body.description?.map((item, index) => (
              <li className="md:pt-3" key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:mx-[225px] mx-[47px] md:pt-[5px] pt-[4px] md:text-[18px]  font-normal md:leading-[26px] text-[#77838F]  text-[12px] leading-[12.41px]">
        <ul>
          {body.content?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-[240px]">
        <ul>
          {body.list?.map((item, index) => (
            <li key={index}>
              <h3 className="md:text-[28px] text-[15px] md:mt-[20px] font-semibold  text-bannerHeading md:mx-[195px] mx-[47px]">
                {item.title}
              </h3>
              <p className="md:mx-[195px] mx-[47px] md:pt-[15px] pt-[7px] md:text-[18px]  font-semibold md:leading-[26px] text-black  text-[12px] leading-[12.41px]">
                {item.subTitle}
              </p>
              <ul>
                {item.description?.map((listItem, index) => (
                  <li
                    key={index}
                    className="  md:mx-[195px] mx-[47px]  md:pt-[15px] pt-[7px] md:text-[17px] font-normal md:leading-[26px] text-[#77838F]  text-[12px] leading-[12.41px]"
                  >
                    {listItem}
                  </li>
                ))}
              </ul>
              <ul>
                {item.content?.map((listItem, index) => (
                  <li
                    key={index}
                    className=" list-disc md:mx-[225px] mx-[47px] md:my[11px] my-[6px]  md:text-[15px] font-normal md:leading-[26px] text-[#77838F]  text-[12px] leading-[12.41px]"
                  >
                    {listItem}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div>
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
                    <SocialButton
                      icon={"/images/icons/facebook.svg"}
                      url={"#"}
                    />
                  </div>
                  <div className="lg:pr-8 pr-4">
                    <SocialButton
                      icon={"/images/icons/twitter.svg"}
                      url={"#"}
                    />
                  </div>
                  <div className="lg:pr-8 pr-4">
                    <SocialButton
                      icon={"/images/icons/youtube.svg"}
                      url={"#"}
                    />
                  </div>
                  <div className="lg:pr-8 pr-4">
                    <SocialButton
                      icon={"/images/icons/linkedIn.svg"}
                      url={"#"}
                    />
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
        <div></div>
      </div>
    </div>
  );
};
