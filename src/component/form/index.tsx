import React from 'react'
import {
  Container,
  Fieldset,
  Input,
  Select,
  Button,
  Option,
} from './styles/form'

export default function Form({ children, ...restProps }: any) {
  return <Container {...restProps}>{children}</Container>
}

Form.Fieldset = function formFieldset({ children, ...restProps }: any) {
  return <Fieldset {...restProps}>{children}</Fieldset>
}

Form.Select = function formSelect({ children, ...restProps }: any) {
  return <Select {...restProps}>{children}</Select>
}

Form.Option = function formOption({ children, ...restProps }: any) {
  return <Option {...restProps}>{children}</Option>
}

Form.Input = function formInput({ children, ...restProps }: any) {
  return <Input {...restProps}>{children}</Input>
}
Form.Button = function formButton({ children, ...restProps }: any) {
  return <Button {...restProps}>{children}</Button>
}
