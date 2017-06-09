import PropTypes from 'prop-types'

import { section } from '../lib/style-utils'

const ContentSection = ({ children }) =>
  <div className="content-section">
    {children}
    <style jsx>{`
      .content-section {
        ${section}
      }
    `}</style>
  </div>

ContentSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContentSection
