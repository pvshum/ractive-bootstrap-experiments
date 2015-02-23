module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    Ractive: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint'],
            ra: {
                files: 'static/**/*.*',
                tasks: ['jshint', 'copy'],
                options: {
                    livereload: true
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'node_modules', src: ['ractive/*'], dest: 'static/vendors/'},
                    {expand: true, cwd: 'node_modules/bootstrap/dist', src: ['**/*.*'], dest: 'static/vendors/bootstrap'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);

};