import Developer from '../components/developer'
import TwoCol from '../components/two-col'
import Wrapper from '../components/wrapper'
import hp from '../data/hp.json'
import jfd from '../data/jfd.json'
import { getRandomGradient } from '../lib/style-utils'

export interface IndexPageProps {
  gradient: string
}

const IndexPage = ({ gradient }: IndexPageProps) => (
  <section>
    <Wrapper gradient={gradient}>
      <TwoCol>
        <Developer data={jfd} />
        <Developer data={hp} />
      </TwoCol>
    </Wrapper>
  </section>
)

IndexPage.getInitialProps = () => ({
  gradient: getRandomGradient(),
})

export default IndexPage
