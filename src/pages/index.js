import React from "react"
import SEO from "../components/seo"
import HomeTemplate from "../components/home-temp/home-temp"
import '../App.css';

const IndexPage = () => (
  <div style={{ width: '100%' }}>
    <SEO title="Home" />
    <HomeTemplate />
  </div>
)

export default IndexPage
