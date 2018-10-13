const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'error.required'
  }

  return errors
}

export default validate