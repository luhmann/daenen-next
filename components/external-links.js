import React from 'react'
import PropTypes from 'prop-types'

import hash from '../lib/hash'

import ElementWithLabel from './element-with-label'
import Link from './link'

const ExternalLinks = ({ config }) =>
  <div>
    {config.map(group =>
      <ElementWithLabel key={group.label} label={group.label}>
        {group.links.map((link, index) =>
          <Link
            key={hash(`${link.url}-${index}`)}
            target="_blank"
            url={link.url}
          >
            {link.text}
          </Link>
        )}
      </ElementWithLabel>
    )}
  </div>

ExternalLinks.propTypes = {
  config: PropTypes.array.isRequired,
}

export default ExternalLinks
