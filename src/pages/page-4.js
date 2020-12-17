import React from "react"
import Link from "gatsby-link"


export default function Home({ data }) {
    return <div>
        <table>
            <tr>
                <th>relativePath</th>
                <th>prettySize</th>
                <th>extension</th>
                <th>birthTime</th>
            </tr>
            <tbody>
                {data.allFile.edges.map(({ node }) =>
                    <tr>
                        <td>{node.relativePath}</td>
                        <td>{node.prettySize}</td>
                        <td>{node.extension}</td>
                        <td>{node.birthTime}</td>
                    </tr>
                )}
            </tbody>
        </table>

    </div>
}

// use graphql to grab information
export const query = graphql`
  query MyFilesQuery {
      allFile {
          edges {
              node {
                  extension
                  relativePath
                  prettySize
                  birthTime(fromNow: true)
              }
          }
      }
  }
`