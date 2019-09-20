import { hideIfNoChildren } from '../lib/hoc-helper'
import { sizes } from '../lib/style-utils'

export interface ElementWithLabelProps {
  label: string;
  children: React.ReactNode | string
}

const ElementWithLabel = hideIfNoChildren(({ children, label }: ElementWithLabelProps) => (
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
))

export default ElementWithLabel
