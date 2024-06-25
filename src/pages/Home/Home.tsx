import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import HomeCard from "./HomeCard";

const Home = () => {
  return (
    <div className="grid min-h-screen grid-cols-[0_1fr] grid-rows-[98px_1fr] xl:grid-cols-[auto_1fr]">
      {/* <div className="sticky top-0 col-span-full row-start-1 grid grid-cols-2 grid-rows-2 items-center"> */}
      <Header />
      {/* </div> */}

      <main className="col-start-0 col-end-3 row-start-2 grid grid-cols-4 sm:grid-cols-8 xl:grid-cols-12">
        <div className="col-span-full grid grid-cols-[repeat(11,1fr)] grid-rows-[1fr]">
          <div className="col-start-1 col-end-5 flex justify-center bg-green-500">
            <HomeCard />
          </div>

          {/* <div className="col-start-5 col-end-10 overflow-y-scroll bg-white"> */}
          {/*   <div className="flex h-[500px] items-center justify-center bg-orange-400"> */}
          {/*   </div> */}
          {/* </div> */}

          <div className="col-start-5 col-end-11 flex justify-center text-blac">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
