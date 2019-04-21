const bummar = require('../../../src/bummar');
const struct = require('../../../templates/initial-file-structure');
const fs = require('fs');

jest.mock('fs');
jest.mock('../../../templates/initial-file-structure');

describe('bummar', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  it('createDir; ' +
  'when: directory already exists; ' +
  'then: don\'t create directory', () => {
    fs.existsSync.mockReturnValue(true);

    bummar.createDir('/src/file.js');
    expect(fs.existsSync).toBeCalledWith('/test/file.js');
    expect(fs.mkdirSync).not.toBeCalled();
  });

  it('createDir; ' +
  'when: directory doesn\'t exists; ' +
  'then: create directory', () => {
    fs.existsSync.mockReturnValue(false);

    bummar.createDir('/src/file.js');
    expect(fs.existsSync).toBeCalledWith('/test/file.js');
    expect(fs.mkdirSync).toBeCalledWith('/test/file.js');
  });

  it('createFile; ' +
  'when: file extension isn\'t .js; ' +
  'then: don\'t create file', () => {
    bummar.createFile('file.ola');
    expect(fs.writeFileSync).not.toBeCalled();
  });

  it('createFile; ' +
  'when: file extension is .js && file already created; ' +
  'then: don\'t create file', () => {
    fs.existsSync.mockReturnValue(true);

    bummar.createFile('src/file.js');
    expect(fs.existsSync).toBeCalledWith('test/file.spec.js');
    expect(fs.writeFileSync).not.toBeCalled();
  });

  it('createFile; ' +
  'when: file extension is .js && file doesn\'t exists; ' +
  'then: create file', () => {
    fs.existsSync.mockReturnValue(false);
    struct.mockReturnValue('structure');

    bummar.createFile('src/file.js');
    expect(fs.existsSync).toBeCalledWith('test/file.spec.js');
    expect(fs.writeFileSync).toBeCalledWith('test/file.spec.js', 'structure', { encoding: 'utf8' });
  });
});
