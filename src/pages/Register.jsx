import { useState, useEffect } from "react";
import { Logo } from "../Components/index";
import Wrapper from "../assets/wrappers/RegisterPage";
import FormRow from "../Components/FormRow";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState)
  //Global state and useNavigate

  const handleChange = (e) => {
    console.log(e.target);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
  }

  return (
    <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
            <Logo/>
            <h3>Login</h3>
            {/* Name field */}
            <div className="form-row">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" id="name" className="form-input"  value={values.name} onChange={handleChange}/>
            </div>
            <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange}/>
            <FormRow type={'password'} name={'password'} value={values.password} handleChange={handleChange}/>
            <button className="btn btn-block" type="submit">submit</button> 
        </form>
    </Wrapper>
  );
};

export default Register;



