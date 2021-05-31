import React from 'react'
import { Container } from './styles/home'

type LayoutProps = {
  children: React.ReactNode
}

export default function Home({ children, ...restProps }: LayoutProps) {
  return <Container {...restProps}>{children}</Container>
}
