import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/Layout"
// import {page} from '../examples/home.module.css'
import * as homestyle from '../examples/home.module.css' //saves time
import { ExampleButton } from "../examples/button" 

const index = () => {
  return (
    <Layout>
      <div className={homestyle.page}>
        <ExampleButton>click me</ExampleButton>
        <h1>Home page</h1>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          maximus maximus elit et condimentum. Proin at dictum risus, vel dictum
          urna. Donec quis nulla sit amet nibh commodo tincidunt. Etiam viverra
          molestie metus, at pharetra tortor interdum ut. Phasellus pellentesque{" "}
        </p>
      </div>
    </Layout>
  ) 
}

export default index
