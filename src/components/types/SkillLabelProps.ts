import { ComponentType } from "react";
import { SVGIconProps } from "../../assets/svg/types/SVGIconProps";

export type SkillLabelProps = {
  skill: string;
  children: ComponentType<SVGIconProps>;
  width: number;
  fill: string;
};
