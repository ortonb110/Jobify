import { useState } from "react";
import { FormRow, Alert } from "../../Components/index";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [location, setLocation] = useState(user?.location);
  const [lastName, setLastName] = useState(user?.lastName);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !name || !location || !lastName) {
        displayAlert("Please provide all values");
        return;
    }
    updateUser({email, name, lastName, location});
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type={"text"}
            name="name"
            value={name}
            labelText={"name"}
            handleChange={(e) => {
              setName(e.target.value);
            }}
          />
          <FormRow
            type={"text"}
            name="lastName"
            value={lastName}
            labelText={"Last name"}
            handleChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <FormRow
            type={"email"}
            name="email"
            value={email}
            labelText={"email"}
            handleChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormRow
            type={"text"}
            name="location"
            value={location}
            labelText={"Location"}
            handleChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? "Please wait..." : "Save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
