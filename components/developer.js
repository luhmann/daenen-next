import React from 'react'
import PropTypes from 'prop-types'
import {branch, renderComponent, renderNothing} from 'recompose'

import DeveloperSection from './developer-section'
import DeveloperTitle from './developer-title'
import ElementWithLabel from './element-with-label'

const Developer = ({data}) => (
  <section className="developer">
    <DeveloperTitle name={data.name} jobTitle={data.jobTitle}/>



    <DeveloperSection>
      { branch((data) => Boolean(data.phone), renderComponent(<ElementWithLabel label="Phone">{data.phone}</ElementWithLabel>), renderNothing())(data)}

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
