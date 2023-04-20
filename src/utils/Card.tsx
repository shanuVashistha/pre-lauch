import React from 'react';

interface CardInterface {
    number: number;
    background: string;
    title: string;
    description: string;
}

export const Card: React.FC<CardInterface> = ({ number, title, description, background }) => {
    return (
        <div className="card flex items-center px-[11px] py-[8px]">
            <div
                className={`card-number ${background} flex items-center text-[19.42px] leading-[29.12px] font-semibold text-[#fff] px-[18px] py-[8px]`}>
                {number}
            </div>
            <div className="flex-1 pl-[18px]">
                <h3
                    className="text-[17.88px] leading-[24.12px] font-semibold text-[#363848] pb-[3px]"
                >
                    {title}
                </h3>
                <p className="text-[11px] leading-[18px] text-[#6D6D6D]">
                    {description}
                </p>
            </div>
        </div>
    )
}