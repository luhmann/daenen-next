import MailTo from 'react-mailto'

import ContentSection from '../components/content-section'
import ElementWithLabel from '../components/element-with-label'
import Wrapper from '../components/wrapper'
import jfd from '../data/jfd'

export default () =>
  <Wrapper>
    <h1>Impressum</h1>

    <ContentSection>
      Softwarehaus Dänen4<br />
      Petersen, Dietrich (GbR)<br />
      Sonntagstraße 4<br />
      10245 Berlin
    </ContentSection>

    <ContentSection>
      <ElementWithLabel label="Telefon">
        030 29044581
      </ElementWithLabel>
      <ElementWithLabel label="E-Mail">
        <MailTo email={jfd.email} obfuscate>{jfd.email}</MailTo>
      </ElementWithLabel>
    </ContentSection>

    <ContentSection>
      <ElementWithLabel label="Vertretungsberechtigte Gesellschafter">
        <br />Jan Florian Dietrich, Henning Petersen
      </ElementWithLabel>
    </ContentSection>

    <ContentSection data-e2e="ust">
      <ElementWithLabel label="Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz">
        <br />DE&nbsp;252170892
      </ElementWithLabel>
    </ContentSection>
  </Wrapper>
