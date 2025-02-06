import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";

const ApplyJobPage=()=>{
    return (
        <div className=" bg-neutral-100 min-h-[98vh]">
            <Link to="/jobs" className="my-5 inline-block">
          <Button leftSection={<i className="ri-arrow-left-line text-xl"></i>} color="teal.8" variant="light">Back</Button>
            </Link>
            <ApplyJobComp/>

        </div>
    )
}
export default ApplyJobPage;