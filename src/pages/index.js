import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const index = () => {
  return (
    <Layout>
      <div className="home-header">
        <h1>Home page</h1>
        <h1 style={{ color: "red" }}>Home page</h1>
        <div>
          <Link to="/about">about</Link>
          <Link to="/company/company">company</Link>
        </div>
      </div>
    </Layout>
  ) 
}

export default index
