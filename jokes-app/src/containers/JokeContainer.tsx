import React, { useContext } from 'react'
import { Context } from '../context/GlobalContextProvider'
import chuckNorrisPhoto from '../img/chuck-norris-photo.png'
import { Jokes } from '../component'

export default function JokeContainer() {
  const { jokes, jokesData } = useContext(Context)

  // Split the jokes
  const splittedJoke = jokes?.joke?.split(' ')

  // Map the splitted joke to escape the unused characters
  const mappedJoke = splittedJoke?.map((j) => {
    if (j.includes('&quot;') || j.includes('#')) {
      return j.replace('&quot;', '')
    }
    if (
      (jokesData.name && j.includes('Chuck')) ||
      (jokesData.name && j.includes('Norris'))
    ) {
      return j
        .replace('Chuck', jokesData.name && jokesData.name)
        .replace('Norris', '')
    }
    return j
  })

  const jokeToDisplay = mappedJoke?.join(' ')

  return (
    <Jokes>
      <Jokes.Image src={chuckNorrisPhoto} alt='Chuck Norris' />
      <Jokes.Joke>"{jokeToDisplay}"</Jokes.Joke>
    </Jokes>
  )
}
