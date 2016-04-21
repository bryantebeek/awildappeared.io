'use strict';

import gulp from 'gulp';
import browserify from 'gulp-browserify';
import reactify from 'reactify';
import literalify from 'literalify';
import rename from 'gulp-rename';

export default function () {
  return gulp.src('src/index.js')
    .pipe(browserify({
        debug: true,
        extensions: ['.jsx', '.js', '.json'],
        transform: [reactify, literalify.configure({
            lodash: 'window._',
            moment: 'window.moment',
            react: 'window.React'
        })]
    }))
    .on('error', (err) => {
        gutil.log(err.message);
    })
    .pipe(rename('web.js'))
    .pipe(gulp.dest('public'))
};
