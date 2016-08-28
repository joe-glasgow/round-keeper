var gulp = require('gulp');
// Gulp Sass
var sass = require('gulp-sass');
// Import browserify for JavaScript Modules
var browserify = require('browserify');
// Stream Buffer
var buffer = require('vinyl-buffer');
// Stream Source
var source = require('vinyl-source-stream');
// Keep Angular annotiations (such as $http, $scope et)
var ngAnnotate = require('gulp-ng-annotate');
// Squish all our JavaScript
var uglify = require('gulp-uglify');
// Better debugging in development mode
var sourceMaps = require('gulp-sourcemaps');


gulp.task('sass', function () {
    gulp.src('./src/scss/main.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

// Browserify task
gulp.task('browserify', function() {
    // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you
    return browserify('./src/js/app.js')
    // bundle all your 'requires'
        .bundle()
        // name the output file
        .pipe(source('app.min.js'))
        // buffer
        .pipe(buffer())
        .pipe(sourceMaps.init({ loadMaps : true }))
        // keep angular annotations e.g. $http will stay $http in minification.
        .pipe(ngAnnotate())
        // Minify it
        .pipe(uglify())
        // Better debugging for errors
        .pipe(sourceMaps.write('.'))
        // Set the output
        .pipe(gulp.dest('./dist/js'));
});
// default gulp task to run e.g to build all etc
gulp.task('default', ['browserify', 'sass']);