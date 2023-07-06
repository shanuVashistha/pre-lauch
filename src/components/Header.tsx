import React from "react";
import { Img } from "@/utils/Img";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
    const router = useRouter();
    return <div className="mx-auto max-w-[1242px] md:p-[24px] p-[15px] xl:pt-[33px]">
        <a onClick={() => router.push("/")} className="cursor-pointer">
            <Img
                src="/images/logo2.svg"
                alt="Logo"
                className="md:w-[109px] w-[70px] md:h-[66px] h-[44px]"
            />
        </a>
    </div>
}