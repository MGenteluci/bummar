const struct = require('../../../templates/initial-file-structure');

describe('Initial file structure', () => {
  it('struct; ' +
  'when: Test Parameter sent' +
  'then: return structure with Test Parameter as test\'s title', () => {
    const expected = `const assert = require('assert');

describe('Test Parameter', () => {
  beforeAll(() => {});
  beforeEach(() => {});
  afterEach(() => {});
  afterAll(() => {});

  it('', () => {
    assert.strictEqual(true, true);
  });
});\n`;

    expect(struct('Test Parameter')).toStrictEqual(expected);
  });
});
