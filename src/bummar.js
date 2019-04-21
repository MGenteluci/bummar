const fs = require('fs');
const path = require('path');
const struct = require('..//templates/initial-file-structure');

function createDir(dirPath, srcArg = 'src', targetArg = 'test') {
  const testPath = dirPath.replace(new RegExp(srcArg), targetArg);
  if (fs.existsSync(testPath)) return;

  fs.mkdirSync(testPath);
}

function createFile(filePath, srcArg = 'src', targetArg = 'test') {
  if (path.extname(filePath) !== '.js') return;

  const testPath = filePath.replace(new RegExp(srcArg), targetArg)
    .replace(/.js/, `.spec.js`);
  if (fs.existsSync(testPath)) return;

  const filenameWithoutExt = path.basename(testPath, `.spec.js`);
  fs.writeFileSync(testPath, struct(filenameWithoutExt), { encoding: 'utf8' });
}

module.exports = {
  createDir,
  createFile
};
