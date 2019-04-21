#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { createDir, createFile } = require('./src/bummar');
const yargs = require('yargs').argv;

const srcArg = yargs.d || 'src';
const targetArg = yargs.t || 'test';

function recursivelyReadDir(dirPath) {
  fs.readdirSync(dirPath)
    .map(item => {
      const currentPath = path.join(dirPath, item);

      if (fs.lstatSync(currentPath).isDirectory()) {
        createDir(currentPath, srcArg, targetArg);
        recursivelyReadDir(currentPath);
        return;
      }

      createFile(currentPath, srcArg, targetArg);
    });
}

function create() {
  if (!fs.existsSync(targetArg)) {
    fs.mkdirSync(targetArg);
  }

  recursivelyReadDir(srcArg);
}

create();

module.exports = {
  create
};
