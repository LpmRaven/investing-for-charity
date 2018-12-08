import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/styles.scss'
import './landing-page-layout.scss'

const LandingPageLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LandingPageQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="c-app">
          <div className="g-inner-wrapper g-inner-wrapper--default">
            <header className="g-flex__container c-header">
              <div className="g-flex__item"><div className="c-header__logo">Investing for charity</div></div>
              <div className="g-flex__item c-header__login-button"><div className="c-header__login-button">Login</div></div>
            </header>
          </div>
          {children}
        </div>
      </>
    )}
  />
)

LandingPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LandingPageLayout;
