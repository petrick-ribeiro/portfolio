import { SidebarLinkProps } from "../types/SidebarLinkProps";

const handleScroll = (sectionID: string) => {
  const section = document.getElementById(sectionID);
  if (sectionID) {
    section?.scrollIntoView({ behavior: "smooth" });
  }
};

export const SideBarLink = ({
  href,
  children: Icon,
  isLinkActive,
  sectionID,
  width,
  fill,
  fillHover,
}: SidebarLinkProps) => {
  return (
    <a
      href={href}
      className={`sidebar-button
        ${isLinkActive ? " sidebar-button-activated" : ""}`}
      onClick={() => handleScroll(sectionID)}
    >
      <Icon width={width} fill={isLinkActive ? fillHover : fill} />
    </a>
  );
};
