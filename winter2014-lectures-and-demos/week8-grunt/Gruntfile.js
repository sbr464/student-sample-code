module.exports = function(grunt){

	// CONFIGURE GRUNT
	grunt.initConfig({
		uglify: {
			development: {
				// Files Array -
				// files: [
				// 	{
				// 		src: 'javascripts/*.js',
				// 		dest: 'javascripts/min/main.min.js'
				// 	}
				// ]
				//
				// Files Object
				// files: {
				// 	'javascripts/min/main.min.js': [
				// 		'javascripts/utility.js', 'javascripts/main.js'
				// 	]
				// },
				//
				// Expanded Files
				files: [
					{
						expand: true,
						cwd: 'javascripts',
						src: ['*.js'],
						dest: 'javascripts/min',
						ext: '.min.js'
					}
				],
				options: {
					sourceMap: true
				}
			},
			build: {
				files: {
					'javascripts/min/app.min.js': 'javascripts/*.js'
				},
				options: {
					sourceMap: false
				}
			}
		},
		cssmin: {
			development: {
				files: {
					'css/min/main.min.css': 'css/main.css'
				}
			}
		},
		watch: {
			js: {
				files: 'javascripts/*.js',
				tasks: ['uglify:development']
			},
			css: {
				files: 'css/*.css',
				tasks: ['cssmin:development']
			}
		}
	});

	grunt.registerTask('development', ['watch']);
	grunt.registerTask('build', ['uglify:build', 'cssmin:development']);

	grunt.registerTask('default', ['development']);

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
};