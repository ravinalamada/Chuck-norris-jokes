import React from 'react'
import { SavedJokes } from '../component'
import IncrementIcon from '../img/plus.svg'
import DecrementIcon from '../img/minus.svg'

export default function SavedJokeContainer() {
  return (
    <SavedJokes>
      <SavedJokes.Base>
        <SavedJokes.Buttons>
          <img src={DecrementIcon} alt='munis' />
        </SavedJokes.Buttons>
        <SavedJokes.Jokes>0</SavedJokes.Jokes>
        <SavedJokes.Buttons>
          <img src={IncrementIcon} alt='plus' />
        </SavedJokes.Buttons>
      </SavedJokes.Base>
      <SavedJokes.SaveButton>Save Jokes</SavedJokes.SaveButton>
    </SavedJokes>
  )
}
