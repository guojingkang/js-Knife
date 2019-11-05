const del = require('del');
const { src, dest } = require('gulp');
const babel = require('gulp-babel');

function clean() {
  return del('lib');
};

function build(cb){
  return src(['src/**/*'])
  .pipe(babel())
  .pipe(dest('lib/'));
}


exports.build = build;
exports.clean = clean;