import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorageJobIdItems } from "../Utils/localStorage";

const Applied = () => {
  const jobs = useLoaderData();
  const ids = getStorageJobIdItems();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    const appliedJobsArr = [];

    for (const id of ids) {
      const job = jobs.find((job) => job.id === id);
      console.log(job);
      if (job) {
        appliedJobsArr.push(job);
      }
    }
    setAppliedJobs(appliedJobsArr);
  }, [jobs]);
  console.log(appliedJobs);

  const handleDropdown = (filter) =>{
       if(filter === 'all'){
            setDisplayJobs(appliedJobs)
       }
       else if(filter === 'remote'){
            const filterRemote = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(filterRemote)
            console.log(filterRemote)
       }
       else if( filter === 'onsite'){
            const onsiteFilter = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            console.log(onsiteFilter);
            setDisplayJobs(onsiteFilter)
            // setDisplayJobs(onsiteFilter)
       }
  }


  return (
    <div>
      <h1> Applied Jobs</h1>
      <p>
        {displayJobs.map((job) => (
          <li key={job.id}>
            {" "}
            {job.company_name} {job.remote_or_onsite} {job.salary}{" "}
          </li>
        ))}
      </p>
      <div className="mt-10">
        <details className="dropdown">
          <summary className="btn m-1">open or close</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={()=>{handleDropdown('all')}}>
              <a>ALL</a>
            </li>
            <li onClick={()=>{handleDropdown('remote')}}>
              <a> Remote</a>
            </li>
            <li onClick={()=>{handleDropdown('onsite')}}>
              <a> Onsite</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Applied;
