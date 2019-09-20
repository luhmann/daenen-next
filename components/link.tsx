import { link } from '../lib/style-utils'

export interface LinkProps {
  children: React.ReactNode
  url?: string
  target: string
}

const Link = ({ children, url, target }: LinkProps) => (
  <span>
    {url ? (
      <a className="link" href={url} target={target}>
        {children}
      </a>
    ) : (
      children
    )}
    <style jsx>{`
      .link {
        ${link};
      }
    `}</style>
  </span>
)

export default Link
