import { Outlet } from "react-router-dom";
import { Jobs } from "../../pages/Jobs";

export const JobsLayout = () => {
  return (
    <>
      <div
        className="w-[90%] h-[80vh] 
      
      flex flex-col justify-center items-center text-left  mx-auto rounded-xl"
      >
        <Outlet />
      </div>
    </>
  );
};
