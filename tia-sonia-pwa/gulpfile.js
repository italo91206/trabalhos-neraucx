const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

const paths = {
    styles: {
        src: './assets/sass/**/*.scss',
        dest: './assets/css/'
    }
};

const sassOptions = {
    outputStyle: 'expanded'
};

const autoprefixerOptions = {
    cascade: false
};

const renameOptions = {
    suffix: '.min'
};

const cleanCSSOptions = {
    level: {
        1: {
            specialComments: 0
        }
    }
};

gulp.task('sass', () => {
    return gulp.src(paths.styles.src)
        .pipe(sass(sassOptions)).on('error', sass.logError)
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(rename(renameOptions))
        .pipe(cleanCSS(cleanCSSOptions))
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('default', () => {
    gulp.watch(paths.styles.src, gulp.series('sass'));
});