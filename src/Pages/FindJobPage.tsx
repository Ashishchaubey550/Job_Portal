import React from 'react'
import MultiInput from '../FindJobs/MultiInput'
import Jobs from '../FindJobs/Jobs'
import { Divider } from '@mantine/core'

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