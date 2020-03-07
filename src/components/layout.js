/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../styles/styles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <Link className="navbar-item" to="/">
            <p>{data.site.siteMetadata.title}</p>
          </Link>

          <button
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="mainNavbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="mainNavbar" class="navbar-menu">
          <div class="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
          </div>
        </div>
      </nav>
      <div>
        <main>{children}</main>
        <footer className="footer">
          <div class="content has-text-centered">
            Martin Hochstrasser © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
