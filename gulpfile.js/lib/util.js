var fs = require('fs');
var path = require('path');
module.exports = {
	getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
	}
}