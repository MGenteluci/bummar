# Bummar

Bummar is a module to create test files base on your source dir.

## Installation
```js
npm i -g bummar
```

# Usage

**Simplest use**  
generate for every .js in your src folder a .spec.js in folder test.

```shell
bummar
```

**Arguments**

* `-d` source folder. `default to src`
* `-t` target folder. `default to test`

**Initial structure**  
```js
const assert = require('assert');

describe('{fileName}', () => {
  beforeAll(() => {});
  beforeEach(() => {});
  afterEach(() => {});
  afterAll(() => {});

  it('', () => {
    assert.strictEqual(true, true);
  });
});
```
