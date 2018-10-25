const validate = values => {
  const errors = {}

  if (!values.addressKey) {
    errors.addressKey = 'error.required'
  } else if (values.addressKey.length !== 64) {
    errors.addressKey = 'error.length'
  }

  if (!values.amount) {
    errors.amount = 'error.required'
  } else if (!/^[+-]?\d+(\.\d+)?$/.test(values.amount)) {
    errors.amount = 'error.amount'
  }

  return errors
}

export default validate