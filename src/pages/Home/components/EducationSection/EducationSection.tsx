import EducationSVGIcon from "../../../../assets/svg/EducationSVGIcon";
import AboutLabel from "../../../../components/AboutLabel";
import Section from "../../../../components/Section";
import { educationList } from "../../../../services/jsonFormatExperienceList";
import { ExperienceType } from "../../../../types/ExperienceType";

const EducationSection = () => {
  return (
    <Section id="education-section" title="Formação Acadêmica">
      <div className="grid grid-cols-2 gap-4">
        {educationList.map((education: ExperienceType, index: number) => {
          return (
            <AboutLabel
              key={`education-${index}`}
              name={education.name}
              description={education.description}
              startDate={education.startDate}
              endDate={education.endDate}
            >
              <EducationSVGIcon fill="#2C2C2C" />
            </AboutLabel>
          );
        })}
      </div>
    </Section>
  );
};

export default EducationSection;
