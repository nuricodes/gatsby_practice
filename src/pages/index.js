import React from "react"
import Link from "gatsby-link"
import Counter from './counter'

export default function Home({ data }) {
  return <div>

    <h1>{data.site.siteMetadata.title}</h1>
    <h3>{data.site.siteMetadata.author}</h3>
    <p>This is a paragraph</p>
    <p><Link to="/page-4">Get the file data</Link></p>
    <p><Link to="/page-2">Page 2</Link></p>
    <p><Link to="dir1/page-3">Page 3</Link></p>
    <p><Link to="counter/">Counter</Link></p>
    <Counter color="blue" />


  </div>
}

// use graphql to grab information
export const query = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`

