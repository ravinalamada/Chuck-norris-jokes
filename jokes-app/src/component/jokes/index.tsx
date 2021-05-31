import React from 'react'
import { Container, Joke, Image } from './styles/jokes'

type LayoutProps = {
  children: React.ReactNode
}

export default function Jokes({ children, ...restProps }: any) {
  return <Container {...restProps}>{children}</Container>
}

Jokes.Joke = function jokesJoke({ children, ...restProps }: any) {
  return <Joke {...restProps}>{children}</Joke>
}

Jokes.Image = function jokesImage({ ...restProps }: any) {
  return <Image {...restProps} />
}
