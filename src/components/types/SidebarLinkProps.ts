import { SVGIconProps } from "../../assets/svg/types/SVGIconProps";

export type SidebarLinkProps = {
  href?: string;
  children: React.ComponentType<SVGIconProps>;
  isNavbarOpen: boolean;
  isLinkActive: boolean;
  sectionID: string;
  width: number;
  fill: string;
  fillHover: string;
  info: string;
};
