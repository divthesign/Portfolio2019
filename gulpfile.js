const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');
  


gulp.task('sass', ()=>
    gulp.src('./scss/*.scss')
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('./css'))
);

gulp.task('watch', ()=> {
    gulp.watch('./scss/*.scss', gulp.series('sass'))
  });

    