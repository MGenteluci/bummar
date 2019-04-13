#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const struct = require('./templates/initial-file-structure');

function createDir(dirPath) {
  const testPath = dirPath.replace(/src/, 'test');
  if (fs.existsSync(testPath)) return;

  fs.mkdirSync(testPath);
}

function createFile(filePath) {
  const testPath = filePath.replace(/src/, 'test').replace(/.js/, '.spec.js');
  if (fs.existsSync(testPath)) return;

  const fileName = path.basename(testPath, '.spec.js');

  fs.writeFileSync(testPath, struct(fileName), { encoding: 'utf8' });
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

function generate() {
  if (!fs.existsSync(`${__dirname}/test`)) {
    fs.mkdirSync(`${__dirname}/test`);
  } 

  recursivelyReadDir(path.join(__dirname, 'src'), '');
}

generate();
