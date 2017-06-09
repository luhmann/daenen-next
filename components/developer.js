import React from 'react'
import PropTypes from 'prop-types'
import MailTo from 'react-mailto'

import DeveloperSection from './developer-section'
import DeveloperTitle from './developer-title'
import ElementWithLabel from './element-with-label'
import ExternalLinks from './external-links'
import ProjectList from './project-list'
import Technologies from './technologies'

const Developer = ({ data }) =>
  <section className="developer">
    <DeveloperTitle name={data.name} jobTitle={data.jobTitle} />

    <DeveloperSection>
      <ElementWithLabel label="Phone">{data.phone}</ElementWithLabel>
      <ElementWithLabel label="E-Mail">
        <MailTo email={data.email} obfuscate>{data.email}</MailTo>
      </ElementWithLabel>
      <ElementWithLabel label="Skype">{data.skype}</ElementWithLabel>
    </DeveloperSection>

    <DeveloperSection>
      <ExternalLinks config={data.externalLinks} />
    </DeveloperSection>

    <DeveloperSection>
      <ElementWithLabel label="I do">
        {data.qualification.join(', ')}.
      </ElementWithLabel>
    </DeveloperSection>

    <DeveloperSection>
      <ProjectList projects={data.projects} />
    </DeveloperSection>

    <DeveloperSection>
      <Technologies technologies={data.technologies} />
    </DeveloperSection>

    <DeveloperSection>
      {data.additional}
    </DeveloperSection>
  </section>

Developer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Developer
