global.polymerBuild = require('polymer-build');

const polymerJson = require('../../polymer.json');
const polymerProject = new polymerBuild.PolymerProject(polymerJson);

module.exports = polymerProject;
