import Link from 'next/link'

import { breakpoints, contentBox, sizes } from '../lib/style-utils'

export default () => (
  <header className="header" data-e2e="header">
    <Link href="/">
      <a>
        <img
          data-e2e="home-link"
          className="header--logo"
          src="/static/logo.svg"
          width="364"
          height="114"
          title="Softwarehaus Dänen4 GmbH | Sonntagstr. 4 | 10245 Berlin"
          alt="Softwarehaus Dänen4 GmbH | Sonntagstr. 4 | 10245 Berlin"
        />
      </a>
    </Link>
    <style jsx>{`
      .header {
        ${contentBox}
        text-align: center;
        padding: ${sizes.standardPadding} 0;
      }
      .header--logo {
        max-width: 90%;
      }

      @media screen and (min-width: ${breakpoints.mobile}) {
        .header {
          height: ${sizes.headerHeight};
          position: relative;
        }

        .header--logo {
          position: absolute;
          bottom: 53px;
          left: 540px;
        }
      }
    `}</style>
  </header>
)
