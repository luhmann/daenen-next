import PropTypes from 'prop-types'

import { hideIfNoChildren } from '../lib/hoc-helper'
import { sizes } from '../lib/style-utils'

const ElementWithLabel = hideIfNoChildren(({ children, label }) =>
  <div className="text">
    <span className="text--label">{label}:</span>
    {children}
    <style jsx>{`
      .text--label {
        font-weight: bold;
        margin-right: ${sizes.tiny};
      }
    `}</style>
  </div>
)

ElementWithLabel.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
}

export default ElementWithLabel
