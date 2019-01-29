import blake from 'blakejs'
import nacl from './nacl'
import BigNumber from 'bignumber.js'

/** Hex Functions **/
function hexToUint4(hexValue) {
  const uint4 = new Uint8Array(hexValue.length)
  for (let i = 0; i < hexValue.length; i++)
    uint4[i] = parseInt(hexValue.substr(i, 1), 16)

  return uint4
}
function hexToUint8(hexValue) {
  const length = (hexValue.length / 2) | 0
  const uint8 = new Uint8Array(length)
  for (let i = 0; i < length; i++)
    uint8[i] = parseInt(hexValue.substr(i * 2, 2), 16)

  return uint8
}

/** Uint4 Functions **/
function uint4ToUint8(uintValue) {
  const length = uintValue.length / 2
  const uint8 = new Uint8Array(length)
  for (let i = 0; i < length; i++)
    uint8[i] = uintValue[i * 2] * 16 + uintValue[i * 2 + 1]

  return uint8
}

function uint4ToUint5(uintValue) {
  var length = (uintValue.length / 5) * 4
  var uint5 = new Uint8Array(length)
  for (let i = 1; i <= length; i++) {
    let n = i - 1
    let m = i % 4
    let z = n + (i - m) / 4
    let right = uintValue[z] << m
    let left
    if ((length - i) % 4 === 0) left = uintValue[z - 1] << 4
    else left = uintValue[z + 1] >> (4 - m)
    uint5[n] = (left + right) % 32
  }
  return uint5
}

function uint4ToHex(uint4) {
  var hex = ''
  for (let i = 0; i < uint4.length; i++)
    hex += uint4[i].toString(16).toUpperCase()
  return hex
}

/** Uint5 Functions **/
function uint5ToString(uint5) {
  const letter_list = '13456789abcdefghijkmnopqrstuwxyz'.split('')
  let string = ''
  for (let i = 0; i < uint5.length; i++) string += letter_list[uint5[i]]

  return string
}

function uint5ToUint4(uint5) {
  var length = (uint5.length / 4) * 5
  var uint4 = new Uint8Array(length)
  for (let i = 1; i <= length; i++) {
    let n = i - 1
    let m = i % 5
    let z = n - (i - m) / 5
    let right = uint5[z - 1] << (5 - m)
    let left = uint5[z] >> m
    uint4[n] = (left + right) % 16
  }
  return uint4
}

/** Uint8 Functions **/
function uint8ToHex(uintValue) {
  let hex = ''
  let aux
  for (let i = 0; i < uintValue.length; i++) {
    aux = uintValue[i].toString(16).toUpperCase()
    if (aux.length === 1) aux = '0' + aux
    hex += aux
    aux = ''
  }

  return hex
}

function uint8ToUint4(uintValue) {
  const uint4 = new Uint8Array(uintValue.length * 2)
  for (let i = 0; i < uintValue.length; i++) {
    uint4[i * 2] = (uintValue[i] / 16) | 0
    uint4[i * 2 + 1] = uintValue[i] % 16
  }

  return uint4
}

/** Dec Functions **/
function decToHex(decValue, bytes = null) {
  var dec = decValue.toString().split(''),
    sum = [],
    hex = '',
    hexArray = [],
    i,
    s
  while (dec.length) {
    s = 1 * dec.shift()
    for (i = 0; s || i < sum.length; i++) {
      s += (sum[i] || 0) * 10
      sum[i] = s % 16
      s = (s - sum[i]) / 16
    }
  }
  while (sum.length) {
    hexArray.push(sum.pop().toString(16))
  }

  hex = hexArray.join('')
  if (hex.length % 2 !== 0) hex = '0' + hex

  if (bytes > hex.length / 2) {
    var diff = bytes - hex.length / 2
    for (var j = 0; j < diff; j++) hex = '00' + hex
  }

  return hex
}

/** String Functions **/
function stringToUint5(string) {
  var letter_list = '13456789abcdefghijkmnopqrstuwxyz'.split('')
  var length = string.length
  var string_array = string.split('')
  var uint5 = new Uint8Array(length)
  for (let i = 0; i < length; i++)
    uint5[i] = letter_list.indexOf(string_array[i])
  return uint5
}

/** Account Functions **/
function generateAccountSecretKeyBytes(seedBytes, accountIndex) {
  const accountBytes = hexToUint8(decToHex(accountIndex, 4))
  const context = blake.blake2bInit(32)
  blake.blake2bUpdate(context, seedBytes)
  blake.blake2bUpdate(context, accountBytes)
  const newKey = blake.blake2bFinal(context)

  return newKey
}

function generateAccountKeyPair(accountSecretKeyBytes) {
  return nacl.sign.keyPair.fromSecretKey(accountSecretKeyBytes)
}

function getPublicAccountID(accountPublicKeyBytes) {
  const util = {
    hex: {
      toUint4: hexToUint4,
      fromUint8: uint8ToHex,
      toUint8: hexToUint8
    },
    uint4: {
      toUint5: uint4ToUint5,
      toUint8: uint4ToUint8
    },
    uint5: {
      toString: uint5ToString
    },
    uint8: {
      toUint4: uint8ToUint4,
      fromHex: hexToUint8,
      toHex: uint8ToHex
    }
  }

  const accountHex = util.uint8.toHex(accountPublicKeyBytes)
  const keyBytes = util.uint4.toUint8(util.hex.toUint4(accountHex)) // For some reason here we go from u, to hex, to 4, to 8??
  const checksum = util.uint5.toString(
    util.uint4.toUint5(
      util.uint8.toUint4(blake.blake2b(keyBytes, null, 5).reverse())
    )
  )
  const account = util.uint5.toString(
    util.uint4.toUint5(util.hex.toUint4(`0${accountHex}`))
  )

  return `${account}${checksum}`
}

function getAccountPublicKey(account) {
  // if (
  //   (!account.startsWith('dcb_1') && !account.startsWith('dcb_3')) ||
  //   account.length !== 64
  // )
  //   throw new Error(`Invalid NANO Account`)
  const account_crop = account
  const isValid = /^[13456789abcdefghijkmnopqrstuwxyz]+$/.test(account_crop)
  if (!isValid) throw new Error(`Invalid NANO account`)

  const key_uint4 = array_crop(
    uint5ToUint4(stringToUint5(account_crop.substring(0, 52)))
  )
  const hash_uint4 = uint5ToUint4(stringToUint5(account_crop.substring(52, 60)))
  const key_array = uint4ToUint8(key_uint4)
  const blake_hash = blake.blake2b(key_array, null, 5).reverse()

  if (!equal_arrays(hash_uint4, uint8ToUint4(blake_hash)))
    throw new Error(`Incorrect checksum`)

  return uint4ToHex(key_uint4)
}

/**
 * Conversion functions
 */
const mnano = 1000000000000000000000000000000
const knano = 1000000000000000000000000000
const nano = 1000000000000000000000000
function mnanoToRaw(value) {
  return new BigNumber(value).times(mnano)
}
function knanoToRaw(value) {
  return new BigNumber(value).times(knano)
}
function nanoToRaw(value) {
  return new BigNumber(value).times(nano)
}
function rawToMnano(value) {
  return new BigNumber(value).div(mnano)
}
function rawToKnano(value) {
  return new BigNumber(value).div(knano)
}
function rawToNano(value) {
  return new BigNumber(value).div(nano)
}

function array_crop(array) {
  var length = array.length - 1
  var cropped_array = new Uint8Array(length)
  for (let i = 0; i < length; i++) cropped_array[i] = array[i + 1]
  return cropped_array
}

function equal_arrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false
  }
  return true
}

function generateSeedBytes() {
  return nacl.randomBytes(32)
}

const fromUint8 = uint8ToHex
const toUint8 = hexToUint8

/**
 * Registration
 */

function generateNewAccount() {
  const seedBytes = generateSeedBytes()
  const secretKeyBytes = generateAccountSecretKeyBytes(seedBytes, 0)
  const keyPair = generateAccountKeyPair(secretKeyBytes)
  const publicKeyBytes = keyPair.publicKey
  const address = getPublicAccountID(publicKeyBytes)

  //const seedHex = fromUint8(seedBytes);
  const secretKeyHex = fromUint8(secretKeyBytes)
  //const publicKeyHex = fromUint8(publicKeyBytes);

  const newAccount = {
    address: address,
    secretKey: secretKeyHex
  }

  return newAccount
}

/**
 * Login functions
 */

function accountFromSecret(secretKey) {
  const pair = generateAccountKeyPair(toUint8(secretKey))
  const publicKey = fromUint8(pair.publicKey)
  const address = getPublicAccountID(pair.publicKey)

  // TODO request balance and last block
  const account = {
    address: address,
    publicKey: publicKey,
    secretKey: secretKey,
    representative:
      'dcb_1dcbabuebyrdidjti9sy414da86qa47k5snqo44g54qs86994u6gnpjxm7ga'
  }
  return account
}

/**
 * Signing functions
 */

function formSendBlock(account, toAddress, amount, work, currencyInfo) {
  // TODO check amount < balance

  // calc new balance
  const newBalance = currencyInfo.balance.minus(amount)
  let newBalance16 = newBalance.toString(16)
  while (newBalance16.length < 32) newBalance16 = '0' + newBalance16 // Left pad with 0's

  const typeBytes = new Uint8Array([1]) // send = 1, receive = 2
  const currBytes = new Uint8Array([
    currencyInfo.code & 255,
    currencyInfo.code >> 8
  ])

  // calc hash of block data
  const context = blake.blake2bInit(32, null)
  blake.blake2bUpdate(context, typeBytes)
  blake.blake2bUpdate(context, toUint8(account.publicKey))
  blake.blake2bUpdate(context, toUint8(currencyInfo.lastBlock))
  blake.blake2bUpdate(context, currBytes)
  blake.blake2bUpdate(context, toUint8(newBalance16))
  blake.blake2bUpdate(context, toUint8(getAccountPublicKey(toAddress)))
  const hashBytes = blake.blake2bFinal(context)

  console.log(fromUint8(hashBytes))

  // calc signature
  const signed = nacl.sign.detached(hashBytes, toUint8(account.secretKey))
  const signature = fromUint8(signed)

  const sendBlock = {
    type: 'send',
    creator: account.address,
    previous: currencyInfo.lastBlock,
    amount: amount.toString(10),
    link: getAccountPublicKey(toAddress),
    work: work,
    currency: currencyInfo.currency,
    signature: signature
  }
  return sendBlock
}

function formReceiveBlock(
  account,
  sourceBlockHash,
  amount,
  work,
  currencyInfo
) {
  // different algo for open blocks
  // calc new balance
  const newBalance = currencyInfo.balance.plus(amount)
  let newBalance16 = newBalance.toString(16)
  while (newBalance16.length < 32) newBalance16 = '0' + newBalance16 // Left pad with 0's

  const typeBytes = new Uint8Array([2]) // send = 1, receive = 2
  const currBytes = new Uint8Array([
    currencyInfo.code & 255,
    currencyInfo.code >> 8
  ])

  // calc hash of block data
  const context = blake.blake2bInit(32, null)
  blake.blake2bUpdate(context, typeBytes)
  blake.blake2bUpdate(context, toUint8(account.publicKey))
  blake.blake2bUpdate(context, toUint8(currencyInfo.lastBlock))
  blake.blake2bUpdate(context, currBytes)
  blake.blake2bUpdate(context, toUint8(newBalance16))
  blake.blake2bUpdate(context, toUint8(sourceBlockHash))
  const hashBytes = blake.blake2bFinal(context)

  console.log(fromUint8(hashBytes))

  // calc signature
  const signed = nacl.sign.detached(hashBytes, toUint8(account.secretKey))
  const signature = fromUint8(signed)
  const receiveBlock = {
    type: 'receive',
    creator: account.address,
    previous: currencyInfo.lastBlock,
    currency: currencyInfo.currency,
    amount: amount.toString(10),
    link: sourceBlockHash,
    work: work,
    signature: signature
  }
  return receiveBlock
}

const crypto = {
  hex: {
    toUint4: hexToUint4,
    fromUint8: uint8ToHex,
    toUint8: hexToUint8
  },
  uint4: {
    toUint5: uint4ToUint5,
    toUint8: uint4ToUint8
  },
  uint5: {
    toString: uint5ToString
  },
  uint8: {
    toUint4: uint8ToUint4,
    fromHex: hexToUint8,
    toHex: uint8ToHex
  },
  dec: {
    toHex: decToHex
  },
  account: {
    accountFromSecret: accountFromSecret,
    generateNewAccount: generateNewAccount,
    generateAccountSecretKeyBytes: generateAccountSecretKeyBytes,
    generateAccountKeyPair: generateAccountKeyPair,
    getPublicAccountID: getPublicAccountID,
    generateSeedBytes: generateSeedBytes,
    getAccountPublicKey: getAccountPublicKey
  },
  sign: {
    formSendBlock: formSendBlock,
    formReceiveBlock: formReceiveBlock
  },
  nano: {
    mnanoToRaw: mnanoToRaw,
    knanoToRaw: knanoToRaw,
    nanoToRaw: nanoToRaw,
    rawToMnano: rawToMnano,
    rawToKnano: rawToKnano,
    rawToNano: rawToNano
  }
}

// module.exports = crypto;
export default crypto
