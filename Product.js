import React from 'react'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <div>
       <h1>Product Page</h1>
       <nav>
        <Link to='/availablepr'>Available Products</Link>
        <Link to='/upcomingprod'>Upcoming Products</Link>
       </nav>
       </div>
  )
}

export default Product