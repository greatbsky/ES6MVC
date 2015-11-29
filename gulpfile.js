var gulp = require('gulp');
var mocha = require('gulp-mocha');

// 测试
gulp.task('test', function () {
    return gulp.src(['src/test/*Test.js', 'src/test/*/*Test.js'], { read: false })
        .pipe(mocha({reporter: 'nyan'}));
});

// 注册缺省任务
gulp.task('default', ['test']);