import PropTypes from 'prop-types'

import { breakpoints } from '../lib/style-utils'

import ContentSection from './content-section'
import DeveloperTitle from './developer-title'
import ElementWithLabel from './element-with-label'
import ExternalLinks from './external-links'
import MailToLink from './mailto-link'
import ProjectList from './project-list'
import Technologies from './technologies'

const Developer = ({ data }) =>
  <section className="developer" data-e2e="developer">
    <DeveloperTitle name={data.name} jobTitle={data.jobTitle} />

    <ContentSection>
      <ElementWithLabel label="Phone">{data.phone}</ElementWithLabel>
      <ElementWithLabel label="E-Mail">
        <MailToLink email={data.email} />
      </ElementWithLabel>
      <ElementWithLabel label="Skype">{data.skype}</ElementWithLabel>
    </ContentSection>

    <ContentSection>
      <ExternalLinks config={data.externalLinks} />
    </ContentSection>

    <ContentSection>
      <ElementWithLabel label="I do">
        {data.qualification.join(', ')}.
      </ElementWithLabel>
    </ContentSection>

    <ContentSection>
      <ProjectList projects={data.projects} />
    </ContentSection>

    <ContentSection>
      <Technologies technologies={data.technologies} />
    </ContentSection>

    <ContentSection>
      {data.additional}
    </ContentSection>

    <style jsx>{`
      .developer:nth-child(2) {
        margin-top: 40px;
      }

      @media screen and (min-width: ${breakpoints.mobile}) {
        .developer {
          padding: 0 30px;
        }

        .developer:nth-child(2) {
          margin-top: 0;
        }
      }
    `}</style>
  </section>

Developer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Developer
