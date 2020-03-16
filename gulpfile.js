global.$ = {
    path: {
        task: require("./gulp/paths/tasks.js")
    },
    gulp: require("gulp"),
    del: require("del"),
    fs: require("fs"),
    babel: require("gulp-babel"),
    gcmq: require("gulp-group-css-media-queries"),
    sassGlob: require("gulp-sass-glob"),
    browserSync: require("browser-sync").create(),
    ttf2woff2: require("gulp-ttf2woff2"),
    favicons: require("gulp-favicons"),
    insert: require("gulp-insert"),
    gp: require("gulp-load-plugins")()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task(
    "dev",
    $.gulp.series(
        "clean",
        $.gulp.parallel(
            "sass:dev",
            "pug",
            "libsJS:dev",
            "js:copy",
            "js:modules",
            "svg",
            "img:dev",
            "fonts"
        )
    )
);

$.gulp.task(
    "build",
    $.gulp.series(
        "clean",
        $.gulp.parallel(
            "sass:build",
            "pug",
            "libsJS:build",
            "js:copy",
            "js:modules",
            "svg",
            "img:build",
            "fonts",
            "favicon-generate"
        )
    )
);

$.gulp.task("default", $.gulp.series("dev", $.gulp.parallel("watch", "serve")));
