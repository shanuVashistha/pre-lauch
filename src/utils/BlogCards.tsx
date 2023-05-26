import React from "react";
import {Img} from "@/utils/Img";
import Link from "next/link";
import {Skeleton} from "@mui/material";

interface CardBlog {
    img: string;
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
            className={`rounded-[20px] bg-white overflow-hidden flex flex-col md:h-full ${className}`}
            style={{
                boxShadow: '0px 20px 50px rgba(18, 17, 39, 0.08)'
            }}
        >
            <div className="relative">
                {
                    !img ? <Skeleton
                        variant="rectangular"
                        className="p-[12px]"
                        height={250}
                    /> : <div>
                        <Link href={`/blog/${url}`}>
                            <Img
                                src={img || ""}
                                alt="Avatar"
                                className="w-full h-[250px] object-cover"
                            />
                        </Link>
                    </div>
                }
                <div
                    className="absolute top-[21px] left-[31px] hidden rounded-[20px] px-[10px] xxl:text-[16px] md:text-[14px] leading-[28px] text-[white] font-medium"
                    style={{background: "rgba(237, 232, 254, 0.2)"}}
                >
                    Article
                </div>
            </div>
            <div className="flex-1 flex flex-col items-stretch p-[16px] xxl:pb-[16px] pb-[8px] mt-[5px]">
                {
                    !title ? <Skeleton
                            variant="rectangular"
                            className="p-[12px] mb-[10px]"
                            height={50}
                        /> :
                        <h3 className="line-clamp-3 font-semibold xl:text-[17px] md:text-[17px] text-[16px] leading-[32px] text-dark xxl:mb-[24px] mb-[18px]">
                            {title}
                        </h3>
                }
                {
                    !description ? <Skeleton
                            variant="rectangular"
                            className="p-[12px]"
                            height={80}
                        /> :
                        <p className="line-clamp-3 font-normal xxl:text-[16px] md:text-[14px] text-[12px] xxl:leading-[28px] md:leading-[26px] leading-[24px] text-[#464646]">
                            {description}
                        </p>
                }
            </div>
            <div className="text-right p-[18px]">
                <Link
                    href={`/blog/${url}`}
                    className="text-[#382E53] xxl:text-[16px] md:text-[14px] text-[12px] leading-[29px] font-medium"
                >
                    {`Read more >>`}
                </Link>
            </div>
        </div>
    );
};
