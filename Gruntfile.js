module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            dist: {
                files: [{
                    src: ['src/**/*.js'],
                    dest: 'dist/js/',
                    filter: 'isFile',
                    flatten: true,
                    expand: true
                },
                {
                    src: ['src/img/*.png'],
                    dest: 'dist/img/',
                    filter: 'isFile',
                    flatten: true,
                    expand: true
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    /*
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    */
    grunt.registerTask('default', ['copy']);
};
