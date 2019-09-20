import PropTypes from 'prop-types'

import { section } from '../lib/style-utils'

export interface ContentSectionProps {
  children: React.ReactNode
}

const ContentSection = ({ children }: ContentSectionProps) => (
  <div className="content-section">
    {children}
    <style jsx>{`
      .content-section {
        ${section};
      }
    `}</style>
  </div>
)


export default ContentSection
