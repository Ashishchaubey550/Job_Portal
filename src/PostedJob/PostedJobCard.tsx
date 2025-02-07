const PostedJobCard=(props:any)=>{
    return (
        <div className="bg-gray-500 rounded-xl p-2">
            <div className="">{props.jobTitle}</div>
            <div className="">{props.location}</div>
            <div className="">{props.posted}</div>
        </div>
    )
}

export default PostedJobCard;