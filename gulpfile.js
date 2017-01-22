let gulp = require('gulp');
let eslint = require('gulp-eslint');
let mocha = require('gulp-mocha');
let nodemon = require('gulp-nodemon');
let watch = require('gulp-watch');
let plumber = require('gulp-plumber');
let istanbul = require('gulp-istanbul');

gulp.task('start', (cb) => {
    require('./src/server/purServer.js');
    process.on('SIGINT', () => {
        process.exit();
        cb();
    });
});

gulp.task('restart', () => {
    let stream = nodemon({
        script: 'src/server/purServer.js',
        exec: 'node-inspector & node --debug',
        watch: 'src',
        ext: 'js json'
    }).on('restart', () => {
        console.log('restarted');
    });
    return stream;
});

gulp.task('debug', () => {
    let stream = nodemon({
        script: 'src/server/purServer.js',
        exec: 'node-inspector & node --debug'
    });
    return stream;
});

gulp.task('eslint', () => {
    return gulp.src(['src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('pre-test', ['eslint'], () => {
    return gulp.src([
        './src/**/*.js',
        '!./src/**/*.spec.js'
    ])
        .pipe(istanbul({
            includeUntested: true
        }))
        .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], (cb) => {
    let mochaErr;
    gulp.src(['./src/**/*.spec.js'], {
        read: false
    })
        .pipe(mocha({
            reporter: 'spec',
            timeout: 2000
        }))
        .on('error', (err) => {
            mochaErr = err;
        })
        .pipe(istanbul.writeReports())
        .on('end', () => {
            cb(mochaErr);
        });
});

gulp.task('test-watch', () => {
    watch(['./src/**/*.spec.js', './src/**/*.js'], (cb) => {
        gulp.src(['./src/**/*.spec.js'], {
            read: false
        })
            .pipe(plumber())
            .pipe(mocha({
                reporter: 'spec',
                timeout: 2000
            }));
    });
});

gulp.task('test-no-timeout', () => {
    gulp.src(['./src/**/*.spec.js'], {
        read: false
    })
        .pipe(mocha({
            reporter: 'spec',
            timeout: 400000
        }));
});

gulp.task('default', ['start']);
