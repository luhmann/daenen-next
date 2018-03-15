import PropTypes from 'prop-types'

import hash from '../lib/hash'

import ElementWithLabel from './element-with-label'
import Link from './link'

const ExternalLinks = ({ config }) => (
  <div>
    {config.map(group => (
      <ElementWithLabel key={group.label} label={group.label}>
        {group.links.map((link, index) => (
          <span key={hash(`${link.url}-${index}`)} className="external-link">
            <Link target="_blank" url={link.url}>
              {link.text}
            </Link>
          </span>
        ))}
        <style jsx>{`
          .external-link:not(:last-child)::after {
            content: ', ';
          }
        `}</style>
      </ElementWithLabel>
    ))}
  </div>
)

ExternalLinks.propTypes = {
  config: PropTypes.array.isRequired,
}

export default ExternalLinks
