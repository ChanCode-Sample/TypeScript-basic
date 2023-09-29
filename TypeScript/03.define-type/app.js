;
;
;
// オプショナルチェイニング
var sample = { title: 'タイトル' };
console.log(sample === null || sample === void 0 ? void 0 : sample.price); // undefined
// 非nullアサーション
var sample2 = null;
// console.log(sample2.title); // コンパイルエラー
console.log(sample2.title);
