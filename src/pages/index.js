import React from 'react'
import { Link } from 'gatsby'
import Navbar from '../components/navbar'

const index = () => {
  return (
    <div>
      <Navbar />
      <h1>index page</h1>
    <div>
      <Link to='/about'>about</Link>
      <Link to='/company/company'>company</Link>
     
    </div>
    
    </div>


  )
}

export default index