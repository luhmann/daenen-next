import Developer from '../components/developer'
import TwoCol from '../components/two-col'
import Wrapper from '../components/wrapper'
import { getRandomGradient } from '../lib/style-utils'

import jfd from '../data/jfd'
import hp from '../data/hp'

const IndexPage = ({ gradient }) => (
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
