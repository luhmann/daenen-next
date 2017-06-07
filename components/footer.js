import React from 'react'
import Link from 'next/link'

import {contentBox} from '../lib/style-utils'

export default () =>
  (<footer className="footer" data-e2e="footer">
    Softwarehaus Dänen4, Sonntagstraße 4, 10245&nbsp;Berlin &nbsp;&nbsp;|&nbsp;
    &nbsp;
    <Link data-e2e="impress-link" href="/impress"><a>Impressum</a></Link>
    <style jsx>{`
      .footer {
        ${contentBox}
        margin: 1.46154em 0;
        padding: 0.73077em 30px;
        text-align: center;
      }
    `}</style>
  </footer>)
