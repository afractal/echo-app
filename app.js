
const browserSync = require('browser-sync');

browserSync({
  server: './app.js',
  serveStatic: ['./'],
  files: [
    'index.html',
    'index.css',
    'index.js',
    'particles.json'
  ]
});
