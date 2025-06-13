const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");

// Importação dinâmica do gulp-imagemin para evitar erro ESM
async function loadImagemin() {
    const imagemin = await import("gulp-imagemin");
    return imagemin.default;
}

// Função para otimização de imagens
async function images() {
    const imagemin = await loadImagemin();
    return gulp.src("./images/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"));
}

// Minificação de JavaScript
function scripts() {
    return gulp.src("./src/scripts/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./dist/js"));
}

// Compilação de Sass e minificação de CSS
function styles() {
    return gulp.src("./src/styles/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./dist/css"));
}

// Cópia de arquivos HTML para dist/
function html() {
    return gulp.src("./src/*.html")
        .pipe(gulp.dest("./dist"));
}

// Monitoramento de mudanças
function watchFiles() {
    gulp.watch("./src/styles/**/*.scss", styles).on("change", () => console.log("Estilos atualizados!"));
    gulp.watch("./src/scripts/**/*.js", scripts).on("change", () => console.log("Scripts atualizados!"));
    gulp.watch("./src/*.html", html).on("change", () => console.log("HTML atualizado!"));
}

// Tarefa padrão para rodar todas as funções
exports.default = gulp.parallel(styles, images, scripts, html);
exports.watch = watchFiles;
