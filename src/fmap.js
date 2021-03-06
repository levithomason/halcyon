import _defn from './internal/_defn'

/**
 * @name fmap
 * @signature Functor f => (a -> b) -> f a -> f b
 * @since v0.13.0
 * @description
 * Lifts a function into a functor. The functor must implement either `fmap` or `map`.
 * @example
 * // Tree is a functor that implements `map` (or `fmap`):
 * class Tree {
 *   constructor (value, left, right) {
 *      this._value = value
 *      this._left = left
 *      this._right = right
 *   }
 *   map (fn) {
 *     return new Tree(
 *       fn(this._value),
 *       this._left && this._left.map(fn),
 *       this._right && this._right.map(fn),
 *     )
 *   }
 * }
 * const tree = new Tree(2, new Tree(1), new Tree(3))
 * fmap(double, tree) // => Tree(4, Tree(2), Tree(6))
 *
 * // Native arrays implement `map`:
 * fmap(double, [1, 2, 3, 4]) // => [2, 4, 6, 8]
 */
export default _defn('fmap', function (fn, functor) {
  if (functor.fmap) return functor.fmap(fn)
  if (functor.map) return functor.map(fn)

  // TODO(zuko): more descriptive error message
  throw new Error('The functor provided to fmap does not implement `map`.')
})
