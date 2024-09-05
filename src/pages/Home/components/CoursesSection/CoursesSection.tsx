import Section from "../../../../components/Section";
import { courseList } from "../../../../services/jsonFormatCourseList";
import { CourseType } from "../../../../types/CourseType";
import AboutLabel from "../../../../components/AboutLabel";
import LibraryBookSVGIcon from "../../../../assets/svg/LibraryBookSVGIcon";

const CoursesSection = () => {
  return (
    <Section id="courses-section" title="Cursos / Certificações">
      <div className="grid grid-cols-2 gap-4">
        {courseList.map((course: CourseType, index: number) => {
          return (
            <AboutLabel
              key={`course-${index}`}
              name={course.name}
              description={course.description}
              endDate={course.endDate}
              link={course.link}
            >
              <LibraryBookSVGIcon fill="#4C2215" />
            </AboutLabel>
          );
        })}
      </div>
    </Section>
  );
};

export default CoursesSection;
