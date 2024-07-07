import { useState } from "react";
import MenuSVGIcon from "../../assets/svg/MenuSVGIcon";
import SkillsSVGIcon from "../../assets/svg/SkillsSVGIcon";
import WorkSVGIcon from "../../assets/svg/WorkSVGIcon";
import EducationSVGIcon from "../../assets/svg/EducationSVGIcon";
import LibraryBookSVGIcon from "../../assets/svg/LibraryBookSVGIcon";
import { SideBarLink } from "./SideBarLink";
import MenuCloseSVGIcon from "../../assets/svg/MenuCloseSVGIcon";
import { SideBarProps } from "../types/SideBarProps";

const SideBar = ({ activeSection }: SideBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

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

      <SideBarLink
        href="#skills"
        isNavbarOpen={isOpen}
        isLinkActive={activeSection === "skills"}
        sectionID="skills-section"
        fill="#2C2C2C"
        width={28}
        info="Habilidades"
      >
        {SkillsSVGIcon}
      </SideBarLink>

      <SideBarLink
        href="#work"
        isNavbarOpen={isOpen}
        isLinkActive={activeSection === "work"}
        sectionID="work-section"
        fill="#2C2C2C"
        width={28}
        info="Trabalho"
      >
        {WorkSVGIcon}
      </SideBarLink>

      <SideBarLink
        href="#education"
        isNavbarOpen={isOpen}
        isLinkActive={activeSection === "education"}
        sectionID="education-section"
        fill="#2C2C2C"
        width={28}
        info="Formação"
      >
        {EducationSVGIcon}
      </SideBarLink>

      <SideBarLink
        href="#courses"
        isNavbarOpen={isOpen}
        isLinkActive={activeSection === "courses"}
        sectionID="courses-section"
        fill="#2C2C2C"
        width={28}
        info="Cursos"
      >
        {LibraryBookSVGIcon}
      </SideBarLink>
    </aside>
  );
};

export default SideBar;
