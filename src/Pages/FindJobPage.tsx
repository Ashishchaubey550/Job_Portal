import MultiInput from '../FindJobs/MultiInput'
import Jobs from '../FindJobs/Jobs'

const FindJobPage=()=>{
    return(
        <div>
        <div className=' bg-neutral-100 min-h-[98vh]'>
            <MultiInput/>
            <Jobs/>
        </div>
        </div>
    )
}

export default FindJobPage;