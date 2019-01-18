'use strict';
exports.__esModule = true;

var lineCount = 4;
var firstLine = lineCount - (lineCount - 1);

while (firstLine > 0 && firstLine <= lineCount) {
    var asterisk = '*';
    console.log(asterisk.repeat(firstLine));
    firstLine++;
}
;
