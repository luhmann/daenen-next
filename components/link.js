import PropTypes from 'prop-types'

const Link = ({ children, url }) =>
  <a className="link" href={url}>{children}</a>

Link.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
}

export default Link
