import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Img } from "@/utils/Img";
import { Button } from "@/utils/Button";
import { SocialButton } from "@/utils/SocialButton";
import { Input,TextArea } from "@/utils/Input";
// import { info} from "@/utils/Info";

export default function Blog() {
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  return (
    <div>
      <Link href="/Blog"></Link>
      <div className=" md:mx-[50px] mx-[30px] md:my-[35px] my-[18px]">
        <Img
          src={"/images/logo.png"}
          alt={"logo"}
          className=" md:w-[105px] md:h-[64px] w-[73.93px] h-[45px]"
        />
      </div>
      <div>
        <h3 className=" flex justify-center md:text-[37px] md:pt-[105px] pt-[35px] font-semibold md:leading-[74.27px] text-bannerHeading text-[13px] leading-[40px] tracking-normal">
          Top 5 In-Demand Skills Employers Want in 2023
        </h3>
        <div>
          <p className="flex md:text-center text-start md:pt-[15px] pt-[7px] md:text-[18px] font-normal md:leading-[26px] text-[#77838F] md:w-[790px] w-[290px] m-auto text-[12px] leading-[12.41px]">
          
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Etiam placerat tortor commodo lectus laoreet
            venenatis. Donec ultricies, metus vitae bibendum consequat, tortor
            neque euismod lectus
          </p>
          <div className="flex justify-center md:pt-[60px] pt-[25px]">
            <Img
              src={"/bloglogo.svg"}
              alt={"logo"}
              className=" md:w-auto w-[300px] md:h-auto h-[190px]  "
            />
          </div>
        </div>
      </div>
      <div>
        <div className=" box-border border-2 md:mt-[20px] mt-[5px] md:mx-[185px] mx-[47px]  md:h-[50px] h-[20px] md:w-[980px] w-[300px]">
          <Img src="" alt="Avatar " />
        </div>
      </div>
      <div>
        <h3 className="md:text-[28px] text-[15px] md:mt-[35px] font-semibold  text-bannerHeading md:mx-[185px] mx-[47px]">
          Lorem Ipsum is that it has a more-or-less normal
        </h3>
      </div>
      <div>
        <p className="md:mx-[185px] mx-[47px] md:pt-[15px] pt-[7px] md:text-[18px]  font-normal md:leading-[26px] text-[#77838F]  text-[12px] leading-[12.41px]">
          In lacinia sapien a libero accumsan facilisis. Donec vitae lorem
          massa. Aliquam tristique vehicula enim ut luctus. Vivamus gravida
          dignissim ligula, dictum laoreet elit malesuada ac. Praesent est
          justo, posuere a nisl porta, pharetra posuere lectus. Nulla velit
          odio, tincidunt vel metus a, viverra placerat ligula.
        </p>
        <p className="md:mx-[185px] mx-[47px] md:my[11px] my-[6px] md:pt-[15px] pt-[7px] md:text-[18px] font-normal md:leading-[26px] text-[#77838F]  text-[12px] leading-[12.41px]">
          Donec id nisl et risus volutpat tempor a eget mauris. Nullam velit
          eros, porttitor et urna sit amet, ullamcorper vestibulum magna.
          Quisque consequat arcu eros, lobortis faucibus purus facilisis vitae.
          Nulla at nunc non purus vehicula elementum.
        </p>
      </div>
      <div>
        <h3 className="md:text-[28px] text-[15px] md:mt-[35px] font-semibold  text-bannerHeading md:mx-[185px] mx-[47px]">
          Heading for subtopic
        </h3>
        <ul className=" list-disc">
          <li className=" md:mx-[195px] mx-[47px] md:my[11px] my-[6px] md:pt-[15px] pt-[7px] md:text-[17px] font-normal md:leading-[26px] text-[#77838F]  text-[12px] leading-[12.41px]">
            Morbi pellentesque finibus libero, in blandit lorem eleifend eget.
            Praesent egestas hendrerit augue a vestibulum. Nullam fringilla,
            eros malesuada eleifend placerat, lacus tellus egestas erat, nec
            varius sem lorem ut mauris. Morbi libero felis.
          </li>
          <li className="md:mx-[195px] mx-[47px] md:my[11px] my-[6px] md:pt-[15px] pt-[7px] md:text-[17px] font-normal md:leading-[26px] text-[#77838F]  text-[12px] leading-[12.41px]">
            Cras eget dolor accumsan, blandit risus vitae, faucibus erat.
            Aliquam scelerisque, diam ut feugiat scelerisque, diam felis
            venenatis purus, eget cursus enim turpis at sem. Fusce nec tristique
            dolor, sit amet tristique purus.
          </li >
          <li className="md:mx-[195px] mx-[47px] md:my[11px] my-[6px] md:pt-[15px] pt-[7px] md:text-[17px] font-normal md:leading-[26px] text-[#77838F]  text-[12px] leading-[12.41px]">
            Morbi pellentesque finibus libero, in blandit lorem eleifend eget.
            Praesent egestas hendrerit augue a vestibulum. Nullam fringilla,
            eros malesuada eleifend placerat, lacus tellus egestas erat, nec
            varius sem lorem ut mauris. Morbi libero felis.
          </li>
          <li className="md:mx-[195px] mx-[47px] md:my[11px] my-[6px] md:pt-[15px] pt-[7px] md:text-[17px] font-normal md:leading-[26px] text-[#77838F]  text-[12px] leading-[12.41px]">
            Cras eget dolor accumsan, blandit risus vitae, faucibus erat.
            Aliquam scelerisque, diam ut feugiat scelerisque, diam felis
            venenatis purus, eget cursus enim turpis at sem. Fusce nec tristique
            dolor, sit amet tristique purus.
          </li>
        </ul>
      </div>
      <div>
      <div>
        <h3 className="md:text-[28px] text-[15px] md:mt-[35px] font-semibold  text-bannerHeading md:mx-[185px] mx-[47px]">
          Heading for subtopic
        </h3>
        <ul className=" list-disc mb-[220px]">
          <li className=" md:mx-[195px] mx-[47px] md:my[11px] my-[6px] md:pt-[15px] pt-[7px] md:text-[17px] font-normal md:leading-[26px] text-[#77838F]  text-[12px] leading-[12.41px]">
            Morbi pellentesque finibus libero, in blandit lorem eleifend eget.
            Praesent egestas hendrerit augue a vestibulum. Nullam fringilla,
            eros malesuada eleifend placerat, lacus tellus egestas erat, nec
            varius sem lorem ut mauris. Morbi libero felis.
          </li>
          <li className="md:mx-[195px] mx-[47px] md:my[11px] my-[6px] md:pt-[15px] pt-[7px] md:text-[17px] font-normal md:leading-[26px] text-[#77838F]  text-[12px] leading-[12.41px]">
            Cras eget dolor accumsan, blandit risus vitae, faucibus erat.
            Aliquam scelerisque, diam ut feugiat scelerisque, diam felis
            venenatis purus, eget cursus enim turpis at sem. Fusce nec tristique
            dolor, sit amet tristique purus.
          </li >
          <li className="md:mx-[195px] mx-[47px] md:my[11px] my-[6px] md:pt-[15px] pt-[7px] md:text-[17px] font-normal md:leading-[26px] text-[#77838F]  text-[12px] leading-[12.41px]">
            Morbi pellentesque finibus libero, in blandit lorem eleifend eget.
            Praesent egestas hendrerit augue a vestibulum. Nullam fringilla,
            eros malesuada eleifend placerat, lacus tellus egestas erat, nec
            varius sem lorem ut mauris. Morbi libero felis.
          </li>
          <li className="md:mx-[195px] mx-[47px] md:my[11px] my-[6px] md:pt-[15px] pt-[7px] md:text-[17px] font-normal md:leading-[26px] text-[#77838F]  text-[12px] leading-[12.41px]">
            Cras eget dolor accumsan, blandit risus vitae, faucibus erat.
            Aliquam scelerisque, diam ut feugiat scelerisque, diam felis
            venenatis purus, eget cursus enim turpis at sem. Fusce nec tristique
            dolor, sit amet tristique purus.
          </li>
        </ul>
      </div>
      </div>
      <div className="bg-[#263041] md:px-[45px] md:py-[7px] p-[18px]">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="md:p-[35px] lg:flex-1 w-[100%] flex lg:flex-col md:items-start items-center">
            <div className="lg:pb-[42px]">
              <Img
                src={"/images/logo-white.svg"}
                alt={"Footer Logo"}
                className="md:w-[91px] w-[70.6px]"
              />
            </div>
            <div className="lg:flex-auto flex-1 flex flex-col lg:items-start items-end">
              <h3 className="md:text-[25px] md:leading-[40.5px] text-[12px] leading-[10.6px] font-semibold text-[#FFFFFF] pb-[16px]">
                Social Media
              </h3>
              <div className="flex items-center">
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
            <div className="mb-[24px] w-[100%]">
              <Input
                type={"text"}
                placeholder={"Enter Your Email"}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mb-[40px] w-[100%]">
              <TextArea
                placeholder={"Enter Your Message"}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="pb-0"
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

    </div>
  );
}