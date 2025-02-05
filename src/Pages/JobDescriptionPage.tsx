import { Button, Divider } from '@mantine/core'
import { Link } from 'react-router-dom'


const JobDescriptionPage=()=>{
  return (
    <div className=' bg-neutral-100 min-h-[98vh] p-4'>
        <Divider size="xs"/>
        <Link className='my-4 inline-block' to="/findjobs">
          <Button leftSection={<i className="ri-arrow-left-line text-xl"></i>} color="teal.8" variant="light">Back</Button>
        </Link>
        <Divider size="xs"/>
        <div className='flex gap-5'>
        </div>  
    </div>
  )
}

export default JobDescriptionPage;