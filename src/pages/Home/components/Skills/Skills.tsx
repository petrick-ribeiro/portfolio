import Section from "../../../../components/Section";
import SkillLabel from "../../../../components/SkillLabel";
import { jsonFormatDevSkills } from "../../../../services/jsonFormatSkillsList";
import { SkillType } from "../../../../types/SkillType";

const Skills = () => {
  return (
    <Section title="Skills">
      <div className="grid grid-cols-5">
        {jsonFormatDevSkills.map((skill: SkillType, index: number) => {
          return (
            <SkillLabel
              key={`skill-${index}`}
              skill={skill.name}
              width={54}
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

export default Skills;
