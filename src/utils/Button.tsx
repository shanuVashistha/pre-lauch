import React from "react";

interface ButtonInterface {
  label: string;
  onClick: () => any;
  handlePlay?:any;
  handlePause?:any;
  className?: string;
  color?: string;
}

export const Button: React.FC<ButtonInterface> = ({
  label,
  onClick,
  handlePlay,
  handlePause,
  className,
  color,
}) => {
  return (
    <button
     onPlay={handlePlay}
     onPause={handlePause}
      onClick={onClick}
      className={`button ${className} ${color} md:py-[13px] md:[px-22px] p-[12px]`}
    >
      {label}
    </button>
  );
};
