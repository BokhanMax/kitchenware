var fileinclude = require('gulp-file-include'),
    gulp = require('gulp');

gulp.task('index', function() {
    return gulp.src(['src/index.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
    .pipe(gulp.dest('./html'));
});

gulp.task('product', function() {
    return gulp.src(['src/product.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
    .pipe(gulp.dest('./html'));
});

gulp.task('category', function() {
    return gulp.src(['src/category.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
    .pipe(gulp.dest('./html'));
});

gulp.task('checkout', function() {
    return gulp.src(['src/checkout.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
    .pipe(gulp.dest('./html'));
});

gulp.task('blogcategory', function() {
    return gulp.src(['src/blogcategory.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
    .pipe(gulp.dest('./html'));
});

gulp.task('blogpost', function() {
    return gulp.src(['src/blogpost.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
    .pipe(gulp.dest('./html'));
});

gulp.task('success', function() {
    return gulp.src(['src/success.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
    .pipe(gulp.dest('./html'));
});

gulp.task('shipping', function() {
    return gulp.src(['src/shipping.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
    .pipe(gulp.dest('./html'));
});

gulp.task('404', function() {
    return gulp.src(['src/404.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
    .pipe(gulp.dest('./html'));
});

gulp.task('search', function() {
    return gulp.src(['src/search.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
    .pipe(gulp.dest('./html'));
});

gulp.task('contact', function() {
    return gulp.src(['src/contact.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
    .pipe(gulp.dest('./html'));
});

gulp.task('about', function() {
    return gulp.src(['src/about.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
    .pipe(gulp.dest('./html'));
});

//exports.default = allinone
