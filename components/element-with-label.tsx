import { sizes } from '../lib/style-utils'

export interface ElementWithLabelProps {
  label: string
  children?: React.ReactNode
}

const ElementWithLabel = ({ children, label }: ElementWithLabelProps) => {
  if (!children) return null

  return (
    <div className="text">
      <span className="text--label">{label}:</span>
      {children}
      <style jsx>{`
        .text--label {
          font-weight: bold;
          margin-right: ${sizes.tiny};
        }
      `}</style>
    </div>
  )
}

export default ElementWithLabel
