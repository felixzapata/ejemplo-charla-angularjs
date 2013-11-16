(function() {
    'use strict';

    var path = require('path'),
        mountFolder = function(connect, dir) {
            return connect['static'](require('path').resolve(dir));
        };

    module.exports = function(grunt) {
        // load all grunt tasks
        require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

        // configurable paths
        var yeomanConfig = {
            app: '.',
            tmp: '.tmp',
            src: 'app',
            test: 'test',
            componentName: ''
        };

        try {
            yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
        } catch (ignore) {}

        grunt.initConfig({
            yeoman: yeomanConfig,
            watch: {
                styles: {
                    files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                    tasks: ['copy:styles', 'autoprefixer']
                },
                livereload: {
                    options: {
                        livereload: '<%= connect.options.livereload %>'
                    },
                    files: [
                        '<%= yeoman.app %>/{,*/}*.html',
                        '.tmp/styles/{,*/}*.css',
                        '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                        '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                    ]
                }
            },
            connect: {
                options: {
                    port: 9000,
                    hostname: 'localhost'
                },
                dev: {
                    options: {
                        middleware: function(connect) {
                            return [
                                require('connect-livereload')(),
                                mountFolder(connect, yeomanConfig.tmp),
                                mountFolder(connect, yeomanConfig.src)
                            ];
                        }
                    }
                },
                test: {
                    options: {
                        middleware: function(connect) {
                            return [
                                mountFolder(connect, yeomanConfig.tmp),
                                mountFolder(connect, yeomanConfig.test),
                                mountFolder(connect, yeomanConfig.src)
                            ];
                        }
                    }
                }
            },
            open: {
                server: {
                    url: 'http://localhost:<%= connect.options.port %>'
                }
            },
            clean: {
                server: '<%= yeoman.tmp %>'
            },
            jshint: {
                options: {
                    jshintrc: '.jshintrc',
                    reporter: require('jshint-stylish')
                },
                all: [
                    '!Gruntfile.js',
                    '<%= yeoman.app %>/scripts/{,*/}*.js'
                ]
            },
            karma: {
                unit: {
                    configFile: 'karma.conf.js'
                },
                e2e: {
                    configFile: 'karma-e2e.conf.js'
                }
            },
            copy: {
                dist: {
                    files: [{
                        expand: true,
                        dot: true,
                        cwd: '<%= yeoman.app %>',
                        dest: '<%= yeoman.dist %>',
                        src: [
                            '*.{ico,png,txt}',
                            '.htaccess',
                            'bower_components/**/*',
                            'images/{,*/}*.{gif,webp}',
                            'fonts/*'
                        ]
                    }, {
                        expand: true,
                        cwd: '.tmp/images',
                        dest: '<%= yeoman.dist %>/images',
                        src: [
                            'generated/*'
                        ]
                    }]
                },
                styles: {
                    expand: true,
                    cwd: '<%= yeoman.app %>/styles',
                    dest: '.tmp/styles/',
                    src: '{,*/}*.css'
                }
            }
        });

        grunt.registerTask('server', [
            'clean:server',
            'copy',
            'jshint',
            'connect:dev',
            'open',
            'watch'
        ]);

        grunt.registerTask('test', [
            'clean:server',
            'jshint',
            'connect:test',
            'karma'
        ]);

        grunt.registerTask('e2e', [
            'clean:server',
            'jshint',
            'connect:test',
            'karma:e2e'
        ]);

        grunt.registerTask('default', ['server']);
    };

}());
