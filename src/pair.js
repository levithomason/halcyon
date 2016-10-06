import _curry2 from './internal/_curry2'

/**
 * pair : a -> b -> [a, b]
 *
 * @since v0.13.0
 */
export default _curry2(function pair (a, b) {
  return [a, b]
})