import { SVGIconProps } from "./types/SVGIconProps";

const AnsibleSVGIcon = (props: SVGIconProps) => {
  return (
    <svg
      className={props.className}
      width={props.width || "24"}
      height={props.height || props.height}
      transform={props.transform}
      viewBox={props.viewBox || "0 0 128 128"}
    >
      <path
        className="fill-current"
        fill={props.fill || "#1A1918"}
        d="M64 2C29.8 2 2 29.8 2 64s27.8 62 62 62 62-27.8 62-62S98.2 2 64 2zm25.4 92.8c-1.2 0-2.1-.5-3.4-1.5L54 67.5 43.3 94.3H34l27.1-65.1c.7-1.7 2.2-2.6 3.9-2.6 1.7 0 3.1.9 3.8 2.6l24.7 59.4c.3.7.4 1.4.4 1.8.1 2.6-2 4.4-4.5 4.4z"
      ></path>
      <path
        className="fill-current"
        fill="#1A1918"
        d="M65 39.9l16.1 39.6-24.3-19.1z"
      ></path>
    </svg>
  );
};
export default AnsibleSVGIcon;
