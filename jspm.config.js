SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "aire/": "dist/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    }
  },
  packages: {
    "aire": {
      "main": "aire.js",
      "defaultExtension": "js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    },
    "npm:aurelia-loader@1.0.2": {
      "map": {
        "aurelia-path": "npm:aurelia-path@1.1.3",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.6"
      }
    },
    "npm:aurelia-task-queue@1.3.3": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.8.2"
      }
    },
    "npm:aurelia-binding@2.3.1": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.5.2",
        "aurelia-pal": "npm:aurelia-pal@1.8.2",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.6"
      }
    },
    "npm:aurelia-templating@1.10.2": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@2.3.1",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
        "aurelia-loader": "npm:aurelia-loader@1.0.2",
        "aurelia-logging": "npm:aurelia-logging@1.5.2",
        "aurelia-pal": "npm:aurelia-pal@1.8.2",
        "aurelia-path": "npm:aurelia-path@1.1.3",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.6"
      }
    },
    "npm:aurelia-metadata@1.0.6": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.8.2"
      }
    },
    "npm:aurelia-route-recognizer@1.3.2": {
      "map": {
        "aurelia-path": "npm:aurelia-path@1.1.3"
      }
    },
    "npm:aurelia-event-aggregator@1.0.3": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.5.2"
      }
    }
  },
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.4",
    "aurelia-binding": "npm:aurelia-binding@2.3.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.3",
    "aurelia-framework": "npm:aurelia-framework@1.3.1",
    "aurelia-history": "npm:aurelia-history@1.2.1",
    "aurelia-loader": "npm:aurelia-loader@1.0.2",
    "aurelia-logging": "npm:aurelia-logging@1.5.2",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.6",
    "aurelia-pal": "npm:aurelia-pal@1.8.2",
    "aurelia-path": "npm:aurelia-path@1.1.3",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.3.2",
    "aurelia-router": "npm:aurelia-router@1.7.1",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
    "aurelia-templating": "npm:aurelia-templating@1.10.2",
    "css": "github:systemjs/plugin-css@0.1.37",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "text": "github:systemjs/plugin-text@0.0.11",
    "uikit": "npm:uikit@3.1.5"
  },
  bundles: {
    "aire/aire.js": [
      "aire/aire.js",
      "aire/component/button.html!github:systemjs/plugin-text@0.0.11/text.js",
      "aire/component/button.js",
      "aire/component/modifiers.js",
      "aire/component/navbar.html!github:systemjs/plugin-text@0.0.11/text.js",
      "aire/component/navbar.js",
      "aire/component/page.html!github:systemjs/plugin-text@0.0.11/text.js",
      "aire/component/page.js",
      "aire/component/panel.html!github:systemjs/plugin-text@0.0.11/text.js",
      "aire/component/panel.js",
      "aire/component/type.js",
      "aire/core/dom.js",
      "aire/core/events.js",
      "github:systemjs/plugin-text@0.0.11.json"
    ]
  }
});