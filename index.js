/**
 * Complicated things ahead!
 */
module.exports = function(input, fallback){
  try {
    return JSON.parse(input)
  } catch(err) {
    if (fallback instanceof Error) {
      throw fallback
    }

    return fallback || undefined
  }
}
