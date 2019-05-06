import React from "react"
import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const About = ({ data }) => (
  <Layout>
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="About Us"
      styleClass="about-background"
    />
    <Info />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default About
