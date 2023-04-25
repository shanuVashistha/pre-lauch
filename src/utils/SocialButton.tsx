import React from "react";
import { Img } from "./Img";


interface SocialButtonInterface {
  icon: string;
  url: string;
  className?: string;
  target?: string;
}

export const SocialButton: React.FC<SocialButtonInterface> = ({
  icon,
  url,
  className,
  target,
}: SocialButtonInterface) => {
  return (
    <a
      href={url}
      target={target || "_blank"}
      className="social-button lg:w-[40px] w-[33px] lg:h-[40px]"
    >
      <Img src={icon} alt={"Social Icon"} className={className} />
    </a>
  );
};
