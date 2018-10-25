import React from 'react'
import cn from 'classnames'

const InputField = ({ input, id, className, type, name, placeholder, meta: { touched, error }}) => {
  const wpInput = cn(className, { 'input-error': touched && error })

  return (
    <input
      {...input}
      id={id}
      name={name}
      type={type}
      className={wpInput}
      placeholder={placeholder}
    />
  )
}

export default InputField