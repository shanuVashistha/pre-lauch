import React from "react";
import { Img } from "@/utils/Img";
interface CardBlog {
  img?: string;
  background: string;
  title: string;
  description: string;
  className?: string;
 
}
export const BlogCards: React.FC<CardBlog> = ({
  img,
  title,
  description,
  background,
  className,

}) => {
  return (
    <div className={`card flex px-[0px] py-[0px] md:w-[360px] w-[120px] md:h-[524px] h-[270px] rounded-3xl  ${className}`}>
      <div className="flex-1 md:pl-[0px] pl-[0px ] rounded-3xl ">
      <Img
                src={img || ""}
                alt="Avatar "
                className=" rounded-t-lg md:w-[360px] w-[120px] md:h-[250px] h-[120px]"
              />
        <h3 className="  md:my-[12px] md:mx-[44px] md:text-[18.88px] md:leading-[37.12px] text-[12px] leading-[15px] font-semibold text-[#363848]">
          {title}
        </h3>
        <p className="  md:mx-[44px] md:text-[16px] md:mt-3 md:leading-[18px] text-[9.5px] leading-[11.25px] text-[#6D6D6D]">
          {description}
        </p>
      </div>
    </div>
  );
};
