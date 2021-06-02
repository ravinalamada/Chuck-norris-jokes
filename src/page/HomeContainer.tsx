import React from 'react'
import JokeContainer from '../containers/JokeContainer'
import FormContainer from '../containers/FormContainer'
import SavedJokeContainer from '../containers/SavedJokesContainer'
import { Home } from '../component'

export default function HomeContainer() {
  return (
    <Home>
      <JokeContainer />
      <FormContainer />
      <SavedJokeContainer />
    </Home>
  )
}
