import PropTypes from 'prop-types'
import { compose, withProps } from 'recompose'

import hash from '../lib/hash'
import { toggleLength } from '../lib/hoc-helper'

import ElementWithLabel from './element-with-label'
import Link from './link'

const ProjectList = ({ buttonText, isExpanded, projects, toggleExpanded }) =>
  <ElementWithLabel label="Clients and Projects">
    <ul>
      {projects.slice(0, isExpanded ? projects.length : 4).map(project =>
        <li key={hash(`${project.client}-${project.description}`)}>
          <Link url={project.link}>{project.client}</Link>
          ({project.description})
        </li>
      )}
    </ul>
    <button onClick={toggleExpanded}>{buttonText}</button>
  </ElementWithLabel>

ProjectList.propTypes = {
  buttonText: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  toggleExpanded: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
}

export default compose(
  toggleLength,
  withProps(({ isExpanded }) => ({
    buttonText: isExpanded ? 'Less Projects' : 'More Projects',
  }))
)(ProjectList)
