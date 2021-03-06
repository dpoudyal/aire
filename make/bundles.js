const defaultLibs = [
    'aurelia-bootstrapper',
    'aurelia-fetch-client',
    'aurelia-router',
    'aurelia-animator-css',
    'aurelia-framework',
    'aurelia-templating-binding',
    'aurelia-templating-router',
    'aurelia-templating-resources',
    'aurelia-history-browser',
    'aurelia-pal-browser',
    'aurelia-logging-console',
    'aurelia-loader-default'
];

module.exports = {
    force: true,
    baseURL: '.',             // baseURL of the application
    configPath: [             // SystemJS/JSPM configuration files
        './jspm.config.js'
    ],
    injectionConfigPath: './jspm.config.js',  // Configuration file path where bundle and depCache meta will be injected.
    bundles: {
        "dist/docs": {
            includes: [
                'dist/docs/**/*.js',
                'dist/docs/**/*.html!text',
                'dist/docs/**/*.css!text'
            ],
            excludes: defaultLibs,
            options: {
                inject: true,
                minify:true
            }
        },
        "dist/app-build": {     // bundle name/path. Must be within `baseURL`. Output path will look like: `baseURL/dist/app-build.js`.
            includes: [
                'dist/core/*.js',
                'dist/component/*.js',
                'dist/layout/*.js',
                'dist/nav/*.js',
                'dist/**/*.html!text',
                'dist/**/*.css!text'
            ],

            excludes: defaultLibs,
            options: {
                inject: true,
                minify:true
            }
        },

        "dist/aurelia": {
            includes: defaultLibs,
            options: {
                inject: true,
                minify: true
            }
        },
    }
};
