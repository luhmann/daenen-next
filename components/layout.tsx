import { breakpoints, contentBox, sizes } from '../lib/style-utils'

import Footer from './footer'
import Header from './header'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <div className="layout">
    <Header />
    <main className="content" data-e2e="content">
      {children}
    </main>
    <Footer />
    <style jsx>{`
      .layout {
        margin: 0 auto;
        width: 100%;
      }

      .content {
        ${contentBox}
        padding: ${sizes.standardPadding}
      }

      @media screen and (min-width: ${breakpoints.mobile}) {
        .layout {
          width: 73.84615em;
        }
      }
    `}</style>
  </div>
)

export default Layout
