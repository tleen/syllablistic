module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: {
	files: {
	  src : ['Gruntfile.js', 'index.js', 'test/*.js']
	},
	options: {
          "expr" : true,
          "node" : true,
          "smarttabs" : true,
	  "predef" : [ // mocha test defs
            'after',
            'before',
            'describe',
            'it']      
	}
      }
    },
    cafemocha: {
      all: {
        src: 'test/*.js',
        options: {
          ui: 'bdd',
          require : [
            'should'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-cafe-mocha');

  grunt.registerTask('default', ['jshint', 'cafemocha']);
};
