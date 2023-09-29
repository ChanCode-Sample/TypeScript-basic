var items = [
    { name: 'おにぎり', price: 120 },
    { name: 'お菓子', price: 50 }
];
for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var item = items_1[_i];
    if (item.price >= 100) {
        console.log("".concat(item.name, "\u306F100\u5186\u4EE5\u4E0A\u3067\u3059"));
    }
}
console.log(typeof items);
