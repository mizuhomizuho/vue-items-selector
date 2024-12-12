
export function validateBoxItems(items) {
  return items.every(isBoxItemValid)
}

export function isBoxItemValid({ id, name }) {
  return isNumber(id) && isNotEmptyString(name)
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

function isString(value) {
  return typeof value === 'string'
}

function isNumber(value) {
  return typeof value === 'number'
}
