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
    <div className={`card flex px-[20px] py-[20px] ${className}`}>
      <div className="flex-1 md:pl-[20px] pl-[5px]">
      <Img
                src={img || ""}
                alt="Avatar "
                className=" rounded-lg"
              />
        <h3 className="md:text-[17.88px] md:leading-[30.12px] text-[12px] leading-[15px] font-semibold text-[#363848]">
          {title}
        </h3>
        <p className="md:text-[11px] md:leading-[18px] text-[7.5px] leading-[11.25px] text-[#6D6D6D]">
          {description}
        </p>
      </div>
    </div>
  );
};
