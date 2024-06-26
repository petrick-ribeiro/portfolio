import { SVGIconProps } from "./types/SVGIconProps";

const LibraryBookSVGIcon = (props: SVGIconProps) => {
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
        d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80Zm-80 400q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"
      />
    </svg>
  );
};

export default LibraryBookSVGIcon;
