module.exports = function() {
    $.gulp.task("pug", () => {
        return $.gulp
            .src("./src/pug/pages/*.pug")
            .pipe(
                $.gp.pug({
                    pretty: true
                })
            )
            .on(
                "error",
                $.gp.notify.onError(function(error) {
                    return {
                        title: "Pug",
                        message: error.message
                    };
                })
            )
            .pipe($.gulp.dest("./dist/"))
            .on("end", $.browserSync.reload);
    });
};
