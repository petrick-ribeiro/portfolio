import SkillsSVGIcon from "../../assets/svg/SkillsSVGIcon";
import WorkSVGIcon from "../../assets/svg/WorkSVGIcon";
import EducationSVGIcon from "../../assets/svg/EducationSVGIcon";
import LibraryBookSVGIcon from "../../assets/svg/LibraryBookSVGIcon";
import { SideBarLink } from "./SideBarLink";
import { SideBarProps } from "../types/SideBarProps";

const SideBar = ({ activeSection }: SideBarProps) => {
  const iconColor = "#4C2215";
  const iconColorHover = "#FDFEF6";

  return (
    <aside className="h-full w-fit rounded-lg flex flex-col justify-start p-4 gap-6 bg-base shadow-lg">
      <SideBarLink
        href="#skills"
        isLinkActive={activeSection === "skills"}
        sectionID="skills-section"
        fill={iconColor}
        fillHover={iconColorHover}
        width={28}
      >
        {SkillsSVGIcon}
      </SideBarLink>

      <SideBarLink
        href="#work"
        isLinkActive={activeSection === "work"}
        sectionID="work-section"
        fill={iconColor}
        fillHover={iconColorHover}
        width={28}
      >
        {WorkSVGIcon}
      </SideBarLink>

      <SideBarLink
        href="#education"
        isLinkActive={activeSection === "education"}
        sectionID="education-section"
        fill={iconColor}
        fillHover={iconColorHover}
        width={28}
      >
        {EducationSVGIcon}
      </SideBarLink>

      <SideBarLink
        href="#courses"
        isLinkActive={activeSection === "courses"}
        sectionID="courses-section"
        fill={iconColor}
        fillHover={iconColorHover}
        width={28}
      >
        {LibraryBookSVGIcon}
      </SideBarLink>
    </aside>
  );
};

export default SideBar;
