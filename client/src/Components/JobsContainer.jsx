import { useAppContext } from "../context/appContext"
import { useEffect } from "react"
import Wrapper from "../assets/wrappers/JobsContainer"
import Loading from "./Loading"

const JobsContainer = () => {
    const {getJob, jobs, isLoading, page, totalJobs} = useAppContext();


    useEffect(()=> {
        getJob();
    }, [])

  return (
    <Wrapper>
        {
            isLoading && <Loading/>
        }
    </Wrapper>
  )
}

export default JobsContainer