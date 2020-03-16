module.exports = function() {
    $.gulp.task("watch", function() {
        $.gulp.watch("./src/pug/**/*.pug", $.gulp.series("pug"));
        $.gulp.watch("./src/assets/scss/**/*.scss", $.gulp.series("sass:dev"));
        $.gulp.watch("./src/assets/images/svg/*.svg", $.gulp.series("svg"));
        $.gulp.watch(
            "./src/assets/js/**/*.js",
            $.gulp.series("libsJS:dev", "js:copy", "js:modules")
        );
        $.gulp.watch(
            "./src/assets/images/*.{png,jpg,gif,svg}",
            $.gulp.series("img:dev")
        );
        $.gulp.watch("./src/assets/fonts/**/*.*", $.gulp.series("fonts"));
    });
};
