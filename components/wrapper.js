import Head from 'next/head'
import PropTypes from 'prop-types'

import { breakpoints, contentBox, fonts, link, sizes } from '../lib/style-utils'
import Header from './header'
import Footer from './footer'

const wrapper = ({ title, children }) =>
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="wrapper">
      <Header />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      body {
        background-color: #000;
        margin: 0;
        font-family: ${fonts.base};
        font-feature-settings: "kern", "liga", "pnum";
        font-size: ${sizes.fontBase};
        line-height: ${sizes.lineHeightBase};
        -webkit-font-smoothing: subpixel-antialiased;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: ${fonts.headline};
        font-size: ${sizes.fontBase};
        line-height: ${sizes.lineHeightHeadline};
        margin: 0;
      }

      a {
        ${link}
      }
    `}</style>
    <style jsx>{`
      .wrapper {
        margin: 0 auto;
        width: 100%;
      }

      .content {
        ${contentBox}
        padding: ${sizes.standardPadding}
      }

      @media screen and (min-width: ${breakpoints.mobile}) {
        .wrapper {
          width: 73.84615em;;
        }
      }
    `}</style>
  </div>

wrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

wrapper.defaultProps = {
  title: 'Softwarehaus Dänen4',
}
export default wrapper
