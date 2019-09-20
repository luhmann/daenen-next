import PropTypes from 'prop-types'

import { fonts, sizes } from '../lib/style-utils'

import ContentSection from './content-section'

export interface DeveloperTitleProps {
  name: string,
  jobTitle: string,
}

const DeveloperTitle = ({ name, jobTitle }: DeveloperTitleProps) => (
  <ContentSection>
    <h3 className="developer--name">{name}</h3>
    <div className="developer--job-title">{jobTitle}</div>
    <style jsx>{`
      .developer--name {
        font-family: ${fonts.headline};
        font-size: ${sizes.fontHeadline};
      }
      .developer--job-title {
        font-style: italic;
      }
    `}</style>
  </ContentSection>
)

export default DeveloperTitle
