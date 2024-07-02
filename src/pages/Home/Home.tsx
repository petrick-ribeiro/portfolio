import SideBar from "../../components/Navigation/SideBar";
import CoursesSection from "./components/CoursesSection";
import EducationSection from "./components/EducationSection";
import HomeCard from "./components/HomeCard";
import SkillsSection from "./components/SkillsSection";
import WorkSection from "./components/WorkSection";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <div className="col-span-full grid grid-cols-[repeat(11,1fr)]">
        <div className="p-2 col-start-0 col-end-1">
          <SideBar />
        </div>

        <div className="col-span-full col-start-1 col-end-5 flex items-start justify-center rounded-lg py-20 bg-base shadow-lg">
          <HomeCard />
        </div>

        <div className="h-screen overflow-scroll overflow-x-hidden col-start-5 col-end-12 space-y-24 py-20 px-20 bg-base">
          <SkillsSection />

          <WorkSection />

          <EducationSection />

          <CoursesSection />
        </div>
      </div>
    </main>
  );
};

export default Home;
