module.exports = function(input, fallback){
  try {
    return JSON.parse(input)
  } catch(err) {
    return fallback || undefined
  }
}
