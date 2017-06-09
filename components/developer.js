import PropTypes from 'prop-types'
import MailTo from 'react-mailto'

import ContentSection from './content-section'
import DeveloperTitle from './developer-title'
import ElementWithLabel from './element-with-label'
import ExternalLinks from './external-links'
import ProjectList from './project-list'
import Technologies from './technologies'

const Developer = ({ data }) =>
  <section className="developer">
    <DeveloperTitle name={data.name} jobTitle={data.jobTitle} />

    <ContentSection>
      <ElementWithLabel label="Phone">{data.phone}</ElementWithLabel>
      <ElementWithLabel label="E-Mail">
        <MailTo email={data.email} obfuscate>{data.email}</MailTo>
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
  </section>

Developer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Developer
