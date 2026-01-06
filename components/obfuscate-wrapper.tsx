import Obfuscate from 'react-obfuscate'

interface ObfuscateWrapperProps {
  email: string
}

const ObfuscateWrapper = ({ email }: ObfuscateWrapperProps) => (
  <Obfuscate email={email} />
)

export default ObfuscateWrapper
