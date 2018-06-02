/**
 * created by snowdrop on 2018/6/2
 */

const Bundler = require('../../src/Bundler');
const path = require('path');
const file = path.join(__dirname, '..', './page/index.html');

const bundler = new Bundler(file, {
  production: true,
  outDir: './dist',
  publicURL: './js/'
});

const main = async () => {
  const bundle = await bundler.bundle();
  await bundle;
  // await bundler.serve(8080);
};

main();
