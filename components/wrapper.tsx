import Head from 'next/head'

import { fonts, link, sizes } from '../lib/style-utils'

import Layout from './layout'

export interface WrapperProps {
  children: React.ReactNode
  gradient: string
  title: string
}

const wrapper = ({ title, children, gradient }: WrapperProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="google-site-verification"
        content="Tf_svAvbDdyxf9-HsOZvCfFPv5awnjrgpTkeOLxQLEU"
      />
      <meta
        name="description"
        content="Softwarehaus Dänen4 offers Software Development and IT Consulting in Berlin, Germany"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/favicon.ico"
      />
    </Head>
    <div className="wrapper" style={{ background: gradient }}>
      <Layout>{children}</Layout>
    </div>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      html,
      body {
        min-height: 100vh;
      }

      body {
        margin: 0;
        font-family: ${fonts.base};
        font-feature-settings: 'kern', 'liga', 'pnum';
        font-size: ${sizes.fontBase};
        line-height: ${sizes.lineHeightBase};
        -webkit-font-smoothing: subpixel-antialiased;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: ${fonts.headline};
        font-size: ${sizes.fontBase};
        line-height: ${sizes.lineHeightHeadline};
        margin: 0;
      }

      a {
        ${link};
      }
    `}</style>
    <style jsx>{`
      .wrapper {
        min-height: 100vh;
        overflow: auto;
      }
    `}</style>
  </div>
)

wrapper.defaultProps = {
  title: 'Softwarehaus Dänen4 GmbH',
}

export default wrapper
