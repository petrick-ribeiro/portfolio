import { useState } from "react";
import MenuSVGIcon from "../../assets/svg/MenuSVGIcon";
import SkillsSVGIcon from "../../assets/svg/SkillsSVGIcon";
import WorkSVGIcon from "../../assets/svg/WorkSVGIcon";
import EducationSVGIcon from "../../assets/svg/EducationSVGIcon";
import LibraryBookSVGIcon from "../../assets/svg/LibraryBookSVGIcon";
import { SideBarLink } from "./SideBarLink";
import ProjectSVGIcon from "../../assets/svg/ProjectSVGIcon";
import MenuCloseSVGIcon from "../../assets/svg/MenuCloseSVGIcon";
import { SideBarProps } from "../types/SideBarProps";

const SideBar = ({ activeSection }: SideBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (sectionID: string) => {
    const section = document.getElementById(sectionID)
    if (sectionID) {
      section?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <aside className="h-full w-fit rounded-lg flex flex-col justify-start px-4 gap-6 bg-base shadow-lg">
      <button
        className={`${isOpen ? "hidden" : ""} p-2`}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <MenuSVGIcon width={28} />
      </button>

      <button
        className={`${isOpen ? "flex justify-end" : "hidden"} p-2`}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <MenuCloseSVGIcon width={28} />
      </button>

      <div className={`sidebar-button ${activeSection === "skills" ? "sidebar-button-activated" : ""}`} onClick={() => handleScroll("skills-section")}>
        <SideBarLink
          href="#skills"
          isNavbarOpen={isOpen}
          fill="#2C2C2C"
          width={28}
          info="Trabalho"
        >
          {SkillsSVGIcon}
        </SideBarLink>
      </div>

      <div className={`rounded-lg p-2 ${activeSection === "projects" ? "sidebar-button-activated" : ""}`} onClick={() => handleScroll("")}>
        <SideBarLink
          isNavbarOpen={isOpen}
          fill="#7c7f93"
          width={28}
          info="Projetos"
        >
          {ProjectSVGIcon}
        </SideBarLink>
      </div>

      <div className={`sidebar-button ${activeSection === "work" ? "sidebar-button-activated" : ""}`} onClick={() => handleScroll("work-section")}>
        <SideBarLink
          href="#work"
          isNavbarOpen={isOpen}
          fill="#2C2C2C"
          width={28}
          info="Trabalho"
        >
          {WorkSVGIcon}
        </SideBarLink>
      </div>

      <div className={`sidebar-button ${activeSection === "education" ? "sidebar-button-activated" : ""}`} onClick={() => handleScroll("education-section")}>
        <SideBarLink
          href="#education"
          isNavbarOpen={isOpen}
          fill="#2C2C2C"
          width={28}
          info="Formação"
        >
          {EducationSVGIcon}
        </SideBarLink>
      </div>

      <div className={`sidebar-button ${activeSection === "courses" ? "sidebar-button-activated" : ""}`} onClick={() => handleScroll("courses-section")}>
        <SideBarLink
          href="#courses"
          isNavbarOpen={isOpen}
          fill="#2C2C2C"
          width={28}
          info="Cursos"
        >
          {LibraryBookSVGIcon}
        </SideBarLink>
      </div>
    </aside>
  );
};

export default SideBar;
