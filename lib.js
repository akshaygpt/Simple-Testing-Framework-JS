function expect(actual) {
  return {
    toBe: (expected) => {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}

function test(title, callback) {
  try {
    callback()
    console.log(`✔ ${title}`)
  } catch(err) {
    console.error(`✗ ${title}`)
    console.error(err)
  }
}

export {
  test,
  expect
}