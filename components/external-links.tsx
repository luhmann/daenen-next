import hash from '../lib/hash'

import ElementWithLabel from './element-with-label'
import Link from './link'

export interface ExternalLink {
  label: string
  links: Array<{
    url: string
    text: string
  }>
}

export interface ExternalLinksProps {
  config: ExternalLink[]
}

const ExternalLinks = ({ config }: ExternalLinksProps) => (
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

export default ExternalLinks
