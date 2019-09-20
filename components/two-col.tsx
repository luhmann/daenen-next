import { breakpoints } from '../lib/style-utils'

export interface TwoColProps {
  children: React.ReactNode
}

const TwoCol = ({ children }: TwoColProps) => (
  <section className="two-col">
    {children}
    <style jsx>{`
      @media screen and (min-width: ${breakpoints.mobile}) {
        .two-col {
          display: flex;
        }
      }
    `}</style>
  </section>
)

export default TwoCol
