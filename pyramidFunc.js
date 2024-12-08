const character = "#";
let rows = [];
const count = 8;

function padRow(rowNum, rowCount) {
    return " ".repeat(rowCount - rowNum) + character.repeat(2 * rowNum - 1) + " ".repeat(rowCount - rowNum);
}

for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}
console.log(rows);

let pyramid = "";
for (const row of rows) {
    pyramid += row + "\n";
}
console.log(pyramid);