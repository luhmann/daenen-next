import Head from 'next/head'
import PropTypes from 'prop-types'

import { fonts, link, sizes } from '../lib/style-utils'

import Layout from './layout'

const wrapper = ({ title, children }) =>
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="wrapper">
      <Layout>{children}</Layout>
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
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB3aWR0aD0nMTAwJScgaGVpZ2h0PSczMDAnPgoJPGRlZnM+CgkJPGcgaWQ9J2MnPgoJCQk8ZWxsaXBzZSBjeD0nNTAlJyByeD0nNTAlJyByeT0nMjAwJScgZmlsbC1vcGFjaXR5PScwLjInIGZpbGw9JyNmZmZmZmYnLz4KCQk8L2c+Cgk8L2RlZnM+Cgk8cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPScjMEEyMTQwJy8+Cgk8dXNlIHhsaW5rOmhyZWY9JyNjJyB5PSctMjAwJScvPgoJPHVzZSB4bGluazpocmVmPScjYycgeT0nLTE3NSUnLz4KCTx1c2UgeGxpbms6aHJlZj0nI2MnIHk9Jy0xNTAlJy8+Cgk8dXNlIHhsaW5rOmhyZWY9JyNjJyB5PSctMTI1JScvPgoJPHVzZSB4bGluazpocmVmPScjYycgeT0nLTEwMCUnLz4KCTx1c2UgeGxpbms6aHJlZj0nI2MnIHk9Jy03NSUnLz4KCTx1c2UgeGxpbms6aHJlZj0nI2MnIHk9Jy01MCUnLz4KCTx1c2UgeGxpbms6aHJlZj0nI2MnIHk9Jy0yNSUnLz4KCTx1c2UgeGxpbms6aHJlZj0nI2MnIHk9JzAlJy8+Cgk8dXNlIHhsaW5rOmhyZWY9JyNjJyB5PScyNSUnLz4KCTx1c2UgeGxpbms6aHJlZj0nI2MnIHk9JzUwJScvPgoJPHVzZSB4bGluazpocmVmPScjYycgeT0nNzUlJy8+Cgk8dXNlIHhsaW5rOmhyZWY9JyNjJyB5PScxMDAlJy8+Cgk8dXNlIHhsaW5rOmhyZWY9JyNjJyB5PScxMjUlJy8+Cgk8dXNlIHhsaW5rOmhyZWY9JyNjJyB5PScxNTAlJy8+Cgk8dXNlIHhsaW5rOmhyZWY9JyNjJyB5PScxNzUlJy8+Cgk8dXNlIHhsaW5rOmhyZWY9JyNjJyB5PScyMDAlJy8+Cgk8dXNlIHhsaW5rOmhyZWY9JyNjJyB5PScyMjUlJy8+Cgk8dXNlIHhsaW5rOmhyZWY9JyNjJyB5PScyNTAlJy8+Cgk8dXNlIHhsaW5rOmhyZWY9JyNjJyB5PScyNzUlJy8+Cgk8dXNlIHhsaW5rOmhyZWY9JyNjJyB5PSczMDAlJy8+Cjwvc3ZnPg==');
        overflow: auto;
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
