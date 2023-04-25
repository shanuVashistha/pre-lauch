import React from "react";
import { Img } from "@/utils/Img";
interface CardBlog {
  img?: string;
  background: string;
  title: string;
  description: string;
  className?: string;
  url: string;
 
}
export const BlogCards: React.FC<CardBlog> = ({
  img,
  title,
  description,
  background,
  className,
  url,

}) => {
  return (
    <div className={` md:rounded-3xl rounded-lg md:bg-slate-100 bg-slate-100 md:shadow-lg shadow-lg flex px-[0px] py-[0px] md:w-[360px] w-[245px] md:h-[524px] h-[375px]     ${className}`}>
      <div className="  rounded-3xl flex-1 md:pl-[0px] pl-[0px ]   ">
      <Img
                src={img || ""}
                alt="Avatar "
                className=" md:rounded-t-3xl rounded-t-2xl md:w-[360px] w-[245px] md:h-[250px] h-[180px]"
              />
        <h3 className="  md:my-[12px] my-[15px]  md:pl-[17px] pl-[7px] md:mx-[20px] mx-[7px] md:text-[20.88px] md:leading-[37.12px] text-[15px] md:mr-[] mr-[20px] leading-[25px] font-bold text-[#363848]">
          {title}
        </h3>
        <p className="  md:mx-[20px] mx-[7px] md:pl-[17px] pl-[5px] md:text-[16px] md:mt-3 md:leading-[18px] text-[12.5px] leading-[14.25px] text-[#6D6D6D]">
          {description}
        </p>
        <a
      href={url}
     
      className="flex  md:-my-[5px] -my-[24px] md:mr-[30px] mr-[15px] justify-end pt-[40px] md:text-[16px] text-[12px] font-semibold text-[#6D6D6D]"
    > Read more ...</a>
       
       </div>
    </div>
  );
};
