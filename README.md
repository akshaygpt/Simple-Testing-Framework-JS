# Simple-Testing-Framework-JS

An attempt to mimic the behaviour of JavaScript testing libraries like `Jest`.

To use:
```js
import {test, expect} from 'path/to/lib.js'

test('title', () => {
  expect(/* something */).toBe(/* somethingElse */)
})
```

See example in the `example` directory.

Inspired by Kent C Dodds' course on Testing in JS.
