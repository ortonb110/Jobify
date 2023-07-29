import { FormRow, Alert, FormRowSelect } from "../../Components/index";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppContext } from "../../context/appContext";

const AddJob = () => {
  const {
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    handleChange,
    clearValues, 
    isLoading,
    createJob
  } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      displayAlert();
      return;
    }
    
    if(isEditing) {
      return
    }

    createJob();
    
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({name, value})
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* Position */}
          <FormRow
            type={"text"}
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* Company */}
          <FormRow
            type={"text"}
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* Location */}
          <FormRow
            type={"text"}
            name="jobLocation"
            labelText={"job location"}
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* Job Status */}
          <FormRowSelect
            name={"status"}
            value={status}
            
            list={statusOptions}
          />
          {/* Job Type */}
          <FormRowSelect
            name={"jobType"}
            labelText={"job type"}
            value={jobType}
            
            list={jobTypeOptions}
          />

          {/* Btn Container */}
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled = {isLoading}
            >
              {
                isLoading? 'please wait...' : 'submit'
              }
            </button>
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={(e)=> {
                e.preventDefault()
                clearValues()
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
