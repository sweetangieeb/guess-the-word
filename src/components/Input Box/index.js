import * as React from 'react'
import { usePinInput } from 'react-pin-input-hook'
import './InputBox.css';

export function InputBox(answer) {
  const [values, setValues] = React.useState(Array(6).fill(''))
  const { fields } = usePinInput({
    values,
    type: 'alphanumeric',
    placeholder: '',
    onChange: (values) => {
      setValues(values)
    },
  })

  console.warn('fields: ', fields)

  return (
    <div className='pin-input'>
      {fields.map((propsField, index) => (
        <input key={index} className='pin-input__field' {...propsField} />
      ))}
    </div>
  )
}