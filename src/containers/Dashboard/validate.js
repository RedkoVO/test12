const validate = values => {
  const errors = {}

  if (!values.addressKey) {
    errors.addressKey = 'error.required'
  } else if (values.addressKey.length !== 60) {
    errors.addressKey = 'error.length'
  }

  if (!values.amount) {
    errors.amount = 'error.required'
  } else if (!/^\d{1,19}(\.\d{1,8})?$/.test(values.amount)) {
    errors.amount = 'error.amount'
  }

  return errors
}

export default validate