const mutiny = require('mutiny');
const gh = require('jsdoc-githubify');
const fs = require('fs');

mutiny(
  { outdir: './docs/', transform: [gh], rename: file => `${file}.gh` },
  { root: './docs/', fileFilter: 'module*.html' },
);

fs.readdir('./docs/motor-hat/1.0.0-semanticrelease', (err, files) => {
  files.forEach((file) => {
    if (file.indexOf('.gh')) {
      fs.rename(
        `./docs/motor-hat/1.0.0-semanticrelease/${file}`,
        `./docs/motor-hat/1.0.0-semanticrelease/${file.replace('.gh', '')}`,
        () => {},
      );
    }
  });
});
