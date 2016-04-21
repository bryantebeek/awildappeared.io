'use strict';

import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import gutil from 'gulp-util';
import plumber from 'gulp-plumber';
import watchify from 'watchify';
import livereload from 'gulp-livereload';
import onError from '../onError';

export default function () {
    var b = browserify({
        entries: './src/index.jsx',
        debug: true,
        insertGlobals: true,
        extensions: ['.js', '.jsx', '.json'],
        transform: [
            babelify.configure({
                presets: ['es2015', 'react']
            })
        ]
    });

    const bundle = () => {
        return b.bundle()
            .on('error', onError)
            .pipe(source('web.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .on('error', gutil.log)
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./public/'));
    };

    if (gutil.env.watch) {
        b = watchify(b);
        b.on('update', () => {
            return bundle()
                .pipe(livereload({
                    start: true
                }));
        });
    }

    return bundle();
};
