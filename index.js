module.exports = function () {
	console.log("The best worst idea you've ever had");

	var gulp = require('gulp'),
		es = require('event-stream'),
		log = require('consolelogger');

	var printFileNames = function() {
		return es.map(function(data, cb) {
			cb(null, data);
		});
	};

	var forEachFolder = function(stream) {
		return es.map(function(data, cb) {
			if (data.isDirectory()) {
				var path = data.path + '/*.java',
					jsPath = path.substr(0, file.lastIndexOf('.')) + '.js';
				log.info(['Converting', path, 'to javascript'].join(' '));
				if (stream !== undefined) {
					gulp.src(path)
						.pipe(gulp.dest(jsPath));
				}
			}
		});
	};

	gulp.task('j2js', function() {
		gulp.src('src/*')
			.pipe(forEachFolder(printFilenames));
	});
};
