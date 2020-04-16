import ContentSection from '../components/content-section'
import ElementWithLabel from '../components/element-with-label'
import MailToLink from '../components/mailto-link'
import Wrapper from '../components/wrapper'
import { getRandomGradient, sizes } from '../lib/style-utils'

export interface ImpressPageProps {
  gradient: string
}

const ImpressPage = ({ gradient }: ImpressPageProps) => (
  <Wrapper gradient={gradient}>
    <h1 className="impress-headline" data-e2e="impress">
      Impressum & Datenschutzhinweis
    </h1>

    <ContentSection>
      Softwarehaus Dänen4 GmbH
      <br />
      Sonntagstraße 4<br />
      10245 Berlin
    </ContentSection>

    <ContentSection>
      <ElementWithLabel label="Telefon">0179 1461388</ElementWithLabel>
      <ElementWithLabel label="E-Mail">
        <MailToLink email="webmaster@daenen4.de" />
      </ElementWithLabel>
    </ContentSection>

    <ContentSection>
      <ElementWithLabel label="Vertretungsberechtigte Gesellschafter">
        <br />
        Jan Florian Dietrich, Henning Petersen
      </ElementWithLabel>
    </ContentSection>

    <ContentSection>
      <ElementWithLabel label="Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz">
        <br data-e2e="ust" />
        DE&nbsp;252170892
      </ElementWithLabel>
    </ContentSection>
    <ContentSection>
      <ElementWithLabel label="Datenschutzhinweis">
        <br data-e2e="privacy" />
        Informationen, die ihr Browser automatisch bei jeder Anfrage mitsendet
        (IP-Adresse, URL der angefragten Seite, der verwendete Browser,
        Zeitstempel des Abrufes) werden zur Auslieferung der Seite von
        Cloudfront/AWS verarbeitet. Diese Informationen werden nicht gespeichert
        und sind daher für uns nicht einsehbar. Darüberhinaus werden keinerlei
        persönliche Daten zu ihren Besuchen auf dieser Webseite erfasst,
        gespeichert oder verarbeitet.
        <br />
        <br />
        Es existieren keine Server-Log-Dateien über ihren Besuch. Diese Seite
        verwendet und setzt keine Cookies. Tracking-Lösungen wie Google
        Analytics und Social-Media-Plugins kommen nicht zum Einsatz.
      </ElementWithLabel>
    </ContentSection>
    <ContentSection>
      <ElementWithLabel label="Änderung dieser Datenschutzbestimmungen">
        <br />
        Es wird das Recht vorbehalten diese Sicherheits- und
        Datenschutzmaßnahmen zu verändern, soweit dies wegen der technischen
        Entwicklung erforderlich wird. In diesen Fällen werden wir auch unsere
        Hinweise zum Datenschutz entsprechend anpassen. Bitte beachten Sie daher
        die jeweils aktuelle Version unseres Datenschutzhinweis.
      </ElementWithLabel>
    </ContentSection>
    <style jsx>{`
      .impress-headline {
        font-size: ${sizes.fontHeadline};
      }
    `}</style>
  </Wrapper>
)

ImpressPage.getInitialProps = () => ({
  gradient: getRandomGradient(),
})

export default ImpressPage
