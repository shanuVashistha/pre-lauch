import React from "react";
import { Img } from "@/utils/Img";

export const Header: React.FC = () => {
    return <div className="mx-auto max-w-[1242px] md:p-[24px] p-[15px] xl:pt-[33px]">
        <Img
            src="/images/logo.svg"
            alt="Logo"
            className="md:w-[109px] w-[70px] md:h-[66px] h-[44px]"
        />
    </div>
}