import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';

const Featured = () => {
    const [jobs, setJobs] = useState([]);
    const [limitedJobs, setLimitedJobs] = useState(4)
    console.log(jobs)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(datas => setJobs(datas));
    },[])
    return (
        <div >
            <div className='mt-32 mb-6'>
                <h1 className='font-extrabold text-[48px] text-center'>Featured Jobs</h1>
                <p className='font-medium text-base text-center'> Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-6'>
                {jobs.slice(0, limitedJobs).map(job => <Feature key={job.id} job = {job}></Feature> )}
            </div>

           <div  className={` flex justify-center mt-10 mb-24  ${limitedJobs === jobs.length ? 'hidden' : '' } `}>
                <button onClick={()=>{setLimitedJobs(jobs.length)}} className="btn btn-outline px-5 py-3">See All Jobs</button>
           </div>
        </div>
    );
};

export default Featured;