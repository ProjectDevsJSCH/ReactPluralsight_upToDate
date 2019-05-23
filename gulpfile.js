"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');


// Configurations of the gulp file
var config = {
   port: 9005,
   devBaseUrl: 'http://localhost',
   paths: {
       html: './src/*.html',
       dist: './dist',
   }
};


// Start a local development server
gulp.task('connect', function() {
   connect.server({
       root: ['dist'],
       port: config.port,
       base: config.devBaseUrl,
       livereload: true
   });
});


// Open the file index.html in the browser at the specified route
gulp.task('open', gulp.series('connect'), async function() {
   gulp.src('dist/index.html')
       .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }));
});


/* 
Bundling the Html files in the dist folder 
and reload the local server
*/
gulp.task('html', async function() {
   gulp.src(config.paths.html)
       .pipe(gulp.dest(config.paths.dist))
       .pipe(connect.reload());
});


// Watch the changes made in the html and 
gulp.task('watch', function() {
   gulp.watch(config.paths.html, ['html']);
   gulp.watch(config.paths.js, ['js', 'lint']);
});


/* 
Default tasks
when typing gulp in the console, the 'html' and 'open' tasks will be executed 
 */
gulp.task('default', gulp.series('html', 'open', 'watch'));