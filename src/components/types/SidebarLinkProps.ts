import { SVGIconProps } from "../../assets/svg/types/SVGIconProps";

export type SidebarLinkProps = {
  href?: string
  children: React.ComponentType<SVGIconProps>;
  isNavbarOpen: boolean;
  width: number;
  fill: string;
  info: string;
};
