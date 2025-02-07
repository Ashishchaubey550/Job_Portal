import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const links = [
        {name:"Find Jobs",url:"/findjobs"},
        {name:"Find Talend" , url:"/findtalend"},
        {name:"Upload Job" , url:"/postjobs"},
        {name:"Posted Job" , url:"/posted_jobs"}
    ]
    const location = useLocation();
  return (
    <div className=" flex gap-5 font-semibold h-full items-center">
      {
        links.map((elem , index)=>(
            <div key={index} className={`${location.pathname==elem.url?" border-yellow-600":"border-transparent"} border-b-3  items-center `}>
                <Link key={index} to={elem.url}>{elem.name}</Link>
            </div>
        ))
      }
    </div>
  );
};

export default Navbar;
