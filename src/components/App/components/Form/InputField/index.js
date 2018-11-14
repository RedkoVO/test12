import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const InputField = ({ input, id, className, type, name, placeholder, meta: { touched, error } }) => {
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

InputField.propTypes = {
  classNamees: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
}

export default InputField