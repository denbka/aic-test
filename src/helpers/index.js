const crypto = require('crypto')

export const generateID = () => {
  return crypto.randomBytes(8).toString('hex')
}

export const isEqual = (object1, object2) => {
  return JSON.stringify(object1) === JSON.stringify(object2)
}

export const cloneObject = (object) => {
  return JSON.parse(JSON.stringify(object))
}