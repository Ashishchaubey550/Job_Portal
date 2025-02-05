import { Button, TagsInput } from '@mantine/core';
import {fields} from '../Data/JobPostData'
import { SelectCreatable } from './SelectableInput';
import TextEditor from '../PostJob/TextEditor'

const PostJob=()=>{
    const select = fields;
  return (
    <div className=" capitalize w-4/5  mx-auto">
        <div className="text-2xl font-semibold mb-5">Post A job</div>
        <div className='flex flex-col gap-5'>
            <div className='flex gap-10 [&>*]:w-1/3'>
                <SelectCreatable {...select[0]}/>
                <SelectCreatable {...select[1]}/>
            </div>
            <div className='flex gap-10 [&>*]:w-1/3'>
                <SelectCreatable {...select[2]}/>
                <SelectCreatable {...select[3]}/>
            </div>
            <div className='flex gap-10 [&>*]:w-1/3'>
                <SelectCreatable {...select[4]}/>
                <SelectCreatable {...select[5]}/>
            </div>
            <TagsInput label="skills" placeholder='Enter Skill' clearable acceptValueOnBlur splitChars={[',',' ',]}/>
            <div>
                <div className='text-sm font-medium'>Job Description</div>
                <TextEditor/>
            </div>
            <div className=' flex gap-5'>
                 <Button color="teal.8" variant="light">Publish Job</Button>
                 <Button color="teal.8" variant="outline">Save as Draft</Button>
            </div>
        </div>

    </div>
  )
}

export default PostJob; 