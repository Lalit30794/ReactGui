import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
export const Projects = () => {
  const projectsList = useLoaderData();
  console.info(projectsList);

  return (
    <>
      <div className="grid sm:grid-cols-2 p-0  md:grid-cols-2 lg:grid-cols-4 gap-4 w-[100%] h-[100vh] flex flex-col justify-center items-center  mx-auto rounded-xl  ">
        <h6 className="text-2xl text-blue-300 mb-4 text-left scale-150/2 ">
          Projects Best looks for you Web art works
        </h6>
        {projectsList.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg mx-auto w-[200px] h-[200px] shadow hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition duration-300 ease-in-out"
          >
            <img src={`${project.image}`} alt="" />
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Projects;
export const projectLoader = () => {
  return axios
    .get("http://localhost:3001/projects")
    .then((res) => {
      console.info(res.data);
      return res.data;
    })
    .catch((err) => console.error(err));
};
