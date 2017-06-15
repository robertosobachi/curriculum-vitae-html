module.exports = function(isDevBuild) {

  const isDev = process.argv.slice().indexOf('-d') !== -1;
  
  return isDev;
};
