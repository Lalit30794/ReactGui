import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

export const Jobs = () => {
  const data = useLoaderData();
  console.info("TEST", data);

  return (
    <>
      <div className="w-[90%] h-[80vh]   mx-auto  px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-4 text-left">Projects</h1>
        <h6 className="text-2xl text-blue-300 mb-4 text-left">
          Best looks for you Web art works
        </h6>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {data.openings.map((job) => (
            <div
              key={job.id}
              className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition duration-300 ease-in-out"
            >
              <Link to={`/jobs/${job.id}`}>
                <img
                  src={
                    job.image ||
                    "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80"
                  }
                  alt={job.title}
                  className="h-40 w-full object-cover"
                />
              </Link>
              <div className="p-[10px]">
                <Link to={`/jobs/${job.id}`}>
                  <h2 className="text-lg font-semibold mb-2 text-gray-800">
                    {job.title}
                  </h2>
                </Link>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {job.description}
                </p>
                <div className="mt-auto">
                  <Link
                    to={`/jobs/${job.id}`}
                    className="inline-block text-sm font-semibold text-center bg-black text-white p-[5px] rounded hover:bg-blue-300 transition"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;

export const Jobsloader = () => {
  return axios
    .get("http://localhost:3001/jobs")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};
