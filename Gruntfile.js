module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        folder: {
            components: 'bower_components',
            src: 'resources',
        },
        concat:
        {
            site: {
                src: [
                    '<%=folder.components%>/jquery/jquery.js',

                    // Twitter bootstrap
                    '<%=folder.components%>/bootstrap/js/affix.js',
                    '<%=folder.components%>/bootstrap/js/alert.js',
                    '<%=folder.components%>/bootstrap/js/button.js',
                    '<%=folder.components%>/bootstrap/js/carousel.js',
                    '<%=folder.components%>/bootstrap/js/collapse.js',
                    '<%=folder.components%>/bootstrap/js/dropdown.js',
                    '<%=folder.components%>/bootstrap/js/modal.js',
                    '<%=folder.components%>/bootstrap/js/tooltip.js',
                    '<%=folder.components%>/bootstrap/js/popover.js',
                    '<%=folder.components%>/bootstrap/js/scrollspy.js',
                    '<%=folder.components%>/bootstrap/js/tab.js',
                    '<%=folder.components%>/bootstrap/js/transition.js',

                    // Others
                    '<%=folder.src%>/js/*.js'

                ],
                dest: 'js/site.js'
            },
            modernizr: {
                src: [
                    '<%=folder.components%>/modernizr/modernizr.js'
                ],
                dest: 'js/modernizr.js'
            }
        },

        uglify: {
            site: {
                src: ['js/site.js'],
                dest: 'js/site.js'
            },
            modernizr: {
                src: ['js/modernizr.js'],
                dest: 'js/modernizr.js'
            }
        },
        less: {
            site: {
                options: {
                    paths: [
                        "<%=folder.components%>",
                        "<%=folder.src%>/less"
                    ],
                    yuicompress: false
                },
                files: {
                    "css/site.css": "<%=folder.src%>/less/css-site.less"
                }
            }
        },
		watch: {
			gruntfile: {
				files: ['Gruntfile.js']
			},
			js: {
				files: '<%=folder.src%>/js/**/*.js',
				tasks: ['js']
			},
			css: {
				files: '<%=folder.src%>/less/**/*.less',
				tasks: ['css']
			}
		}
    });

    // Load tasks from "grunt-sample" grunt plugin installed via Npm.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('js', ['concat']);
    grunt.registerTask('css', 'less');

    // Default task.
    grunt.registerTask('build', ['css', 'js']);
    grunt.registerTask('deploy', ['build', 'uglify']);
    grunt.registerTask('default', ['build', 'watch']);

};