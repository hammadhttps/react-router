/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { useLoaderData } from 'react-router'

const JobsDetails = () => {
    const jbDetails=useLoaderData();
  return (
    <div>
        <p><b>Title :</b>{jbDetails.title}</p>
        <p><b>Salary :</b>{jbDetails.salary}</p>
        <p><b>Location :</b>{jbDetails.location}</p>
    </div>
  )
}

export default JobsDetails
export const job_Details_Loader=async({params})=>{

    const {id}=params;
    const res=await fetch("http://localhost:5000/jobs/"+id)
    if(!res.ok)
    {
        throw Error ("Could not found the JOb Details")
    }
     return res.json();
}