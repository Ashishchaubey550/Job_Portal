import secondData from "../Data/RecomandedTalentData";
import TalentCard from "./TalentCard"

function RecomandedTalents() {
  return (
    <div>
        <div className="text-xl font-semibold mb-5">Recomanded Talents</div>
        <div className=" gap-5 flex flex-col justify-center">
            {
                secondData.map((elem,index)=><TalentCard key={index} {...elem}/>)
            }
        </div>
    </div>
  )
}

export default RecomandedTalents;