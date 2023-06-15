import {Logo} from '../Components/index'
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Testing";

export default function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            eaque deleniti dolor mollitia iure vel provident quod perspiciatis
            repellendus numquam, natus nulla recusandae ex eligendi tenetur
            dolores optio porro ab ipsa. Magni molestias vitae atque eum error
            nihil, debitis quisquam libero delectus sint distinctio nam modi
            deleniti ea officiis quis.
          </p>
          <button className="btn btn-hero" >Login/Register</button>
        </div>
        <img src={main} alt="Job Hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}
