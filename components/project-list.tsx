import { useState } from 'react'

import hash from '../lib/hash'
import { colors, fonts, sizes } from '../lib/style-utils'

import ElementWithLabel from './element-with-label'
import Link from './link'

export interface Project {
  client: string
  description: string
  link?: string
}

export interface ProjectListProps {
  projects: Project[]
}

const ProjectList = ({ projects }: ProjectListProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const buttonText = isExpanded ? 'Less Projects' : 'More Projects'

  const toggleExpanded = () => setIsExpanded((prev) => !prev)

  return (
    <ElementWithLabel label="Clients and Projects">
      <ul>
        {projects.slice(0, isExpanded ? projects.length : 4).map((project) => (
          <li
            key={hash(`${project.client}-${project.description}`)}
            data-e2e="project"
          >
            <Link url={project.link} target="_blank">
              {project.client}
            </Link>
            &thinsp; ({project.description})
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
}

export default ProjectList
