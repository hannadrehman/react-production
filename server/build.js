const shell = require('child_process').execSync;

const src = './src';
const dist = '../dist';

shell(`rm -rf ${dist}`);
shell(`mkdir -p ${dist}`);
shell(`cp -r ${src}/* ${dist}`);
shell(`cp -r package.prod.json ${dist}/package.json`);

console.log('build complete'); // eslint-disable-line
