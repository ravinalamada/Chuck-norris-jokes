import styled from 'styled-components'
import ArrowDownIcon from '../../../img/arrow_down.svg'

export const Container = styled.form`
  height: 84px;
  display: grid;
  gap: 16px;
  grid-template-rows: repeat(3, 58px);
  padding-inline-start: 58px;
  padding-inline-end: 58px;
`
export const Fieldset = styled.fieldset`
  border: none;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-block-start: 0;
  padding-inline-start: 0;
  padding-inline-end: 0;
  padding-block-end: 0;
  display: inline-flex;
`

export const Select = styled.select`
  width: 100%;
  height: 100%;
  border: solid 1px #c4c4c4;
  border-radius: 4px;
  font-family: Inter;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.52px;
  text-align: left;
  color: #c4c4c4;
  background-color: #ffffff;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(${ArrowDownIcon}) no-repeat 399px !important;
  outline: #34394f;
`

export const Option = styled.option``

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding: 0;
  marign: 0;
  border: solid 1px #c4c4c4;
  border-radius: 4px;
  background-color: #ffffff;
  outline: #34394f;
  font-family: Inter;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.17;
  letter-spacing: -0.52px;
  text-align: left;
  color: #c4c4c4;
  padding-inline-start: 16px;
  padding-inline-end: 16px;

  &::-webkit-input-placeholder {
    color: #c4c4c4;
    font-family: Inter;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: -0.52px;
    text-align: left;
  }
`

export const Button = styled.button`
  background-color: #34394f;
  border: none;
  border-radius: 4px;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.52px;
  text-align: center;
  color: #ffffff;
  padding: 0;
  height: 58px;
  margin-block-start: 16px;
`
