import jobcardData from "../Data/JobCardData";
import JobCard from "../FindJobs/JobCard";

function RecomandedJob() {
  return (
    <div>
        <div className="text-xl font-semibold mb-5">Recomanded Talents</div>
        <div className=" gap-5 flex flex-col justify-center">
            {
                jobcardData.map((elem,index)=>index<3 &&<JobCard key={index} {...elem}/>)
            }
        </div>
    </div>
  )
}

export default RecomandedJob;