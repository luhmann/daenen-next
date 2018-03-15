import PropTypes from 'prop-types'

import hash from '../lib/hash'

import ElementWithLabel from './element-with-label'

const Technologies = ({ technologies }) => (
  <ElementWithLabel label="Technologies">
    <ul>{technologies.map(tech => <li key={hash(`${tech}`)}>{tech}</li>)}</ul>
  </ElementWithLabel>
)

Technologies.propTypes = {
  technologies: PropTypes.array.isRequired,
}

export default Technologies
