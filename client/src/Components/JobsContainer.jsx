import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import Loading from "./Loading";
import {Job} from '../Components/index'
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const { getJob, jobs, isLoading, page, totalJobs, searchStatus, search, searchType, sort, numOfPages } = useAppContext();

  useEffect(() => {
    getJob();
  }, [searchStatus, search, searchType, sort]);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {
            jobs.map((job)=> {
                return <Job key={job._id} {...job}/>
            })
        }
      </div>
      {
        numOfPages > 1 && <PageBtnContainer/>
      }
    </Wrapper>
  );
};

export default JobsContainer;
