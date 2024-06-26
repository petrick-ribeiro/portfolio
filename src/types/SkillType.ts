import { ComponentType } from "react";
import { SVGIconProps } from "../assets/svg/types/SVGIconProps";

export type SkillType = {
  name: string;
  icon: ComponentType<SVGIconProps>;
};
