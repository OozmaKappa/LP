let path = require('path');
let _root = path.resolve(__dirname, '..');

function root(...args) {
    args = Array.prototype.slice.call(args);
    return path.join(...[_root].concat(args));
}
exports.root = root;
