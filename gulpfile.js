const gulp = require('gulp');

gulp.task('copy', function () {
    gulp.src('./src/tanbo/ui-mobile/**/*').pipe(gulp.dest('./library/projects/tanbo/ui-mobile/src/'));
});

gulp.task('default', ['copy']);
