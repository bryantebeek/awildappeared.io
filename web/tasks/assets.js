'use strict';

import gulp from 'gulp';

export default function () {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('public/assets'));
};
