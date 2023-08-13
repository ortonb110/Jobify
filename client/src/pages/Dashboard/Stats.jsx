import {StatsContainer, ChartsContainer} from '../../Components/index'
import Loading from '../../Components/Loading'
import { useEffect, Fragment } from 'react'
import { useAppContext } from '../../context/appContext'


const Stats = () => {

  const {showStats, isLoading, monthlyApplications} = useAppContext();


  useEffect(()=> {
    showStats()
  }, [])

  if(isLoading){
    return <Loading center/>
  }
  return (
    <Fragment>
      <StatsContainer/>
      {monthlyApplications.length > 0 && <ChartsContainer/>}
    </Fragment>
  )
}

export default Stats