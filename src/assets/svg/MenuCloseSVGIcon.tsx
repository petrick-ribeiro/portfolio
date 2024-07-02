import { SVGIconProps } from "./types/SVGIconProps";

const MenuCloseSVGIcon = (props: SVGIconProps) => {
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
        xmlns="http://www.w3.org/2000/svg"
        d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z"
      />
    </svg>
  );
};

export default MenuCloseSVGIcon;
