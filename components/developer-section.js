import React from 'react'
import PropTypes from 'prop-types'

import {section} from '../lib/style-utils'

const DeveloperSection = ({children}) => (
  <div className="developer--section">
    {children}
    <style jsx>{`
      .developer--section {
        ${section}
      }
    `}</style>
  </div>
)

DeveloperSection.propTypes = {
  children: PropTypes.node.isRequired
}

export default DeveloperSection
