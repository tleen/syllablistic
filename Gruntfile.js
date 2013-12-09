module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['gruntfile.js', 'src/*.js', 'test/spec/*.js'],
      options: {
        "expr" : true,
        "node" : true,
        "smarttabs" : true      
      }
    },
    jasmine : {
      src : 'src/*.js',
      options : {
	specs: 'test/spec/*.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jshint', 'jasmine']);
};
