import ContentSection from '../components/content-section'
import ElementWithLabel from '../components/element-with-label'
import Wrapper from '../components/wrapper'
import MailToLink from '../components/mailto-link'
import jfd from '../data/jfd'

import { sizes } from '../lib/style-utils'

export default () => (
  <Wrapper>
    <h1 className="impress-headline" data-e2e="impress">
      Impressum
    </h1>

    <ContentSection>
      Softwarehaus Dänen4<br />
      Petersen, Dietrich (GbR)<br />
      Sonntagstraße 4<br />
      10245 Berlin
    </ContentSection>

    <ContentSection>
      <ElementWithLabel label="Telefon">030 29044581</ElementWithLabel>
      <ElementWithLabel label="E-Mail">
        <MailToLink email={jfd.email} />
      </ElementWithLabel>
    </ContentSection>

    <ContentSection>
      <ElementWithLabel label="Vertretungsberechtigte Gesellschafter">
        <br />Jan Florian Dietrich, Henning Petersen
      </ElementWithLabel>
    </ContentSection>

    <ContentSection>
      <ElementWithLabel label="Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz">
        <br data-e2e="ust" />DE&nbsp;252170892
      </ElementWithLabel>
    </ContentSection>
    <style jsx>{`
      .impress-headline {
        font-size: ${sizes.fontHeadline};
      }
    `}</style>
  </Wrapper>
)
