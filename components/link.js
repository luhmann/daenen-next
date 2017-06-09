import PropTypes from 'prop-types'

import { link } from '../lib/style-utils'

const Link = ({ children, url }) =>
  <span>
    <a className="link" href={url}>{children}</a>
    <style jsx>{`
      .link {
        ${link}
      }
    `}</style>
  </span>
Link.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
}

export default Link
