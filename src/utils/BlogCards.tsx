import React from "react";
import { Img } from "@/utils/Img";
import Link from "next/link";

interface CardBlog {
    img?: string;
    title: string;
    description: string;
    className?: string;
    url: string;

}

export const BlogCards: React.FC<CardBlog> = (
    {
        img,
        title,
        description,
        className,
        url,

    }
) => {
    return (
        <div
            className={`rounded-[20px] bg-white overflow-hidden flex flex-col ${className}`}
            style={{
                boxShadow: '0px 20px 50px rgba(18, 17, 39, 0.08)'
            }}
        >
            <div className="relative">
                <Img
                    src={img || ""}
                    alt="Avatar"
                    className="w-full h-[250px] object-cover"
                />
                <div
                    className="absolute top-[21px] left-[31px] rounded-[20px] px-[10px] xxl:text-[16px] md:text-[14px] leading-[28px] text-[white] font-medium"
                    style={{ background: "rgba(237, 232, 254, 0.2)" }}
                >
                    Article
                </div>
            </div>
            <div className="flex-1 p-[16px] xxl:pb-[16px] pb-[8px] mt-[5px]">
                <h3 className="font-semibold xl:text-[17px] md:text-[17px] text-[16px] leading-[32px] text-dark xxl:mb-[24px] mb-[18px]">
                    {title}
                </h3>
                <p className="font-normal xxl:text-[16px] md:text-[14px] text-[12px] xxl:leading-[28px] md:leading-[26px] leading-[24px] text-[#464646]">
                    {description}
                </p>
            </div>
            <div className="text-right p-[18px]">
                <Link
                    href={`blog/${url}`}
                    className="text-[#382E53] xxl:text-[16px] md:text-[14px] text-[12px] leading-[29px] font-medium"
                >
                    {`Read more >>`}
                </Link>
            </div>
        </div>
    );
};
