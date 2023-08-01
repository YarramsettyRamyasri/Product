import React from 'react'
import { useNavigate } from 'react-router-dom' 
function AvailableProduct() {
    const navigate= useNavigate();
  return (
    <div>
        Available Product are listed below
        <button onClick={()=>navigate('/')}>Home</button>
        <button onClick={()=>navigate('/product')}>Back</button>
        </div>
  )
}

export default AvailableProduct