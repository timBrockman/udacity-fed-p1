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
        }}},
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
					src:['**/*', '!img/**/*.*'],
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
	grunt.registerTask('default', ['copy', 'responsive_images']);//,'imagemin']);//,'concat']);
}