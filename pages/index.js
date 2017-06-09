import Developer from '../components/developer'
import TwoCol from '../components/two-col'
import Wrapper from '../components/wrapper'

import jfd from '../data/jfd'
import hp from '../data/hp'

export default () =>
  <section>
    <Wrapper>
      <TwoCol>
        <Developer data={jfd} />
        <Developer data={hp} />
      </TwoCol>
    </Wrapper>
  </section>
