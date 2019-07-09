const gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    config = {
        root: './app/',
        css: {
            watchLess: 'precss/**/*.less',
            watchCss: 'precss/**/*.css',
            src: 'precss/styles.less',
            dest: 'css'
        },
        html: '*.html',
        js: {
            src: 'prejs/**/*.js',
            dest: 'js'
        }
    },
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
    rename = require("gulp-rename"),
    less = require('gulp-less'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    terser = require('gulp-terser');


gulp.task('buildCSS', function (done) {
    gulp.src(config.root + config.css.src)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.root + config.css.dest))

        .pipe(browserSync.reload({
            stream: true
        }));
    done();
});

gulp.task('buildJS', function (done) {
    gulp.src(config.root + config.js.src)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(terser({
            ie8: true
        }))
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.root + config.js.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
    done();
});

gulp.task('watch:styles', function () {
    gulp.watch(config.root + config.css.watchLess, gulp.series('buildCSS')); //берет ./src/precss/**/*.css делает с ним 'buildCSS' + можно еще что-то после buildCSS добавить
    gulp.watch(config.root + config.css.watchCss, gulp.series('buildCSS'));
});
gulp.task('watch:html', function () {
    gulp.watch(config.root + config.html).on('change', browserSync.reload);
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: config.root
        },
        // tunnel: true
    });
});

gulp.task('watch', gulp.series('buildCSS', gulp.parallel('watch:styles', 'watch:html', 'browser-sync')));