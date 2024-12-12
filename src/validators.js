export function validateBoxItems(items) {
  return items.every(isBoxItemValid)
}

export function isBoxItemValid({ id, name, color }) {
  return isNumber(id) && isNotEmptyString(name) && isNotEmptyString(color)
}

export function isNumber(value) {
  return typeof value === 'number'
}

function isNotEmptyString(value) {
  return isString(value) && value.length > 0
}

function isString(value) {
  return typeof value === 'string'
}
