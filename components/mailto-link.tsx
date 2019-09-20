import Obfuscate from 'react-obfuscate'

export interface MailToLinkProps {
  email: string
}

const MailToLink = ({ email }: MailToLinkProps) => <Obfuscate email={email} />

export default MailToLink
