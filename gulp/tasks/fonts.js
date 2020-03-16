module.exports = function() {
    $.gulp.task("fonts", () => {
        return $.gulp
            .src("./src/assets/fonts/**/*.{ttf,woff2}")
            .pipe($.gp.ttf2woff2())
            .pipe($.gulp.dest("./dist/assets/fonts/"));
    });
};
