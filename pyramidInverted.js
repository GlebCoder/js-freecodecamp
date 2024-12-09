const character = "#";
let rows = [];
const count = 8;

function padRow(rowNum, rowCount) {
    return " ".repeat(rowCount - rowNum) + character.repeat(2 * rowNum - 1) + " ".repeat(rowCount - rowNum);
}

/*for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
}*/
/*while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
}*/
for (let i = 0; i < count; i++) {
    rows.unshift(padRow(i + 1, count));
}
console.log(rows);

let pyramid = "";
for (const row of rows) {
    pyramid += row + "\n";
}
console.log(pyramid);