
// folder
const dir = {
    src: ".",
    dest: ".",
};

// package
const gulp = require("gulp"),
    sass = require("gulp-sass")(require("sass")),
    fibers = require("fibers"),
    sassGlob = require("gulp-sass-glob-use-forward"),
    comb = require("gulp-csscomb"),
    cache = require("gulp-cached"),
    watch = require("gulp-watch"),
    progeny = require("gulp-progeny"),
    notify = require("gulp-notify"),
    postcss = require("gulp-postcss"),
    mqpacker = require("css-mqpacker"),
    gulpif = require("gulp-if"),
    plumber = require("gulp-plumber"),
    sourcemaps = require("gulp-sourcemaps"),
    changed = require("gulp-changed"),
    debug = require("gulp-debug"),
    autoprefixer = require("autoprefixer"),
    rename = require("gulp-rename"),
    clean = require("gulp-clean"),
    stylelint = require("gulp-stylelint"),
    header = require("gulp-header"),
    replace = require("gulp-replace"),
    // jsCompress
    babel = require("gulp-babel"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    // imagemin
    imagemin = require("gulp-imagemin"),
    pngquant = require("imagemin-pngquant"),
    optipng = require("imagemin-optipng"),
    gifsicle = require("imagemin-gifsicle"),
    mozjpeg = require("imagemin-mozjpeg"),
    svgo = require("imagemin-svgo"),
    // pxをremに変換
    px2rem = require("gulp-px-to-rem"),
    // ejs
    ejs = require("gulp-ejs"),
    // スタイルガイド
    frontnote = require("gulp-frontnote");

// Sassのプロパティをソート＆記述を統一化
gulp.task("sassCombInit", () => {
    return gulp
        .src([dir.src + "/scss/**/*.scss", "!" + dir.src + "/scss/style.scss"])
        .pipe(plumber(notify.onError("Error: <%= error.message %>")))
        .pipe(comb())
        .pipe(cache("cache"))
        .pipe(gulp.dest(dir.dest + "/scss/"));
});
gulp.task("sassComb", () => {
    return gulp
        .src([dir.src + "/scss/**/*.scss", "!" + dir.src + "/scss/style.scss"])
        .pipe(plumber(notify.onError("Error: <%= error.message %>")))
        .pipe(cache("cache"))
        .pipe(comb())
        .pipe(cache("cache"))
        .pipe(gulp.dest(dir.dest + "/scss/"));
});

// Sassのコンパイル
gulp.task("sassClean", () => {
    return gulp
        .src([dir.src + "/style.css"], { allowEmpty: true })
        .pipe(clean({ force: true }));
});
gulp.task("sass", () => {
    return gulp.src(dir.src + '/scss/style.scss')
        .pipe(progeny())
        .pipe(plumber(notify.onError("Error: <%= error.message %>")))
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(
            sass({
                fiber: fibers,
                outputStyle: "compressed",
            })
        )
        .pipe(
            stylelint({
                failAfterError: true,
                reporters: [{ formatter: "string", console: true }],
            })
        )
        .pipe(
            postcss([
                mqpacker,
                autoprefixer({
                    // cascade: false,
                    // grid: "autoplace"
                }),
            ])
        )
        .pipe(replace(/@charset "utf-8";/g, ""))
        .pipe(header('@charset "utf-8";\n\n'))
        /*
.pipe(px2rem({
  rootPX:16,
  accuracy:2
}))
*/
        .pipe(gulp.dest(dir.dest + "/"))
});

// SassとCssを結合
gulp.task("cssConcat", () => {
    return gulp
        .src([dir.src + '/css/**/*.css', dir.src + '/style.css'])
        .pipe(concat("style.css"))
        .pipe(gulp.dest(dir.dest + "/"));
});

// jsの圧縮
gulp.task("jsClean", () => {
    return gulp
        .src([dir.src + "/js/bundle.js"], { allowEmpty: true })
        .pipe(clean({ force: true }));
});
gulp.task("jsCompress", () => {
    return gulp
        .src([
            dir.src + "/js/jquery.js",
            dir.src + "/js/vendors/**/*.js",
            dir.src + "/js/common/**/*.js",
            dir.src + "/js/post/**/*.js",
            dir.src + "/js/page/**/*.js",
            "!" + dir.src + "/js/bundle.js",
        ])
        .pipe(
            babel({
                presets: ["@babel/preset-env"],
            })
        )
        .pipe(concat("bundle.js"))
        .pipe(uglify())
        .pipe(gulp.dest(dir.dest + "/js/"));
});

// 画像の圧縮
gulp.task("imagemin", () => {
    return gulp
        .src(dir.src + "/images/**/*.{png,jpg,jpeg,gif,svg}")
        .pipe(changed(dir.dest + "/images/"))
        .pipe(
            plumber({
                errorHandler: notify.onError("Error: <%= error.message %>"),
            })
        )
        .pipe(
            imagemin({
                use: [
                    pngquant({
                        quality: "65-80",
                        speed: 1,
                        floyd: 0,
                    }),
                    mozjpeg({
                        quality: 85,
                        progressive: true,
                    }),
                    svgo(),
                    optipng(),
                    gifsicle(),
                ],
            })
        )
        .pipe(gulp.dest(dir.dest + "/images/"));
});

// ejs
gulp.task("ejs", () => {
    return gulp
        .src(dir.src + "/_ejs/**/!(_)*.ejs")
        .pipe(ejs())
        .pipe(rename({ extname: ".html" }))
        .pipe(gulp.dest(dir.dest + "/"));
});

// styleguide
gulp.task("styleguide", function () {
    return gulp.src([dir.src + "/scss/**/*.scss"]).pipe(
        frontnote({
            overview: dir.src + "/_styleguide/overview.md",
            out: dir.src + "/_styleguide",
            css: ["/style.css"],
            script: ["/js/bundle.js"],
            title: "共通パーツ用スタイルガイド",
        })
    );
});

// watch
gulp.task("watch", () => {
    gulp.watch(
        [
            dir.src + "/scss/**/*.scss",
            dir.src + "/css/**/*.css",
            "!" + dir.src + "/style.css",
        ],
        gulp.series("sassComb", "sassClean", "sass", "cssConcat")
    );
    gulp.watch(
        [dir.src + "/js/**/*.js", "!" + dir.src + "/js/bundle.js"],
        gulp.series("jsClean", "jsCompress")
    );
    gulp.watch(
        dir.src + "/images/**/*.{png,jpg,jpeg,gif,svg}",
        gulp.task("imagemin")
    );
    // gulp.watch(dir.src + '/_ejs/**/*.ejs', gulp.task('ejs'));
    // gulp.watch(dir.src + '/_styleguide/overview.md', gulp.task('styleguide'));
});

//default
gulp.task(
    "default",
    gulp.series(
        "sassCombInit",
        "sassClean",
        "sass",
        "cssConcat",
        // "jsClean",
        // "jsCompress",
        "watch"
    )
);
