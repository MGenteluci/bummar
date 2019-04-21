# Bummar

![build-badge](https://travis-ci.org/MGenteluci/bummar.svg?branch=master)
![codecov](https://codecov.io/gh/MGenteluci/bummar/branch/master/graph/badge.svg)  

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

* -d source folder. _defaults to src_  
* -t target folder. _defaults to test_

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
