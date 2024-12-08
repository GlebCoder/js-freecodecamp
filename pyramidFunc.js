const character = "#";
let rows = [];
const count = 8;

function padRow(rowNum, rowCount) {
    return character.repeat(rowNum);
}

for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i + 1, count));
}
console.log(rows);