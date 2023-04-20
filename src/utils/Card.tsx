import React from 'react';

interface CardInterface {
    number: number;
    background: string;
    title: string;
    description: string;
    className?: string;
}

export const Card: React.FC<CardInterface> = ({ number, title, description, background, className }) => {
    return (
        <div className={`card flex px-[11px] py-[8px] ${className}`}>
            <div
                className={`card-number ${background} flex items-center md:text-[19.42px] md:leading-[29.12px] text-[15px] leading-[22.5px] font-semibold text-[#fff] md:px-[18px] md:py-[8px] p-[8px] md:w-[44.78px] md:h-[45.3px] w-[22px] h-[22px]`}>
                {number}
            </div>
            <div className="flex-1 md:pl-[18px] pl-[5px]">
                <h3
                    className="md:text-[17.88px] md:leading-[24.12px] text-[12px] leading-[15px] font-semibold text-[#363848] pb-[3px]"
                >
                    {title}
                </h3>
                <p className="md:text-[11px] md:leading-[18px] text-[7.5px] leading-[11.25px] text-[#6D6D6D]">
                    {description}
                </p>
            </div>
        </div>
    )
}