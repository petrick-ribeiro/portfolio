import { SVGIconProps } from "./types/SVGIconProps";

const HyperlinkSVGIcon = (props: SVGIconProps) => {
  return (
    <svg
      className={props.className}
      width={props.width || "24"}
      height={props.height || props.height}
      transform={props.transform}
      viewBox={props.viewBox || "0 -960 960 960"}
    >
      <path
        className="fill-current"
        fill={props.fill || "#000"}
        d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"
      />
    </svg>
  );
};

export default HyperlinkSVGIcon;
