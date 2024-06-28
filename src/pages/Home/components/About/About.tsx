import EducationSVGIcon from "../../../../assets/svg/EducationSVGIcon";
import LibraryBookSVGIcon from "../../../../assets/svg/LibraryBookSVGIcon";
import WorkSVGIcon from "../../../../assets/svg/WorkSVGIcon";
import AboutLabel from "../../../../components/AboutLabel";
import Section from "../../../../components/Section";
import { courseList } from "../../../../services/jsonFormatCourseList";
import {
  educationList,
  workExperienceList,
} from "../../../../services/jsonFormatExperienceList";
import { CourseType } from "../../../../types/CourseType";
import { ExperienceType } from "../../../../types/ExperienceType";

export const About = () => {
  return (
    <div className="w-[500px] grid grid-cols-1 space-y-8">
      <Section title="Work Experience">
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
      </Section>

      <Section title="Education">
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
      </Section>

      <Section title="Courses">
        {courseList.map((course: CourseType, index: number) => {
          return (
            <AboutLabel
              key={`course-${index}`}
              name={course.name}
              description={course.description}
              endDate={course.endDate}
            >
              <LibraryBookSVGIcon fill="#2C2C2C" />
            </AboutLabel>
          );
        })}
      </Section>
    </div>
  );
};
