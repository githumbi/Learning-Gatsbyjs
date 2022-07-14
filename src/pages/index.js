import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const index = () => {
  return (
    <Layout>
      <h1>Home page</h1>
    <div>
      <Link to='/about'>about</Link>
      <Link to='/company/company'>company</Link>
     
    </div>
    
    </Layout>


  )
}

export default index