import PropTypes from 'prop-types'

import { breakpoints } from '../lib/style-utils'

const TwoCol = ({ children }) =>
  <section className="two-col">
    {children}
    <style jsx>{`
      @media screen and (min-width: ${breakpoints.mobile}) {
        .two-col {
          display: flex;
        }
      }

    `}</style>
  </section>

TwoCol.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TwoCol
