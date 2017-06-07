import React from 'react'
import Link from 'next/link'

export default () =>
  (<header>
    <Link href="/" prefetch data-e2e="header">
      <a>
        <img
          className="header--logo"
          src="/static/logo.svg"
          width="364"
          height="114"
          title="Softwarehaus Dänen4 | Sonntagstr. 4 | 10245 Berlin"
          alt="Softwarehaus Dänen4 | Sonntagstr. 4 | 10245 Berlin"
          />
        <style jsx>{`
          .header--logo {
          }
        `}</style>
      </a>
    </Link>
  </header>)
