import React from 'react'

import Developer from '../components/developer'
import Wrapper from '../components/wrapper'

import jfd from '../data/jfd'

export default () => (
  <section>
    <Wrapper>
      <Developer data={jfd}/>
    </Wrapper>
  </section>
)
