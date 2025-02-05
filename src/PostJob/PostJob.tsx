import fields from '../Data/JobPostData'
import { SelectCreatable } from './SelectableInput';

const PostJob=()=>{
    const select = fields;
  return (
    <div className=" capitalize w-4/5  mx-auto">
        <div className="text-2xl font-semibold">Post A job</div>
        <div>
            <div className='flex gap-10'>
                <SelectCreatable {...select[0]}/>
                <SelectCreatable {...select[1]}/>
            </div>
        </div>

    </div>
  )
}

export default PostJob; 