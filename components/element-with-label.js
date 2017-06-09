import PropTypes from 'prop-types'

import { hideIfNoChildren } from '../lib/hoc-helper'

const ElementWithLabel = hideIfNoChildren(({ children, label }) =>
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
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
}

export default ElementWithLabel
