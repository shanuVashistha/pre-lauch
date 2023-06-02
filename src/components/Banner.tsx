import React, {FC} from 'react';
import {Img} from "@/utils/Img";

interface BannerInterface {
    image: string,
    title: string
}

export const Banner: FC<BannerInterface> = (props) => {
    const {image, title} = props;
    return <div
        className="mx-auto w-full max-w-[1340px] md:p-[24px] p-[15px] overflow-hidden rounded-[15px] relative"
    >
        <Img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
        />
        <div className="absolute left-0 top-0 right-0 bottom-0 w-full h-full flex items-center justify-center">
            <h1 className="font-bold text-[45px] leading-[68px] tracking-[0.003em] text-white">
                {title}
            </h1>
        </div>
    </div>
}