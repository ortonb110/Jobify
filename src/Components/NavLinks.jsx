import links from "../Utils/Links"
import { NavLink } from "react-router-dom";
const NavLinks = ({toggleSidebar}) => {
    
  return (
    <div className="nav-links">
        {
            links.map((link)=> {
                const {text, id, icon, path} = link;
                return (
                    <NavLink to={path} key={id} onClick={toggleSidebar} className={({isActive}) => isActive? 'nav-link active' : 'nav-link'}>
                        <span className="icon">{icon}</span>
                        {text}
                    </NavLink>
                )
            })
        }
    </div>
  )
}

export default NavLinks