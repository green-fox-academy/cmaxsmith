'use strict';
exports.__esModule = true;

let lineCount = 4;
let firstLine = lineCount - (lineCount - 1);

while (firstLine > 0 && firstLine <= lineCount) {
    var asterisk = '*';
    console.log(asterisk.repeat(firstLine));
    firstLine++;
}
;
