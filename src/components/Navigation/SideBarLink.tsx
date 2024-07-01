import { SidebarLinkProps } from "../types/SidebarLinkProps";

export const SideBarLink = ({
  children: Icon,
  isVisible,
  width,
  fill,
  info,
}: SidebarLinkProps) => {
  return (
    <a href="#" className={`${isVisible ? "flex gap-2 items-center" : ""}`}>
      <Icon width={width} fill={fill} />

      <span className={`text-md text-center + ${isVisible ? "" : "hidden"}`}>
        {info}
      </span>
    </a>
  );
};
