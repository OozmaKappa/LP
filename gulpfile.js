let gulp = require('gulp');
let eslint = require('gulp-eslint');
let mocha = require('gulp-mocha');
let nodemon = require('gulp-nodemon');

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
        exec: 'node-inspector & node --inspect',
        watch: 'src',
        ext: 'js json'
    }).on('restart', () => {
        console.log('restarted');
    });
    return stream;
});

gulp.task('inspect', () => {
    let stream = nodemon({
        script: 'src/server/purServer.js',
        exec: 'node-inspector & node --inspect'
    });
    return stream;
});

gulp.task('eslint', () => {
    return gulp.src(['src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
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

gulp.task('default', ['restart']);
