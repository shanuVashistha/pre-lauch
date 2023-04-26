import React from "react";
import { Img } from "@/utils/Img";
import { BlogInterface ,BlogBodyInterface} from "@/utils/types";

const Data = {
  id: "1",
  slug: "first",
  title: " Top 5 In-Demand Skills Employers Want in 2023",
  subTitle: "",
  description: " Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam placerat tortor commodo lectus laoreet venenatis. Donec ultricies, metus vitae bibendum consequat, tortor neque euismod lectus",
  img:"/bloglogo.svg",
  body: {
    title: "Lorem Ipsum is that it has a more-or-less normal",
    description: "body 1 description",
    content: [" qwerty", "pan", "new data"],
    list: [
      {
        title: "1",
        description: "1 des",
        content: [" list content", "list content 2"],
      },
      {
        title: "2",
        description: "2 des",
        content: [" 2list content", "2list content 2"],
      },
      {
        title: "3",
        description: "3 des",
        content: [" 3list content", "3list content 2"],
      },
    ],
  },
};

const Blog = ({ props }: any) => {
  console.log("Data :", Data);

  return (
    
      <div>
        <div>
      <Img className=" md:w-[105px] md:h-[64px] w-[73.93px] h-[45px]" src="/images/logo.png" alt=""/>
        </div>

        <h3 className=" flex justify-center md:text-[37px] md:pt-[105px] pt-[35px] font-semibold md:leading-[74.27px] text-bannerHeading text-[13px] leading-[40px] tracking-normal">
          {Data.title}
        </h3>
        <p className="flex md:text-center text-start md:pt-[15px] pt-[7px] md:text-[18px] font-normal md:leading-[26px] text-[#77838F] md:w-[790px] w-[290px] m-auto text-[12px] leading-[12.41px]">
          {Data.description}
        </p>
        <h3 className="md:text-[28px] text-[15px] md:mt-[35px] font-semibold  text-bannerHeading md:mx-[185px] mx-[47px]">
          {Data.subTitle}
        </h3>
        <div className="flex justify-center md:pt-[60px] pt-[25px]">
      <Img
       src={Data.img}
       alt="ll "
       className="md:w-auto w-[300px] md:h-auto h-[190px]"/>
        </div>
          <div>

          </div>
            <div>
             
          {/* <BlogBodyInterface/> */}
        
              
            </div>
      </div>
  );
};
export default Blog;
