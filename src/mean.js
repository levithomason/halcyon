import _defn from './internal/_defn'
import sum from './sum'

/**
 * @name mean
 * @signature [Number] -> Number
 * @since v0.14.0
 * @description
 * Returns the mean (average) of all numbers in a list.
 *
 * @example
 * mean([1, 2, 3, 4, 5, 6]) // => 3.5
 */
export default _defn('mean', function (xs) {
  if (!xs.length) {
    throw new Error('Cannot calculate the mean of an empty list.')
  }
  return sum(xs) / xs.length
})
