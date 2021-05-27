import { useReducer, useEffect, useState } from 'react'
import axios from 'axios'
import { CORS_API, FIRSTNAME, LASTNAME } from '../constants/index'

export default function UseReducer() {
  const [fisrtName, setFirstName] = useState('Chuck')
  const [lastName, setLastName] = useState('Norris')

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'FETCH_JOKES': {
          return { ...state, loading: false, jokes: action.jokes }
        }
        default:
          return state
      }
    },
    {
      loading: true,
      jokes: [],
    }
  )

  // Fetch the jokes data
  async function getJokes() {
    const API_URL_NAME = `${CORS_API}${FIRSTNAME}=${fisrtName}&${LASTNAME}=${lastName}`
    const fetchedJokesData = await axios(API_URL_NAME)
    dispatch({ type: 'FETCH_JOKES', jokes: fetchedJokesData.data })
  }

  // This dispatched the type of fetch jokes
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'FETCH_JOKES' })
      getJokes()
    }, 500)
  }, [])

  // return the state and dispatch that are going to be used
  return { state, dispatch, getJokes }
}
