var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var streamify = require('gulp-streamify');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var dest = require('gulp-dest');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var tsify = require('tsify');
var webserver = require('gulp-webserver');

var production = process.env.NODE_ENV === 'production';

var dependencies = [
    'react',
    'react-dom',
    'react-router',
    'underscore',
    'd3',
    'jquery'
];

var config = {
    js: {
        vendor: {
            name: 'vendor.bundle.js',
            output: 'public/js'
        },
        custom: {
            input: 'app/main.tsx',
            name: 'bundle.js',
            output: 'public/js'
        }
    }
};

/*
 |--------------------------------------------------------------------------
 | Compile third-party dependencies separately for faster performance.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify-vendor', function() {
    return browserify([])
        .require(dependencies)
        .bundle()
        .pipe(source(config.js.vendor.name))
        .pipe(gulpif(production, streamify(uglify({ mangle: false }))))
        .pipe(gulp.dest(config.js.vendor.output));
});

/*
 |--------------------------------------------------------------------------
 | Compile only project files, excluding all third-party dependencies.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify', function() {
    var bundle = browserify();
    if(!production) {
        bundle.external(dependencies);
    }

    bundle.add('./app/main.tsx')
        .plugin(tsify, {
            noImplicitAny: true,
            module: 'commonjs',
            jsx: 'react'
        })
        .transform(babelify, {
            extensions: [ '.tsx', '.ts' ],
            presets: ['es2015', 'react'],
            plugins: [['resolver', { resolveDirs: ['./app'] }]]
        });

    if(production) {
        bundle.transform({
            global: true
        }, 'uglifyify')
    }

    return bundle.bundle()
        .pipe(source(config.js.custom.name))
        .on('error', function (error) { console.error(error.toString()); })
        .pipe(gulp.dest(config.js.custom.output));
});

/*
 |--------------------------------------------------------------------------
 | Same as browserify task, but will also watch for changes and re-compile.
 |--------------------------------------------------------------------------
 */
gulp.task('browserify-watch', function() {

    gulp.watch(['app/**/*.ts', 'app/**/*.tsx'], ['browserify']);
});

/*
 |--------------------------------------------------------------------------
 | Compile SCSS stylesheets.
 |--------------------------------------------------------------------------
 */
gulp.task('styles', function() {
    return gulp.src('app/stylesheets/index.scss')
        .pipe(plumber()
            .on('error', function(err){
                gutil.log(gutil.colors.red(err.toString()));
                this.emit('end');
            })
        )
        .pipe(
            sass().on('error', function(err){
                gutil.log(gutil.colors.red(err.toString()));
                this.emit('end');
            })
        )
        .pipe(gulpif(production, cssmin()))
        .pipe(rename('bundle.css'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('styles-watch', function() {
    gulp.watch('app/stylesheets/**/*.scss', ['styles']);
});

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: {
                enable: true,
                filter: function (fileName) {
                    return true;
                }
            },
            directoryListing: true,
            open: 'http://127.0.0.1:8000/public/index.html'
        }));
});

gulp.task('default', ['styles', 'browserify', 'browserify-vendor', 'browserify-watch', 'styles-watch', 'webserver']);
gulp.task('build', ['styles', 'vendor', 'browserify-vendor', 'browserify']);