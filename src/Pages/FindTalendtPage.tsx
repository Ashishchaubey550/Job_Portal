import { Divider } from '@mantine/core';
import React from 'react'
import Talents from '../FindTalets.tsx/Talents';

const FindJobPage=()=>{
    return(
        <div>
        <div className=' bg-neutral-100 min-h-[98vh]'>
            <Divider mx="xs" size="sx"/>
            <Talents/>
        </div>
        </div>
    )
}

export default FindJobPage;