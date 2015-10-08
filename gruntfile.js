/*
some simple tasks
for a simple page
*/
module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist:{
				src:[
					'src/js/sanity1.js',
					'src/js/sanity2.js'
				],
				dest:'dist/js/isSane.js'
			}
		},
		responsive_images: {
			dev:{
				options:{
					engine: 'im',
			        sizes: [{
			            name: 'small',
			            width: '30%',
			            suffix: '_small',
			            quality: 20
			        },{
			            name: 'large',
			            width: '50%',
			            suffix: '_large',
			            quality: 40
			        }]
			    },
				files:[{
					expand: true,
					src: ['app/img/**/*.{jpg,gif,png}'],
					cwd:'src/',
					dest:'dist/'
				}]
			}
		},
		imagemin: {
			dev:{
				files:[{
					expand: true,
					src: ['app/img/**/*.{jpg,gif,png}'],
					cwd:'src/',
					dest:'dist/'
				}]
			}
		},
		copy:{
			dev:{
				files:[{
					expand:true,
					src:['**/*', '!app/img/**/*.*'],
					cwd: 'src/',
					dest: 'dist/'
				}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['copy', ,'responsive_images']);//,'imagemin']);//,'concat']);
}