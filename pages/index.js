import Developer from '../components/developer'
import Wrapper from '../components/wrapper'

import jfd from '../data/jfd'
import hp from '../data/hp'

export default () =>
  <section>
    <Wrapper>
      <Developer data={jfd} />
      <Developer data={hp} />
    </Wrapper>
  </section>
