import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>hello about</h1>
      </Wrapper>
    </Layout>
  )
}

//styled component
const Wrapper = styled.section`
  color: red;
  h1 {
    color: yellow;
  }
  text {
    text-transform: uppercase;
  }
`
export default about
