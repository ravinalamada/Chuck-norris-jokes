import React from 'react'

export type jokeType = {
  id: number
  joke: string
  categories: [string]
}

export type State = {
  loading: boolean
  jokes: jokeType
  nameToReplace: string
  category: string
  setNameToReplace: (e: React.ChangeEvent<HTMLInputElement>) => void
  setCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  jokesData: any
}

// { name: string; category: string }

export type Action =
  | { type: 'FETCH_RANDOM_JOKES'; payload: jokeType }
  | { type: 'SET_NAME_TO_REPLACE_NAME'; payload: string }
  | { type: 'SET_CATEGORY'; payload: string }
  | { type: 'FETCH_JOKES_WITH_CATEGORY'; payload: jokeType }
  | { type: 'SET_JOKES_DATA'; payload: {} }
