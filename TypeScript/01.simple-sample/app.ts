const items = [
    { name: 'おにぎり', price: 120 },
    { name: 'お菓子', price: 50 }
];

for (const item of items) {
    if (item.price >= 100) {
        console.log(`${item.name}は100円以上です`);
    }
}
