import { SidebarLinkProps } from "../types/SidebarLinkProps";

export const SideBarLink = ({
  href,
  children: Icon,
  isNavbarOpen,
  width,
  fill,
  info,
}: SidebarLinkProps) => {
  return (
    <a href={href} className={`${isNavbarOpen ? "flex gap-2 items-center" : ""}`}>
      <Icon width={width} fill={fill} />

      <span className={`text-md text-center + ${isNavbarOpen ? "" : "hidden"}`}>
        {info}
      </span>
    </a>
  );
};
