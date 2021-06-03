import { Action, State } from '../utils/Types'

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_RANDOM_JOKES':
      return {
        ...state,
        loading: false,
        jokes: action.payload,
      }
    case 'FETCH_JOKES_WITH_CATEGORY':
      return {
        ...state,
        loading: false,
        jokes: action.payload,
      }
    case 'SET_NAME_TO_REPLACE_NAME':
      return {
        ...state,
        loading: false,
        nameToReplace: action.payload,
      }
    case 'SET_CATEGORY':
      return {
        ...state,
        loading: false,
        category: action.payload,
      }
    case 'SET_JOKES_DATA':
      return {
        ...state,
        loading: false,
        jokesData: action.payload,
      }
    default:
      return state
  }
}

export default reducer
