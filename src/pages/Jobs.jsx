/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { Link, useLoaderData } from 'react-router';

const Jobs = () => {
    const jobsData=useLoaderData();
  return (
    <div>
        {jobsData.map((jobs)=>{
           return (
           <Link>
           <h3>{jobs.title}</h3>
           <p>{jobs.location}</p>
           </Link>
           )
        })}
    </div>
  )
}

export const jobs_Loader=async()=>{
    const res=await fetch('http://localhost:5000/jobs');

    return res.json();

}

export default Jobs;