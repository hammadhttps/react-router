import React from 'react'
import { useNavigate } from 'react-router'
const NotFound = () => {
    const navigate=useNavigate();
  return (
    <div>
        <h1>404: Page Not Found</h1>
        <br />
        <button onClick={()=>navigate('/')}>Go to HomePage</button>
    </div>
  )
}

export default NotFound