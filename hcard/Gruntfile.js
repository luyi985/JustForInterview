module.exports = function(grunt){

	grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	less: {
    	  development: {
    	    options: {
    	      compress: false,
    	      optimization: 2,
    	      ieCompat:true
    	    },
    	    files: {
    	      "css/main.css": "less/main.less" // destination file and source file
    	    }
    	  }
    	},
    	watch: {
    	  styles: {
    	    files: ['less/**/*.less'], // which files to watch
    	    tasks: ['less'],
    	    options: {
    	      nospawn: true
    	    }
    	  }
    	}
  	});	
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
  	grunt.registerTask('default', ['less', 'watch']);
}