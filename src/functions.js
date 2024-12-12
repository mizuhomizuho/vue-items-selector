import { COLOR_CLASSES } from '@/constants.js'

export function setPullItem(pull, item, limit = null) {
  const isLimitReached = limit !== null && pull.length >= limit
  if (isLimitReached) {
    alert('Limit reached. To add a new item, please remove an old one first.')
  }
  if (!isLimitReached && pull.findIndex((pullItem) => pullItem.id === item.id) === -1) {
    pull.push(item)
  }
}

export function removePullItem(pull, item) {
  pull.splice(
    pull.findIndex((pullItem) => pullItem.id === item.id),
    1,
  )
}

export function getGoodItems(items) {
  return items.map((item) => ({
    ...item,
    color: COLOR_CLASSES[Math.floor(Math.random() * COLOR_CLASSES.length)],
  }))
}
