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
					'src/css/base.css',
					'src/css/grid.css',
					'src/css/app.css'
				],
				dest:'dist/css/main.css'
			}
		},
	responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: '320px',
            suffix: '_sm',
            quality: 65
          },
          {
            width: '640px',
            suffix: '_md',
            quality: 65
          },
          {
            width: '960px',
            suffix: '_lg',
            quality: 65
          },
          {
            width: '1920px',
            suffix: '_xl',
            quality: 65
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'src/img/',
          dest: 'dist/img/'
        }]
    }},
	imagemin: {
			dev:{
				files:[{
					expand: true,
					src: ['img/**/*.{jpg,gif,png}'],
					cwd:'src/',
					dest:'dist/'
				}]
			}
		},
		copy:{
			dev:{
				files:[{
					expand:true,
					src:['**/*', '!img/**/*.*', '!css/**/*.*'],
					cwd: 'src/',
					dest: 'dist/'
				},
				{expand:true,
				src:'*.*',
				cwd:'dist/css/',
				dest:'src/css/'}]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['concat', 'copy', 'responsive_images']);//,'imagemin']);//,'concat']);
}