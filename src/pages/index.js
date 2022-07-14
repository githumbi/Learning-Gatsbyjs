import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
// import {page} from '../examples/home.module.css'
import * as homestyle from '../examples/home.module.css' //saves time 

const index = () => {
  return (
    <Layout>
      <div className={homestyle.page}>
        <h1>Home page</h1>
        <h1>Home page</h1>
        <div>
          <Link to="/about">about</Link>
          <Link to="/company/company">company</Link>
        </div>
      </div>
    </Layout>
  ) 
}

export default index
