import PropTypes from 'prop-types'

import { breakpoints } from '../lib/style-utils'
import Header from './header'
import Footer from './footer'

const wrapper = ({ children }) =>
  <div className="wrapper">
    <Header />
    <main className="content">
      {children}
    </main>
    <Footer />
    <style jsx>{`
      .wrapper {
        margin: 0 auto;
        width: 73.84615em;
      }

      @media screen and (max-width: ${breakpoints.mobile}) {
        .wrapper {
          width: 100%;
        }
      }

    `}</style>
  </div>

wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default wrapper
