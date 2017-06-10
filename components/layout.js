import PropTypes from 'prop-types'

import { breakpoints, contentBox, sizes } from '../lib/style-utils'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) =>
  <div className="layout">
    <Header />
    <main className="content" data-e2e="content">
      {children}
    </main>
    <Footer />
    <style jsx>{`
      .layout {
        margin: 0 auto;
        width: 100%;
      }

      .content {
        ${contentBox}
        padding: ${sizes.standardPadding}
      }

      @media screen and (min-width: ${breakpoints.mobile}) {
        .layout {
          width: 73.84615em;
        }
      }
    `}</style>
  </div>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
