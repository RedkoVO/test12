const validate = values => {
  const errors = {}

  if (!values.key) {
    errors.key = 'error.required'
  } else if (values.key.length !== 64) {
    errors.key = 'error.length'
  }

  return errors
}

export default validate