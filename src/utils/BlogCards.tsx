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
    <div className={` card flex px-[0px] py-[0px] md:w-[360px] w-[130px] md:h-[524px] h-[280px]    ${className}`}>
      <div className="flex-1 md:pl-[0px] pl-[0px ] md:rounded-3xl  ">
      <Img
                src={img || ""}
                alt="Avatar "
                className=" md:rounded-t-3xl rounded-t-lg md:w-[360px] w-[120px] md:h-[250px] h-[90px]"
              />
        <h3 className="  md:my-[12px] my-[10px]  md:pl-[17px] pl-[5px] md:mx-[20px] md:text-[20.88px] md:leading-[37.12px] text-[11px] leading-[16px] font-bold text-[#363848]">
          {title}
        </h3>
        <p className="  md:mx-[20px] md:pl-[17px] pl-[5px] md:text-[16px] md:mt-3 md:leading-[18px] text-[9.5px] leading-[13.25px] text-[#6D6D6D]">
          {description}
        </p>
        <a
      href={url}
     
      className="flex  md:-my-[5px] -my-[24px] md:mr-[30px] mr-[8px] justify-end pt-[40px] md:text-[16px] text-[9px] font-semibold text-[#6D6D6D]"
    > Read more ...</a>
       
       </div>
    </div>
  );
};
