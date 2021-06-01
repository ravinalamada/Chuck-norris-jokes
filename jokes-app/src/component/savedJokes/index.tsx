import React from 'react'
import {
  Container,
  Jokes,
  Buttons,
  SaveButton,
  Base,
} from './styles/savedJokes'

export default function SavedJokes({ children, ...restProps }: any) {
  return <Container {...restProps}>{children}</Container>
}

SavedJokes.Base = function handleBase({ children, ...restProps }: any) {
  return <Base {...restProps}>{children}</Base>
}

SavedJokes.Buttons = function handleButtons({ children, ...restProps }: any) {
  return <Buttons {...restProps}>{children}</Buttons>
}

SavedJokes.SaveButton = function handleSaveButton({
  children,
  ...restProps
}: any) {
  return <SaveButton {...restProps}>{children}</SaveButton>
}

SavedJokes.Jokes = function displayJokes({ children, ...restProps }: any) {
  return <Jokes {...restProps}>{children}</Jokes>
}
