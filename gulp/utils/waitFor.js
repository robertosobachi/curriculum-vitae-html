/**
 * Waits for the given ReadableStream
 */
module.exports = function waitFor(stream) {
  return new Promise((resolve, reject) => {
    stream.on('end', resolve);
    stream.on('error', reject);
  });
}