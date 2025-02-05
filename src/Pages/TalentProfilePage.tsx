import { Button, Divider } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Profile from '../TalentProfilePage.tsx/Profile'
import RecomandedTalents from '../FindTalets.tsx/RecomandedTalents'

const TalentProfilePage=()=>{
  return (
    <div className=' bg-neutral-100 min-h-[98vh] p-4'>
        <Divider size="xs"/>
        <Link className='my-4 inline-block' to="/findtalend">
          <Button leftSection={<i className="ri-arrow-left-line text-xl"></i>} color="yellow.8" variant="light">Back</Button>
        </Link>
        <Divider size="xs"/>
        <div className='flex gap-5'>
            <Profile/>
            <RecomandedTalents/>
        </div>  
    </div>
  )
}

export default TalentProfilePage