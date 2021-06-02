import React, { useContext } from 'react'
import { Context } from '../context/GlobalContextProvider'
import chuckNorrisPhoto from '../img/chuck-norris-photo.png'
import RandomPhoto from '../img/random-photo.png'
import { Jokes } from '../component'

export default function JokeContainer() {
  const { jokes, jokesData, loading } = useContext(Context)

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
  const checkJokeData = jokesData.name !== '' || jokesData.category !== ''

  return (
    <Jokes>
      <Jokes.Image
        src={checkJokeData ? RandomPhoto : chuckNorrisPhoto}
        alt='Chuck Norris'
      />
      {loading ? (
        <p>Loading ....</p>
      ) : (
        <Jokes.Joke>"{jokeToDisplay}"</Jokes.Joke>
      )}
    </Jokes>
  )
}
