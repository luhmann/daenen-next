import dynamic from 'next/dynamic'

const ObfuscateWrapper = dynamic(() => import('./obfuscate-wrapper'), {
  ssr: false,
  loading: () => <span>...</span>,
})

export interface MailToLinkProps {
  email: string
}

const MailToLink = ({ email }: MailToLinkProps) => (
  <ObfuscateWrapper email={email} />
)

export default MailToLink
