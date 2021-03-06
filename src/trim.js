import _defn from './internal/_defn'

/**
 * @name trim
 * @signature String -> String
 * @since v0.13.0
 * @description
 * Returns the string with all leading and trailing whitespace removed.
 *
 * @example
 * trim('  hello  ') // => 'hello'
 */
export default _defn('trim', function (a) {
  return a.trim()
})
