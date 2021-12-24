let x = 5;
let y = 10;
let pattern = "#";
let positive = "";
let negative = "";

for (let i = 0; i < x * 2-1; i++) {
    if (i % 2 === 0) {
        positive += pattern + " ";
    } else {
        negative += " " + pattern;
    }
}
for (let j = 0; j < y / 2; j++) {
    console.log(positive + "\n" + negative)
}
