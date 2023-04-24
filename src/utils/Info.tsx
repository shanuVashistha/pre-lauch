import React from "react";
import { Img } from "@/utils/Img";
interface CardBlog {
  img?: string;
  background: string;
  title: string;
  date:string;
  className?: string;
 
}
export const BlogInfo: React.FC<CardBlog> = ({
  img,
  title,

date,
  className,

}) => {
  return (
    <div className={`card flex px-[0px] py-[0px] ${className}`}>
      <div className="flex-1 md:pl-[0px] pl-[0px]">
      <Img
                src={img || ""}
                alt="Avatar "
                className=" rounded-lg"
              />
        <h3 className="md:text-[13.88px] md:leading-[30.12px] text-[12px] leading-[15px] font-semibold text-[#363848]">
          {title}
        </h3>
        
      </div>
    </div>
  );
};
