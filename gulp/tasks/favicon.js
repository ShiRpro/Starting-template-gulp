module.exports = function() {
    $.gulp.task("favicon-generate", () => {
        return $.gulp
            .src("./src/assets/images/favicons/favicon.png")
            .pipe(
                $.gp.favicons({
                    appName: "My App",
                    appShortName: "App",
                    appDescription: "This is my application",
                    developerName: "Hayden Bleasel",
                    developerURL: "http://haydenbleasel.com/",
                    background: "#020307",
                    path: "favicons/",
                    url: "http://haydenbleasel.com/",
                    display: "standalone",
                    orientation: "portrait",
                    scope: "/",
                    start_url: "/?homescreen=1",
                    version: 1.0,
                    logging: false,
                    html: "favicon.html",
                    pipeHTML: true,
                    replace: true
                })
            )
            .pipe($.gulp.dest("./dist/assets/images/favicons/"));
    });
};
