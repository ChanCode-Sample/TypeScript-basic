// 型エイリアス
type moji = string;
type book1 = { title: string, price: number };

// インターフェイス
interface book2 { title: string; price: number; };

// 関数の型宣言
type fn1 = (x: number, y: number) => string;
type fn2 = () => void;

// 配列
type score1 = number[];
type score2 = Array<number>;

// オプションプロパティ
interface opt { title: string; price?: number; };

// インデックスシグネチャ
interface idx { [key: string]: string; };

// オプショナルチェイニング
const sample: opt = { title: 'タイトル' };
console.log(sample?.price); // undefined

// 非nullアサーション
const sample2: book1 | null = null;
// console.log(sample2.title); // コンパイルエラー
console.log(sample2!.title);

