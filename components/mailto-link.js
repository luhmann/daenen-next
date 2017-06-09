import PropTypes from 'prop-types'
import MailTo from 'react-mailto'

const MailToLink = ({ email, obfuscate = true }) =>
  <MailTo email={email} obfuscate={obfuscate}>{email}</MailTo>

MailToLink.propTypes = {
  email: PropTypes.string.isRequired,
  obfuscate: PropTypes.bool,
}

MailToLink.defaultProps = {
  obfuscate: true,
}

export default MailToLink
