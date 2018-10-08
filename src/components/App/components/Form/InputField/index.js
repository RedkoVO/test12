import React from 'react'

const InputField = ({ input, id, className, type, name, placeholder}) => {

  return (
    <input
      {...input}
      id={id}
      name={name}
      type={type}
      className={className}
      placeholder={placeholder}
    />
  )
}

export default InputField