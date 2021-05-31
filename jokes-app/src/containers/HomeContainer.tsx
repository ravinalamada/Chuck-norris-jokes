import React from 'react'
import JokeContainer from './JokeContainer'
import FormContainer from './FormContainer'
import { Home } from '../component'

export default function HomeContainer() {
  return (
    <Home>
      <JokeContainer />
      <FormContainer />
    </Home>
  )
}
