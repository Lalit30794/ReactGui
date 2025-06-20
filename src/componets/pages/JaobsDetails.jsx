import axios from "axios";
import { useLoaderData } from "react-router-dom";
export const JaobsDetails = () => {
  const jobsDetails = useLoaderData();
  return (
    <>
      <div className="container bg-blue-300 text-white text-center  mx-auto px-4 sm:px-6 lg:px-8">
        {jobsDetails && (
          <>
            <h2 className="text-3xl font-bold">{jobsDetails.title}</h2>
            <p className="text-xl">{jobsDetails.description}</p>
          </>
        )}
      </div>
    </>
  );
};

export default JaobsDetails;

export const JobsDetaisloader = ({ params }) => {
  return axios
    .get(`http://localhost:3001/jobs`)
    .then((res) => {
      console.info("Job Details", res.data.openings[params.id - 1]);
      const jobsDetails = res.data.openings[params.id - 1];
      return jobsDetails;
    })
    .catch((err) => {
      console.error(err);
    });
};
