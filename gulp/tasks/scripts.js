module.exports = function() {
    $.gulp.task("libsJS:dev", () => {
        return $.gulp
            .src([
                "node_modules/svg4everybody/dist/svg4everybody.min.js",
                "node_modules/inputmask/dist/inputmask.min.js",
                "node_modules/object-fit-images/dist/ofi.min.js"
            ])
            .pipe($.gp.concat("libs.min.js"))
            .pipe($.gulp.dest("./dist/assets/js/"))
            .pipe(
                $.browserSync.reload({
                    stream: true
                })
            );
    });

    $.gulp.task("libsJS:build", () => {
        return $.gulp
            .src([
                "node_modules/svg4everybody/dist/svg4everybody.min.js",
                "node_modules/inputmask/dist/inputmask.min.js",
                "node_modules/object-fit-images/dist/ofi.min.js"
            ])
            .pipe($.gp.concat("libs.min.js"))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest("./dist/assets/js/"));
    });

    $.gulp.task("js:copy", () => {
        return $.gulp
            .src([
                "./src/assets/js/*.js",
                "!./src/assets/js/libs.min.js",
                "!./src/assets/js/main.js"
            ])
            .pipe(
                $.babel({
                    presets: ["@babel/env"]
                })
            )
            .pipe($.gulp.dest("./dist/assets/js/"))

            .pipe(
                $.browserSync.reload({
                    stream: true
                })
            );
    });

    $.gulp.task("js:modules", () => {
        return $.gulp
            .src(["./src/assets/js/main.js", "./src/assets/js/modules/*.js"])
            .pipe($.gp.concat("main.js"))
            .pipe(
                $.gp.insert.wrap(
                    'document.addEventListener("DOMContentLoaded", function() { \n\n',
                    "});"
                )
            )
            .pipe(
                $.babel({
                    presets: ["@babel/env"]
                })
            )
            .pipe($.gulp.dest("./dist/assets/js/"))
            .pipe(
                $.browserSync.reload({
                    stream: true
                })
            );
    });
};
