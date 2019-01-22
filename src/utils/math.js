import BigNumber from 'bignumber.js'

export const getBigNumberAmount = input => {
  const a = input.split('.', 2)[0]
  const b = input.split('.', 2)[1]
  let numberB = b ? b : '00000000'
  while (numberB.length < 8) numberB = numberB + '0'
  const amount = new BigNumber(a)
    .multipliedBy('100000000')
    .plus(numberB)
    .multipliedBy('1000000000000')
    .multipliedBy('10000000000')

  return amount
}

export const shortBalance = balance => {
  let input = balance
  if (input.length <= 22) {
    input = '0.0'
  } else {
    input = input.slice(0, -22)
    if (input.length <= 8) {
      input = '0.' + ('00000000' + input).slice(-8)
    } else {
      input = input.slice(0, -8) + '.' + input.slice(-8)
    }
    while (input[input.length - 1] === '0') input = input.slice(0, -1)
    if (input[input.length - 1] === '.') input += '0'
  }
  return input
}
