const path = require('path');
const fannypack = require('policygenius-fannypack');

const config = fannypack.devConfig({
  name: 'vault',
  baseDirectoryPath: path.resolve('./app'),
  buildDirectoryPath: path.resolve('./build'),
});

module.exports = config;
