module.exports = struct = fileName => `const assert = require('assert');

describe('${fileName}', () => {
  beforeAll(() => {});
  beforeEach(() => {});
  afterEach(() => {});
  afterAll(() => {});

  it('', () => {
    assert.strictEqual(true, true);
  });
});\n`;
