'use strict';

import gulp from 'gulp';

export default function () {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('public'));
};
