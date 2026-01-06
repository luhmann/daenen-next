import hash from '../lib/hash'

import ElementWithLabel from './element-with-label'

export interface TechnologiesProps {
  technologies: string[]
}

const Technologies = ({ technologies }: TechnologiesProps) => (
  <ElementWithLabel label="Technologies">
    <ul>
      {technologies.map((tech) => (
        <li key={hash(`${tech}`)}>{tech}</li>
      ))}
    </ul>
  </ElementWithLabel>
)

export default Technologies
