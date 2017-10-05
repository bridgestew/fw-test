var gulp = require('gulp'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	// pxtorem = require('postcss-pxtorem'),
	//autoprefixer = require('autoprefixer'),
	//spritesmith = require('gulp.spritesmith'),
	cache = require('gulp-cache'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	shell = require('gulp-shell'),
	//svg2png = require('gulp-svg2png'),
	watch = require('gulp-watch');

var processors = [
	// List of browsers to support with vendor prefixing
	//autoprefixer({
	//	browsers: ['last 2 version', 'ie 9', 'firefox > 15', 'Safari > 7', '> 2%'],
	//	cascade: false,
	//	flexbox: 'no-2009'
	//})
	// CSS properties to provide rem values for
	// pxtorem({
	// 	propWhiteList: [
	// 		'font', 'font-size', 'line-height',
	// 		'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
	// 		'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
	// 		'height', 'width', 'top', 'right', 'bottom', 'left',
	// 		'min-height', 'max-height', 'min-width', 'max-width',
	// 		'border-radius'
	// 	],
	// 	replace: false,
	// 	mediaQuery: false,
	// 	rootValue: 16
	// })
];

// This runs as a part of: gulp watch
gulp.task('sass', function() {
	return gulp.src('assets/scss/style.scss')
	.pipe(sass({ outputStyle: 'compressed' }))
	.on('error', function (err) { console.log(err.message); })
	.pipe(postcss(processors))

	.pipe(gulp.dest('assets/css'))
	// Copy the css file to the platform (may have to change this per person)
	.pipe(gulp.dest('../vitamix-platform/Vitamix/Store/j2ee-apps/store.war/assets/css'))
	.pipe(notify('Turkey’s done: <%= file.relative %>'));
});

// This runs as a part of: gulp watch
gulp.task('s30', function() {
	return gulp.src('assets/scss/s30.scss')
	.pipe(sass({ outputStyle: 'compressed' }))
	.on('error', function (err) { console.log(err.message); })
	.pipe(postcss(processors))

	.pipe(gulp.dest('assets/css'))
	.pipe(notify('Turkey’s done: <%= file.relative %>'));
});

// This runs as a part of: gulp watch
gulp.task('js-plugins', function() {
	return gulp.src([
		'assets/js/plugins/jquery.reel.js',
		'assets/js/plugins/lity.js',
		'assets/js/plugins/parsley.1.2.3.js',
		'assets/js/plugins/parsley.extend.js',
		'assets/js/plugins/rotator.js',
		'assets/js/plugins/slick.js',
		'assets/js/plugins/tabs.js',
		'assets/js/plugins/typeahead.bundle.js'
	])
	.pipe(concat('plugins.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js'))
	.pipe(notify('Turkey’s done: <%= file.relative %>'));
});

// This runs as a part of: gulp watch
// We need to minify these on our own because pagespeed doesn't
gulp.task('js-ie8-head', function() {
	return gulp.src([
		'assets/js/libs/html5shiv.js'
	])
	.pipe(concat('ie8-head.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js'))
	.pipe(notify('Turkey’s done: <%= file.relative %>'));
});

// This runs as a part of: gulp watch
// We need to minify these on our own because pagespeed doesn't
gulp.task('js-ie9-head', function() {
	return gulp.src([
		'assets/js/libs/matchMedia.js'
	])
	.pipe(concat('ie9-head.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js'))
	.pipe(notify('Turkey’s done: <%= file.relative %>'));
});

// This runs as a part of: gulp watch
// We need to minify these on our own because pagespeed doesn't
gulp.task('js-ie9-footer', function() {
	return gulp.src([
		'assets/js/plugins/jquery.placehold.js'
	])
	.pipe(concat('ie9-footer.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js'))
	.pipe(notify('Turkey’s done: <%= file.relative %>'));
});

// To run this task type in terminal: gulp flagsSmall
gulp.task('flagsSmall', function() {
	var spriteData = gulp.src('assets/img/flags/small/*.png')
	.pipe(spritesmith({
		imgName: 'flags-small.png',
		cssName: '_flags-small.css',
		cssVarMap: function(sprite) {
			sprite.name = 'flag-' + sprite.name;
		}
	}));
	spriteData.img.pipe(gulp.dest('assets/img/'));
	spriteData.img.pipe(gulp.dest('img/'));
	spriteData.css.pipe(gulp.dest('assets/scss/modules/'));
});

// To run this task type in terminal: gulp flagsMedium
gulp.task('flagsMedium', function() {
	var spriteData = gulp.src('assets/img/flags/medium/*.png')
	.pipe(spritesmith({
		imgName: 'flags-medium.png',
		cssName: '_flags-medium.css',
		cssVarMap: function(sprite) {
			sprite.name = 'flag-med-' + sprite.name;
		}
	}));
	spriteData.img.pipe(gulp.dest('assets/img/'));
	spriteData.img.pipe(gulp.dest('img/'));
	spriteData.css.pipe(gulp.dest('assets/scss/modules/'));
});

// Create PNG fallbacks of SVG icons
// To run this task type in terminal: gulp svg2png
gulp.task('svg2png', function () {
	gulp.src([
			'img/**/*.svg',
			'!img/icon-hamburger.svg',
			'!img/machine.svg',
			'!img/vitamix-logo.svg'
		])
		.pipe(svg2png())
		.pipe(gulp.dest('img/'));
});

// Styleguide CSS. This is processed when you run gulp styleguide below
gulp.task('styleguide-css', function() {
	return gulp.src('assets/scss/styleguide.scss')
	.pipe(sass({ outputStyle: 'expanded' }))
	.on('error', function (err) { console.log(err.message); })
	.pipe(postcss(processors))

	.pipe(gulp.dest('assets/styleguide/public'))
	.pipe(notify('Turkey’s done: <%= file.relative %>'));
});

// To run this task type in terminal: gulp styleguide
gulp.task('styleguide', ['styleguide-css'], shell.task([
	'kss-node <%= source %> <%= destination %> --template <%= template %>'
	], {
		templateData: {
			source: 'assets/scss',
			destination: '_site/assets/styleguide',
			template: 'assets/styleguide'
		}
	}
));

// To run this task type in terminal: gulp jekyll
// This runs jekyll at localhost:4000, 127.0.0.1:4000, and your.actual.ip.address:4000
// This allows other devices on the network to see your jekyll in their browser
gulp.task('jekyll', shell.task([
	'sudo jekyll serve --watch --host 0.0.0  --incremental'
]));

// To run this task type in terminal: gulp reinstall-node-modules
// This will delete node_modules and then re-download and install them
gulp.task('reinstall-node-modules', shell.task([
	'sudo rm -Rf node_modules',
	'sudo npm install'
]));

// To run this task type in terminal: gulp watch
gulp.task('watch', function() {
	gulp.watch('assets/scss/**/*.scss', ['sass']);
	gulp.watch('assets/scss/s30.scss', ['s30']);
	gulp.watch(['assets/js/libs/*.js','assets/js/plugins/*.js'], ['js-plugins','js-ie8-head','js-ie9-head','js-ie9-footer']);
});