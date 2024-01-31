// we need to create functions to transpile our scss, so we can build the functions after requiring/importing from the gulp module

// getting all the functions from gulp to use
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

// function to build our styles to css
function buildStyles() {
  // this line will determine the index.scss as the source file, and the css folder will be the destination(dest)
  return src('./shinobi/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('css'));
}

// function to watch any changes made to the index.scss file and then transpiling to css

function watchTask() {
  watch(['./shinobi/**/*.scss', '*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
