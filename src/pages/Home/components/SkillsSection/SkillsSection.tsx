import Section from "../../../../components/Section";
import SkillLabel from "../../../../components/SkillLabel";
import { jsonFormatDevSkills } from "../../../../services/jsonFormatSkillsList";
import { SkillType } from "../../../../types/SkillType";

const SkillsSection = () => {
  return (
    <Section id="skills-section" title="Habilidades">
      <div className="grid grid-cols-4">
        {jsonFormatDevSkills.map((skill: SkillType, index: number) => {
          return (
            <SkillLabel
              key={`skill-${index}`}
              skill={skill.name}
              width={40}
              fill="#2C2C2C"
            >
              {skill.icon}
            </SkillLabel>
          );
        })}
      </div>
    </Section>
  );
};

export default SkillsSection;
