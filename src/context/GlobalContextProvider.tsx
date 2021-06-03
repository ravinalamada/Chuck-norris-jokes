import React, { useReducer, useEffect, createContext, useState } from 'react'
import axios from 'axios'
import { State } from '../utils/Types'
import reducer from './Reducer'
import { RANDOM_API, LIMIT_TO } from '../constants'

export const initialValue: State = {
  loading: true,
  jokes: [],
  nameToReplace: '',
  category: '',
  jokesData: { name: '', category: '' },
  setCategory: () => {},
  setNameToReplace: () => {},
  handleSubmit: () => {},
}

export const Context = createContext(initialValue)

export const GlobalContext: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue)

  const fetchRandomJokes = async () => {
    const getJokesData = await axios(RANDOM_API)
    dispatch({ type: 'FETCH_RANDOM_JOKES', payload: getJokesData?.data?.value })
  }

  const fetchJokesWithCategory = async () => {
    const getJokesWithCategory = await axios(
      `${RANDOM_API}${LIMIT_TO}=[${state.category}]`
    )
    dispatch({
      type: 'FETCH_JOKES_WITH_CATEGORY',
      payload: getJokesWithCategory?.data?.value,
    })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const nameObj = {
      name: state.nameToReplace,
      category: state.category,
    }
    dispatch({ type: 'SET_JOKES_DATA', payload: nameObj })
  }

  useEffect(() => {
    if (state.jokesData.category !== '') {
      fetchJokesWithCategory()
    } else {
      fetchRandomJokes()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.jokesData])
  console.log(state.jokesData)

  return (
    <Context.Provider
      value={{
        jokes: state.jokes,
        loading: state.loading,
        nameToReplace: state.nameToReplace,
        category: state.category,
        jokesData: state.jokesData,
        setNameToReplace: (e) =>
          dispatch({
            type: 'SET_NAME_TO_REPLACE_NAME',
            payload: e.target.value,
          }),
        setCategory: (e) =>
          dispatch({
            type: 'SET_CATEGORY',
            payload: e.target.value,
          }),
        handleSubmit,
      }}>
      {children}
    </Context.Provider>
  )
}
