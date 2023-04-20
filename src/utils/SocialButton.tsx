import React from 'react'
import Image from "next/image";

interface SocialButtonInterface {
    icon: string
    url: string
    className?: string
    target?: string
}

export const SocialButton: React.FC<SocialButtonInterface> = ({ icon, url, className, target }) => {
    return (
        <a href={url} target={target || "_blank"} className="social-button lg:w-[40px] lg:h-[40px]">
            <Image src={icon} alt={"Social Icon"} className={className}/>
        </a>
    )
}