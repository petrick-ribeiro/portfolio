import WorkSVGIcon from "../../../../assets/svg/WorkSVGIcon";
import AboutLabel from "../../../../components/AboutLabel";
import Section from "../../../../components/Section";
import { workExperienceList } from "../../../../services/jsonFormatExperienceList";
import { ExperienceType } from "../../../../types/ExperienceType";

const WorkSection = () => {
  return (
    <Section id="#work" title="Experiência de Trabalho">
      <div className="grid grid-cols-2 gap-4">
        {workExperienceList.map((work: ExperienceType, index: number) => {
          return (
            <AboutLabel
              key={`work-${index}`}
              name={work.name}
              description={work.description}
              startDate={work.startDate}
              endDate={work.endDate}
            >
              <WorkSVGIcon fill="#2C2C2C" />
            </AboutLabel>
          );
        })}
      </div>
    </Section>
  );
};

export default WorkSection;
