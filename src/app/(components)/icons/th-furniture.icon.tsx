import clsx from "clsx";
import type { CSSProperties, FC } from "react";

type Props = {
  className?: string;
  style?: CSSProperties;
};

const THFurnitureLogo: FC<Props> = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 288 248"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={clsx(["w-full h-auto", className])}
      style={style}
    >
      <path d="M0 5.24536e-07H100V10H0V5.24536e-07Z" />
      <path d="M130 5.24536e-07H176V10H130V5.24536e-07Z" />
      <path d="M122 118H278V128H122V118Z" />
      <path d="M288 5.24536e-07V248H278V8.74228e-08L288 5.24536e-07Z" />
      <path d="M94 10L94 248H84L84 10L94 10Z" />
      <path d="M122 5.24536e-07L122 248H110L110 0L122 5.24536e-07Z" />
    </svg>
  );
};

export default THFurnitureLogo;