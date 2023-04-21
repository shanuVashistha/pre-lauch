import React from "react";
import Image from "next/image";

interface ImgInterface {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    id?: string;
}

export const Img: React.FC<ImgInterface> = ({ src, alt, width, height, className, id }) => {
    return (
        <Image
            id={id || ""}
            src={src}
            alt={alt || ""}
            width={width || 100}
            height={height || 100}
            className={className}
        />
    );
};
