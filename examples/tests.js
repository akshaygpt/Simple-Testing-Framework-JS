import {test, expect} from '../lib.js'
import {sum, buggySum} from './functions.js'

// example of a test that passed
test('Sum should add', () => {
  const actual = sum(1, 2)
  const expected = 3
  expect(actual).toBe(expected)
})

// example of a test that fails (since we use buggySum)
test('Sum should add', () => {
  const actual = buggySum(1, 2)
  const expected = 3
  expect(actual).toBe(expected)
})