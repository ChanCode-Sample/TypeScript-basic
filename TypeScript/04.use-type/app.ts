// 変数宣言
const moji: string = 'abc';

// 関数宣言（戻り値あり）
const fn1 = (x: number, y: number): string => 'abc';

// 関数宣言（戻り値なし）
const fn2 = (x: number): void => { console.log(x); };

// 関数宣言（終了しない）
const fn3 = (): never => { while (true) { } };

// ジェネリクス
const fn4 = <T>(x: T): T => { return x };
fn4<string>('abc'); // Tをstring型に指定して利用

// extendsで絞り込み
// xはnumberである
const fn5 = <T extends number>(x: T): T => { return x };
fn5<number>(100);

// xはA、B、Cのどれかである
type arphabet = 'A' | 'B' | 'C';
const fn7 = <T extends arphabet>(x: T): T => { return x };

// bookはBook型である（titleとpriceを持つと保証）
interface Book { title: string, price: number };
const fn6 = <T extends Book>(book: T): string => { return book.title };

