import StatItem from "./StatItem"
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrappers/StatsContainer"

const StatsContainer = () => {
  return (
    <Wrapper>
        <h1>Stats Container</h1>
        <StatItem/>
    </Wrapper>
  )
}

export default StatsContainer