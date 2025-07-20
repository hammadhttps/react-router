import React from 'react'
import { Outlet } from 'react-router'

const JobsLayout = () => {
  return (
    <div>
        <h2>Jobs Openings</h2>
        <p>List Of Current Jobs Openings</p>
        <Outlet/>
    </div>
  )
}

export default JobsLayout