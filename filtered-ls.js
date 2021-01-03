let fs = require("fs");
let dirname = process.argv[2];
let ext = process.argv[3];
let pat = RegExp('\\.' + ext + '$');

file = fs.readdir(dirname, function(err, files) {
    if (err) {
        return console.error(err);
     }
  for (i = 0; i < files.length; i++) {
    if (pat.test(files[i])) {
      console.log(files[i]);
    }
  }
});