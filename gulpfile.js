const gulp = require('gulp')
const assign = require('lodash.assign')

const browserify = require('browserify')
const watchify = require('watchify')
const buffer = require('vinyl-buffer')
const source = require('vinyl-source-stream')
const plugins = require('gulp-load-plugins')()
const standardFormat = require('standard-format')
const express = require('express')

const options = {
  jsEntries: ['./src/index.js'],
  jsFiles: ['./src/**/.js'],
  jsOutput: './build/',
  exampleHtmlEntries: ['./example/index.html'],
  debug: true
}

const browserifyOptions = assign({}, watchify.args, {
  entries: options.jsEntries,
  debug: options.debug,
  standalone: 'TypographicUnderline'
})

const b = watchify(browserify(browserifyOptions))
  .transform('babelify', {
    presets: ['es2015']
  })

gulp.task('js', bundle)
b.on('update', bundle)
b.on('log', plugins.util.log)

function onError (err) {
  plugins.util.log('\n', plugins.util.colors.red(err), '\n')
}

function bundle () {
  gulp.src(options.jsEntries)
    .pipe(plugins.standard())
    .pipe(plugins.standard.reporter('default', {
      breakOnError: false
    }))
    .on('error', onError)

  return b.bundle()
    .on('error', function (err) {
      onError(err)
      this.emit('end')
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(plugins.sourcemaps.init({
      loadMaps: true
    }))
    .pipe(plugins.uglify())
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(options.jsOutput))
    .pipe(plugins.livereload())
}

gulp.task('example-html', () => {
  gulp.src(options.exampleHtmlEntries)
    .pipe(plugins.livereload())
})

gulp.task('serve', () => {
  const app = express()

  app.use('/build', express.static(__dirname + '/build'))
  app.use(express.static(__dirname + '/example'))

  app.listen(3000)
  plugins.util.log(plugins.util.colors.green('./example/index.html being served on localhost:3000'))
})

gulp.task('watch', () => {
  plugins.livereload.listen()
  gulp.start('serve')
  gulp.start('example-html')
  gulp.start('js')

  gulp.watch(options.exampleEntries, ['example-html'])
})
