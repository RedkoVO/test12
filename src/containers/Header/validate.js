const validate = values => {
  const errors = {}

  if (!values.addressKey) {
    errors.addressKey = 'error.required'
  } else if (values.addressKey.length !== 64) {
    errors.addressKey = 'error.length'
  }

  if (!values.amount) {
    errors.amount = 'error.required'
  }

  return errors
}

export default validate