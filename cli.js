#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yargs = require('yargs').argv;
const struct = require('./templates/initial-file-structure');

const srcArg = yargs.d || 'src';
const targetArg = yargs.t || 'test';

function createDir(dirPath) {
  const testPath = dirPath.replace(new RegExp(srcArg), targetArg);
  if (fs.existsSync(testPath)) return;

  fs.mkdirSync(testPath);
}

function createFile(filePath) {
  if (path.extname(filePath) !== '.js') return;

  const testPath = filePath.replace(new RegExp(srcArg), targetArg)
    .replace(/.js/, `.spec.js`);
  if (fs.existsSync(testPath)) return;

  const filenameWithoutExt = path.basename(testPath, `.spec.js`);
  fs.writeFileSync(testPath, struct(filenameWithoutExt), { encoding: 'utf8' });
}

function recursivelyReadDir(dirPath) {
  fs.readdirSync(dirPath)
    .map(item => {
      const currentPath = path.join(dirPath, item);

      if (fs.lstatSync(currentPath).isDirectory()) {
        createDir(currentPath);
        recursivelyReadDir(currentPath);
        return;
      }

      createFile(currentPath);
    });
}

(() => {
  if (!fs.existsSync(targetArg)) {
    fs.mkdirSync(targetArg);
  }

  recursivelyReadDir(srcArg);
})();

module.exports = {
  createDir
};
