import React, { createContext, useState } from 'react'
import UseReducer from './UseReducer'

const Context = createContext()

function GlobalContextProvider({ children }) {
  const { state, dispatch, getJokes } = UseReducer()
  const { loading, jokes } = state
  console.log(jokes)

  return (
    <Context.Provider
      value={{
        state,
        getJokes,
        dispatch,
      }}>
      {children}
    </Context.Provider>
  )
}

export { GlobalContextProvider, Context }
