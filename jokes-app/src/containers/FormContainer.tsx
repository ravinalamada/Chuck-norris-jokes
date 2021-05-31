import React, { useContext } from 'react'
import { Context } from '../context/GlobalContextProvider'
import { Form } from '../component'

function FormContainer() {
  const {
    nameToReplace,
    category,
    handleSubmit,
    setNameToReplace,
    setCategory,
    jokesData,
  } = useContext(Context)

  let buttonLabelName: string

  if (nameToReplace) {
    buttonLabelName = nameToReplace
  } else if (jokesData.name) {
    buttonLabelName = jokesData.name
  } else {
    buttonLabelName = 'Chuck Norris'
  }

  return (
    <div className='App'>
      <Form onSubmit={handleSubmit}>
        <Form.Fieldset>
          <Form.Select
            name='category'
            placeholder='Categories'
            value={category}
            onChange={setCategory}>
            <option value='Categories'>Categories</option>
            <option value='nerdy'>nerdy</option>
            <option value='explicit'>explicit</option>
          </Form.Select>
        </Form.Fieldset>
        <Form.Fieldset>
          <Form.Input
            value={nameToReplace}
            placeholder='Impersonate Chuck Norris'
            onChange={setNameToReplace}
            name='firstName'
          />
        </Form.Fieldset>
        <Form.Button type='submit'>
          Draw a random {buttonLabelName} Joke
        </Form.Button>
      </Form>
    </div>
  )
}

export default FormContainer
