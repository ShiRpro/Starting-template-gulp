module.exports = function() {
    $.gulp.task("sass:build", () => {
        return $.gulp
            .src("./src/assets/scss/main.scss")
            .pipe($.gp.wait(1500))
            .pipe($.gp.sassGlob())
            .pipe(
                $.gp.sass({
                    "include css": true,
                    outputStyle: "compressed"
                })
            )
            .pipe(
                $.gp.autoprefixer({
                    browsers: ["last 3 version"]
                })
            )
            .pipe($.gcmq())
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest("./dist/assets/css/"));
    });

    $.gulp.task("sass:dev", () => {
        return $.gulp
            .src("./src/assets/scss/main.scss")
            .pipe($.gp.wait(1500))
            .pipe($.gp.sassGlob())
            .pipe($.gp.sourcemaps.init())
            .pipe(
                $.gp.sass({
                    "include css": true
                })
            )
            .on(
                "error",
                $.gp.notify.onError(function(error) {
                    return {
                        title: "Sass",
                        message: error.message
                    };
                })
            )
            .pipe($.gp.sourcemaps.write())
            .pipe(
                $.gp.autoprefixer({
                    browsers: ["last 3 version"]
                })
            )
            .pipe($.gulp.dest("./dist/assets/css/"))
            .pipe(
                $.browserSync.reload({
                    stream: true
                })
            );
    });
};
