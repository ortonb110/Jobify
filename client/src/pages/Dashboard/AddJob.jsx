import { FormRow, Alert } from "../../Components/index";
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
  } = useAppContext();

  const handleSubmit = (e)=> {
    e.preventDefault();
    if(!position || !company || !jobLocation) {
      displayAlert();
      return
    }

    console.log('Job created')
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
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
            handleChange={handleChange}
          />
          {/* Company */}
          <FormRow
            type={"text"}
            name="company"
            value={company}
            handleChange={handleChange}
          />
          {/* Location */}
          <FormRow
            type={"text"}
            name="jobLocation"
            labelText={"job location"}
            value={jobLocation}
            handleChange={handleChange}
          />
          {/* Job Type */}
          {/* Job Status */}
          <div className="btn-container">
            <button type="submit" className="btn btn-block submit-btn" onClick={handleSubmit}>
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
