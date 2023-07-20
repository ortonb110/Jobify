import Wrapper from "../assets/wrappers/BigSidebar"
import NavLinks from "./NavLinks"
import { useAppContext } from "../context/appContext"
import Logo from "./Logo"
const BigSideBar = () => {
   const {showSidebar} = useAppContext()
  return (
    <Wrapper>
        <div className={showSidebar? 'sidebar-container ' :" sidebar-container show-sidebar"}>
          <div className="content">
            <header>
              <Logo/>
            </header>
            <NavLinks/>
          </div>
        </div>
    </Wrapper>
  )
}

export default BigSideBar