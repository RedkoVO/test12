import React from 'react'
import cn from 'classnames'

const InputField = ({ input, type, placeholder}) => {

  return (
    <input
      {...input}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default InputField