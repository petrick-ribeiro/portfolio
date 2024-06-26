import { SVGIconProps } from "./types/SVGIconProps";

const EducationSVGIcon = (props: SVGIconProps) => {
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
        d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"
      />
    </svg>
  );
};

export default EducationSVGIcon;
