import { SVGIconProps } from "../../assets/svg/types/SVGIconProps";

export type SidebarLinkProps = {
  children: React.ComponentType<SVGIconProps>;
  isVisible: boolean;
  width: number;
  fill: string;
  info: string;
};
