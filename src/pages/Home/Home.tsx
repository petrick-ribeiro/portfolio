import Header from "../../components/Header";
import CoursesSection from "./components/CoursesSection";
import EducationSection from "./components/EducationSection";
import HomeCard from "./components/HomeCard";
import Skills from "./components/SkillsSection";
import WorkSection from "./components/WorkSection";

const Home = () => {
  return (
    <div className="grid min-h-screen grid-cols-[0_1fr] grid-rows-[98px_1fr] xl:grid-cols-[auto_1fr]">
      <div className="col-span-full row-start-1 grid grid-cols-2 grid-rows-2 items-center">
        <Header />
      </div>

      <main className="col-start-0 col-end-3 row-start-2 grid grid-cols-4 sm:grid-cols-8 xl:grid-cols-12">
        <div className="col-span-full grid grid-cols-[repeat(11,1fr)] grid-rows-[1fr]">
          <div className="ml-40 col-start-1 col-end-5 flex justify-center bg-green-500">
            <HomeCard />
          </div>

          <div className="col-start-6 col-end-11 space-y-16 ">
            <Skills />

            <WorkSection />

            <EducationSection />

            <CoursesSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
