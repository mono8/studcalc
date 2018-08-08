var gulp = require('gulp');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var webpackStream = require('webpack-stream');

gulp.task('scripts', function () {
  return gulp.src('src/js/app.js')
    .pipe(webpackStream({
      output: {
        filename: 'app.js',
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['env']
            }
          }
        ]
      },
      plugins: [
        new UglifyJSPlugin({
          sourceMap: true
          })
      ],
      externals: {
        jquery: 'jQuery'
      }
    }))
    .pipe(gulp.dest('docs/js'));
});

gulp.task('scripts:watch', function () {
  gulp.watch('src/js/**/*.*', ['scripts']);
});