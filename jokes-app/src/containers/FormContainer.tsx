import React, { useContext } from 'react'
import { Context } from '../context/GlobalContextProvider'
import { Form } from '../component'
import categoriesData from '../utils/categoriesData'

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
    <Form onSubmit={handleSubmit}>
      <Form.Fieldset>
        <Form.Select name='category' value={category} onChange={setCategory}>
          {categoriesData.map((cat) => (
            <React.Fragment key={cat.id}>
              <option value={cat.name}>{cat.name}</option>
            </React.Fragment>
          ))}
        </Form.Select>
      </Form.Fieldset>
      <Form.Fieldset>
        <Form.Input
          type='text'
          value={nameToReplace}
          placeholder='Impersonate Chuck Norris'
          onChange={setNameToReplace}
        />
      </Form.Fieldset>
      <Form.Button type='submit'>
        Draw a random {buttonLabelName} Joke
      </Form.Button>
    </Form>
  )
}

export default FormContainer
