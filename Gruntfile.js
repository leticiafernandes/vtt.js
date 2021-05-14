module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    mochaTest: {
      test: {
        options: {
          reporter: "spec",
          slow: "15000",
          timeout: "120000"
        },
        src: ["tests/**/*.js"]
      }
    },
  });

  grunt.loadNpmTasks("grunt-mocha-test");
  grunt.registerTask("test", ["mochaTest"]);
};
