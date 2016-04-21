'use strict';

import gulp from 'gulp';
import html from './tasks/html';
import assets from './tasks/assets';
import scripts from './tasks/scripts';

gulp.task('html', html);
gulp.task('assets', assets);
gulp.task('scripts', scripts);

gulp.task('default', ['html', 'assets', 'scripts']);
