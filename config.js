var extend = require('util')._extend;
var path = require('path');

var config = {};

// Port used when running the server, example: http://127.0.0.1:8081
config.port = '8081';

// Removes the roboto link tag from the final build when `true`
config.removeRoboto = true;

config.autoprefixer = [
  'ie >= 11',
  'ie_mob >= 11',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// Paths to source and build directories.
config.path = {
  srcElements: 'src/components',

  srcImages: 'images',

  destImages: 'src/images',

  buildDirectory: 'build',
};

config.path.destCustomIcons = config.path.srcElements + '/my-icons';

config.customIconsName = 'my-icons';

config.copyright = '<!--\n' +
                   '@license\n' +
                   'Copyright (c) 2016 The Polymer Project Authors. All ' +
                   'rights reserved.\n' +
                   'This code may only be used under the BSD style license ' +
                   'found at http://polymer.github.io/LICENSE.txt\n' +
                   'The complete set of authors may be found at http://' +
                   'polymer.github.io/AUTHORS.txt\n' +
                   'The complete set of contributors may be found at http://' +
                   'polymer.github.io/CONTRIBUTORS.txt\n' +
                   'Code distributed by Google as part of the polymer ' +
                   'project is also\n' +
                   'subject to an additional IP rights grant found at ' +
                   'http://polymer.github.io/PATENTS.txt\n' +
                   '-->\n'

module.exports = config;
