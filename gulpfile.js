var gulp = require('gulp');
var mocha = require('gulp-mocha');
var del = require('del');

//清理
gulp.task('clean', function() {
    return del('./bin/logs/*').then(paths => {
        console.log('Deleted files:\n', paths.join('\n'));
    });
});

// 测试
gulp.task('test', function () {
    return gulp.src(['src/test/*Test.js', 'src/test/*/*Test.js'], { read: false })
        .pipe(mocha({reporter: 'nyan'}));
});

// 注册缺省任务
gulp.task('default', ['clean', 'test']);