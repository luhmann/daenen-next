import PropTypes from 'prop-types'
import Obfuscate from 'react-obfuscate'

const MailToLink = ({ email }) => <Obfuscate email={email} />

MailToLink.propTypes = {
  email: PropTypes.string.isRequired,
}

export default MailToLink
