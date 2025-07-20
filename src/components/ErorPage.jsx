import React from 'react'
import { useNavigate, useRouteError } from 'react-router'

const ErorPage = () => {

    const error=useRouteError();
    const navigate=useNavigate();
  return (
    <div>
        <h3>An Error Occured</h3>
        <p>{error.message}</p>
        <button onClick={()=>navigate('/')}>Go to HomePage</button>

    </div>
  )
}

export default ErorPage