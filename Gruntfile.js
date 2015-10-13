// Gruntfile.js
module.exports = function(grunt) {

  var vendors = ["jquery", "backbone", "backbone.marionette"];

  grunt.initConfig({

//---------------------------- nodemon ----------------------------// --------------

    nodemon: {
      dev: {
        script: 'server.js'
      },
      prod: {
        script: 'server.js'
      }
    },

//---------------------------- browserify ----------------------------//

    browserify: {
      // just the app
      app: {
          src: 'public/src/js/app.js',
          dest: 'public/dist/js/app.js',
          options: {
              debug: true,
              extensions: ['.hbs'],
              transform: ['hbsfy'],
              external: vendors
          }
      },
      // just vendors
      vendors: {
          files: {
              'public/dist/js/vendors.js': []
          },
          options: {
              'require': vendors
          }
      },
      // bundle all in one
      bundle: {
          src: 'public/src/js/app.js',
          dest: 'public/dist/js/bundle.js',
          options: {
              extensions: ['.hbs'],
              transform: ['hbsfy']
          }
      }
    },

//---------------------------- targethtml ----------------------------//

    // produce index.html by target
    targethtml: {
        dev: {
            src: 'public/src/index.html',
            dest: 'public/dist/index.html'
        },
        prod: {
            src: 'public/src/index.html',
            dest: 'public/dist/index.html'
        }
    },

//---------------------------- uglify ----------------------------// --------------

    uglify: {
      my_target: {
        files: {
          'dest/output.min.js': ['src/input1.js', 'src/input2.js']
        }
      }
    },

//---------------------------- watch ----------------------------//

    watch: {
        options: {
            livereload: true,
            spawn: false,
            interrupt: true
        },
        src: {
            files: ['src/**/*', '!src/index.html'],
            tasks: ['browserify:app'],
        },
        index: {
            files: ['src/index.html'],
            tasks: ['targethtml:dev']
        },
        assets: {
            files: ['assets/**/*']
        }
    },

//---------------------------- jshint ----------------------------//

    jshint: {
          all: ['public/src/js/**/*.js'] 
    },

//---------------------------- less ----------------------------// --------------

    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "path/to/result.css": "path/to/source.less"
        }
      },
      production: {
        options: {
          paths: ["assets/css"],
          plugins: [
            new require('less-plugin-autoprefix')({browsers: ["last 2 versions"]}),
          ],
          modifyVars: {
            imgPath: '"http://mycdn.com/path/to/images"',
            bgColor: 'red'
          }
        },
        files: {
          "path/to/result.css": "path/to/source.less"
        }
      }
    },

//---------------------------- cssmin ----------------------------// --------------

    // take the processed style.css file and minify
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'release/css',
          src: ['*.css', '!*.min.css'],
          dest: 'release/css',
          ext: '.min.css'
        }]
      }
    },

//---------------------------- concurrent ----------------------------//

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    },   

//---------------------------- sprite ----------------------------// --------------
    
    sprite: {
      all: {
        src: 'path/to/your/sprites/*.png',
        dest: 'destination/of/spritesheet.png',
        destCss: 'destination/of/sprites.css'
      }
    }


    // PHANTOM.JS

  });

  
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-spritesmith');


/*
  
  


  grunt.registerTask('default', ['less', 'cssmin', 'jshint', 'uglify', 'concurrent']);
  grunt.registerTask('builddev', ['browserify:app', 'browserify:vendors', 'targethtml:dev']);
  grunt.registerTask('buildprod', ['browserify:bundle', 'uglify', 'targethtml:prod']);
  grunt.registerTask('run',   ['builddev', 'connect', 'watch']);
*/

  grunt.registerTask('default', ['nodemon:dev']);  

};