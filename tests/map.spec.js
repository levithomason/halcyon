const test    = require('ava')
    , sinon   = require('sinon')
    , { map } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(map.length, 2)
})

test('is curried', (t) => {
  t.is(typeof map(() => {}), 'function')
})

// Lists
// ------------------------------------
test('List => returns a new list where each element has been transformed in place', (t) => {
  t.deepEqual(map(x => x * 2, [1, 2, 3, 4, 5]), [2, 4, 6, 8, 10])
})

test('List => provides a single argument (the element) to the transformer', (t) => {
  const spy = sinon.spy()

  map(spy, [1, 2, 3])
  t.deepEqual(spy.firstCall.args, [1])
  t.deepEqual(spy.secondCall.args, [2])
  t.deepEqual(spy.thirdCall.args, [3])
})

test('List => returns a new list even if the result is identical', (t) => {
  const arr = [1, 2, 3]
      , res = map(x => x, arr)

  t.deepEqual(arr, [1, 2, 3])
  t.deepEqual(res, [1, 2, 3])
  t.not(arr, res)
})

// Objects
// ------------------------------------
test('Object => maps over objects', (t) => {
  t.deepEqual(map(x => x * 2, { a: 1, b: 2, c: 3 }), { a: 2, b: 4, c: 6 })
})

test('Object => calls the transformer with a single argument: value', (t) => {
  const spy = sinon.spy()
  map(spy, { a: 1 })
  t.true(spy.calledWithExactly(1))
})

test('Object => transforms own enumerable properties', (t) => {
  t.deepEqual(
    map(x => x * 2, { a: 1, b: 2 }),
    { a: 2, b: 4 })
})

test('Object => ignores inherited properties', (t) => {
  function A () {}
  A.prototype.foo = () => {}
  const a = new A()
  a.bar = 5

  t.deepEqual(map(x => x * 2, a), { bar: 10 })
})

test('Object => always returns a new object', (t) => {
  const obj = { a: 1, b: 2, c: 3 }
      , res = map(x => x, obj)

  t.deepEqual(res, obj) // compare values
  t.not(res, obj)       // compare references
})

