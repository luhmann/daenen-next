import React from 'react'
import PropTypes from 'prop-types'

import DeveloperSection from './developer-section'
import DeveloperTitle from './developer-title'
import ElementWithLabel from './element-with-label'

const Developer = ({data}) => (
  <section className="developer">
    <DeveloperTitle name={data.name} jobTitle={data.jobTitle}/>



    <DeveloperSection>
      {Boolean(data.phone) && <ElementWithLabel label="Phone">{data.phone}</ElementWithLabel>}

      <ElementWithLabel label="E-Mail">
        {data.email}
      </ElementWithLabel>
    </DeveloperSection>
  </section>
)

Developer.propTypes = {
  data: PropTypes.object.isRequired
}

export default Developer
