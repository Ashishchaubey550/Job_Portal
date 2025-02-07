import Posted_jobs from "../PostedJob/Posted_job";

const PostedJob=()=>{
    return(
        <div className=" bg-neutral-100 min-h-[98vh] p-4">
            <div className="flex gap-5 justify-between">
                <Posted_jobs/>
            </div>
        </div>
    )
}
export default PostedJob;