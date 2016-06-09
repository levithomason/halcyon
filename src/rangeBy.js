import _curry3 from './internal/_curry3'

var rangeBy = _curry3(function rangeBy (inc, i, end) {
  var ys = []

  for (; i < end; i += inc) {
    ys.push(i)
  }
  return ys
})

export default rangeBy