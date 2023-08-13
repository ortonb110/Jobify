import { useAppContext } from "../context/appContext";
import { useState } from "react";
import BarChartComponent from "./BarChart";
import AreaChartComponent from "./AreaChart";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(false);
  const { monthlyApplications: data } = useAppContext();
  return (
    <Wrapper>
      <h1>Monthly applications</h1>
      <button type="button" onClick={()=> {setBarChart(!barChart)}}>
        {barChart? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChartComponent data={data} /> : <AreaChartComponent data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
