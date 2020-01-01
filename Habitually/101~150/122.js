function arrayToObj(array) {
  let obj = {}
  array.forEach(v => {
    obj[v[0]] = v[1]
  })
  return obj
}

arrayToObj(['tom', 'watson'], ['harry', 'potter']])