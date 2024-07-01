import { useEffect } from "react";
import { StatsContainer, Loading,  ChartContainer } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobSlice";
const Stats = () => {
  const {isLoading,monthlyApplications,} = useSelector(store=>store.allJobs);
  console.log(monthlyApplications)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);
  return <>
  <StatsContainer/>
  {monthlyApplications.length > 0 &&  <ChartContainer/>}
  </>
};

export default Stats;
