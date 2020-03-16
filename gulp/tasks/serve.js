module.exports = function() {
    $.gulp.task("serve", function() {
        $.browserSync.init({
            server: "./dist"
        });
    });
};
