import BigNumber from 'bignumber.js'

export const getBigNumberAmount = input => {
  const a = input.split('.',2)[0]
  const b = input.split('.',2)[1]
  let numberB = b ? b : '00000000'
  while (numberB.length < 8) numberB = numberB + '0'
  const amount = new BigNumber(a).multipliedBy('100000000').plus(numberB).multipliedBy('1000000000000')

  return amount
}