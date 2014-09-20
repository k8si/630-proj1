///<reference path="node/node.d.ts" />
var fs = require('fs');

var PYCFile = (function () {
    function PYCFile(fname) {
        this.fname = fname;
        this.filename = fname;
    }
    PYCFile.prototype.readFile = function () {
        console.log("reading " + this.filename);
        var h, c;
        var buf = fs.readFileSync(this.filename, { encoding: "hex" });
        this.header = buf.slice(0, 8);
        this.contents = buf.slice(9, buf.length - 1);
        // var idx = 0;
        // while (idx < buf.length) {
        // 	var start = idx;
        // 	idx = idx + 4;
        // 	// var hex = buf.slice(start, idx);
        // 	// var dec = parseInt(hex, 32);
        // 	// console.log(hex + " --> " + dec);
        // 	// var d = parseInt(buf.slice(start, idx), 16);
        // 	// console.log(d);
        // }
        // // this.header = buf.slice(0, 8);
        // // var asdec = parseInt(buf.slice(0, 8));
        // // this.contents = buf.slice(9, buf.length-1)
    };
    PYCFile.prototype.getInfo = function () {
        return this.filename + " " + this.header + " " + this.contents;
    };
    return PYCFile;
})();

var pyc = new PYCFile("../pyc/add.pyc");
pyc.readFile();
document.body.innerHTML = pyc.getInfo();
