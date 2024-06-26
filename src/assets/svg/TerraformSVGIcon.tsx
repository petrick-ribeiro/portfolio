import { SVGIconProps } from "./types/SVGIconProps";

const TerraformSVGIcon = (props: SVGIconProps) => {
  return (
    <svg
      className={props.className}
      width={props.width || "24"}
      height={props.height || props.height}
      transform={props.transform}
      viewBox={props.viewBox || "0 0 128 128"}
    >
      <g
        className="fill-current"
        fill={props.fill || "#000"}
        fill-rule="evenodd"
      >
        <path d="M46.324 26.082L77.941 44.5v36.836L46.324 62.918zm0 0M81.41 44.5v36.836l31.633-18.418V26.082zm0 0M11.242 5.523V42.36L42.86 60.777V23.941zm0 0M77.941 85.375L46.324 66.957v36.824L77.941 122.2zm0 0"></path>
      </g>
    </svg>
  );
};

export default TerraformSVGIcon;
