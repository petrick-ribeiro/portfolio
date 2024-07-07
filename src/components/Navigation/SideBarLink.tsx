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
  isNavbarOpen,
  isLinkActive,
  sectionID,
  width,
  fill,
  info,
}: SidebarLinkProps) => {
  return (
    <a
      href={href}
      className={`sidebar-button
        ${isNavbarOpen ? " flex gap-2 items-center" : ""}
        ${isLinkActive ? " sidebar-button-activated" : ""}`}
      onClick={() => handleScroll(sectionID)}
    >
      <Icon width={width} fill={fill} />

      <span
        className={`text-md text-center + ${isNavbarOpen ? "" : "hidden"} `}
      >
        {info}
      </span>
    </a>
  );
};
