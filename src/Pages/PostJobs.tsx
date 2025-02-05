import { Button, Divider } from '@mantine/core'
import Profile from '../TalentProfilePage.tsx/Profile'
import RecomandedTalents from '../FindTalets.tsx/RecomandedTalents'
import PostJob from '../PostJob/PostJob'

const PostJobs=()=>{
  return (
    <div className=' bg-neutral-100 min-h-[98vh] p-4'>
        <Divider size="xs"/>
        <PostJob/> 
    </div>
  )
}

export default PostJobs;