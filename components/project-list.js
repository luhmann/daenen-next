import PropTypes from 'prop-types'
import { compose, withProps } from 'recompose'

import hash from '../lib/hash'
import { toggleLength } from '../lib/hoc-helper'
import { colors, fonts, sizes } from '../lib/style-utils'

import ElementWithLabel from './element-with-label'
import Link from './link'

const ProjectList = ({ buttonText, isExpanded, projects, toggleExpanded }) => (
  <ElementWithLabel label="Clients and Projects">
    <ul>
      {projects.slice(0, isExpanded ? projects.length : 4).map(project => (
        <li
          key={hash(`${project.client}-${project.description}`)}
          data-e2e="project"
        >
          <Link url={project.link}>{project.client}</Link>&thinsp; ({
            project.description
          })
        </li>
      ))}
    </ul>
    <button
      className="more-button"
      onClick={toggleExpanded}
      data-e2e="more-button"
    >
      {buttonText}
    </button>
    <style jsx>{`
      .more-button {
        background-color: transparent;
        border: none;
        color: ${colors.action};
        cursor: pointer;
        font-family: ${fonts.base};
        font-size: ${sizes.fontBase};
        font-weight: bold;
        padding: 0;
        margin: 0;
      }
    `}</style>
  </ElementWithLabel>
)

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
