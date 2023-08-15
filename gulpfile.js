const entryPath = ".";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));  // Ustawienie kompilatora Sass
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

function compileSass() {
  return gulp
    .src(entryPath + "/scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(entryPath + "/css"));
}

function watcher() {
  browserSync.init({
    server: "./" + entryPath
  });

  gulp.watch(entryPath + "/scss/**/*.scss", gulp.series(compileSass, reload));
  gulp.watch(entryPath + "/*.html", gulp.series(reload));
  gulp.watch(entryPath + "/js/*.js", gulp.series(reload));
}

function reload(done) {
  browserSync.reload();
  done();
}

exports.sass = compileSass;
exports.default = gulp.series(compileSass, watcher);