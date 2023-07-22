import { useState } from "react"
import {FormRow, Alert} from '../../Components/index'
import { useAppContext } from "../../context/appContext"
import Wrapper from "../../assets/wrappers/DashboardFormPage"
const Profile = () => {
  const {user, showAlert, displayAlert, updateUser, isLoading} = useAppContext()
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [location, setLocation] = useState(user?.location)
  const [lastName, setLastName] = useState(user?.lastName)
  return (
    <div>Profile</div>
  )
}

export default Profile