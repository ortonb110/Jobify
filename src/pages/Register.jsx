import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../Components/index";
import Wrapper from "../assets/wrappers/RegisterPage";


const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState)
  //Global state and useNavigate


  const toggleMember = () => {
    setValues({...values, isMember:!values.isMember})
  }

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
            <h3>{values.isMember? 'Login': 'Register'}</h3>
            {/* Alert Component goes here */}
            {
              values.showAlert && <Alert/>
            }
            {/* Name field */}
            {
              !values.isMember && (<FormRow type={'text'} name={'name'} value={values.name} handleChange={handleChange}/>)
            }
            {/* Email field */}
            <FormRow type={'email'} name={'email'} value={values.email} handleChange={handleChange}/>
            {/* Password field */}
            <FormRow type={'password'} name={'password'} value={values.password} handleChange={handleChange}/>
            <button className="btn btn-block" type="submit">submit</button> 
            <p>
              {values.isMember? 'Not a member yet?': 'Already a member?'}
              <button type="button" onClick={toggleMember} className="member-btn">{
                values.isMember? 'Register': 'Login'
              }</button>
            </p>
        </form>
    </Wrapper>
  );
};

export default Register;



