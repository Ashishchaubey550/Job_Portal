
import Companys from "../LandingPage/Companys";
import DreamJob from "../LandingPage/DreamJob";
import JobCatorery from "../LandingPage/JobCatorery";
import Subscribe from "../LandingPage/Subscribe";
import Testnimoinal from "../LandingPage/Testnimoinal";
import Working from "../LandingPage/Working";

const HomePage=()=>{
    return(
        <>
        <div className="bg-neutral-100">
        <DreamJob/>
        <Companys/>
        <JobCatorery/>
        <Working/>
        <Testnimoinal/>
        <Subscribe/>
        </div>
        </>
    )
}

export default HomePage;