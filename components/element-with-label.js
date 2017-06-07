import React from 'react'
import PropTypes from 'prop-types'

const ElementWithLabel = ({children, label}) => (
  <div className="text">
    <div className="text--label">{label}:</div>
    {children}
    <style jsx>{`
      .text--label {
        font-weight: bold;
      }
    `}</style>
  </div>
)

ElementWithLabel.propTypes = {
  children: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired
}

export default ElementWithLabel
