const count = 8;
let character = "#";
let ele = "";
let rows = [];
for (let i = 0; i < count; i++) {
    ele = character.repeat(i + 1);
    rows.push(ele);
}
console.log(rows);
for (const row of rows) {
    console.log(row);
}