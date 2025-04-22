import FooterData from '../Data/FooterData';

const Footer=()=>{
  return (
    <div className=' bg-neutral-100 capitalize pt-20 pb-5 flex gap-5 justify-around'>
      <div className=' w-1/4 flex  flex-col gap-4'>
      <div className="flex gap-3 items-center">
          <i className="ri-vuejs-fill text-3xl"></i>
          <span className=" text-xl font-semibold">FindJob</span>
        </div> 
        <div className=' text-md text-gray-500'>Job Portal with user profiles, Skills updates, certification , work experience and admin job postings</div>
        <div className=' flex gap-3 text-amber-500 text-3xl [&>div]:bg-gray-300 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer '>
          <div className=' hover:bg-gray-400'><i className="ri-instagram-line"></i></div>
          <div className=' hover:bg-gray-400'><i className="ri-linkedin-box-line"></i></div>
          <div className=' hover:bg-gray-400'><i className="ri-twitter-line"></i></div>
        </div>
      </div>
        {
          FooterData.map((elem , index)=><div key={index} className=''>
            <div className=' text-lg font-semibold mb-4 text-teal-400 '>{elem.title}</div>{
              elem.link.map((link,index)=><div key={index} className=' text-gray-700 text-md cursor-pointer hover:text-teal-400 mb-1 hover:translate-x-2 transition duration-300 ease-in-out '>{link}</div>)
            }
          </div>)
        }
    </div>
  )
}

export default Footer;