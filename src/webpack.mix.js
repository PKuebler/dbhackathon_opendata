let mix = require('laravel-mix')

mix.js('assets/js/app.js', './public/js');

mix.copyDirectory(
  'assets/img',
  'public/img'
)

mix.copyDirectory(
  'assets/html',
  'public'
)

mix.setPublicPath('./public');