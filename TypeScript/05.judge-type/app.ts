// 型ガード------------------------------------------
// 型ガード（nullではないことをチェック）
// 戻り値がnullかもしれない関数の宣言と実行
const getTitle = (): string | null => 'abc';
const title: string | null = getTitle();

// titleはnullかもしれないのでコンパイルエラー
// console.log(title.toUpperCase());

// nullではないことを保証すればOK
if (title) {
    console.log(title.toUpperCase());
}

// 型ガード（typeofでstringであることをチェック）
// 戻り値がstringかnumberの関数の宣言と実行
const getValue = (): string | number => 'abc';
const value: string | number = getValue();

// valueはnumberかもしれないのでコンパイルエラー
// console.log(value.toUpperCase());

// stringであることを保証すればOK
if (typeof value === 'string') {
    console.log(value.toUpperCase());
}

// 型ガード（instanceofでBook型であることをチェック）
class Car { }
class Book {
    private title: string;
    private price: number;
    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
    showInfo() {
        console.log(`${this.title}(${this.price})`);
    }
}
// Bookクラス型とCarクラス型の両方を受け取れる関数宣言
const fn1 = (obj: Book | Car) => {
    // Carクラス型にはshowInfoメソッドはないのでコンパイルエラー
    // obj.showInfo();

    // Bookクラス型であることを保証すればOK
    if (obj instanceof Book) {
        obj.showInfo();
    }
};

// 型ガード（inでpriceプロパティを持つことをチェック）
interface Book1 { title: string; price: number };
interface Book2 { title: string; };
// priceプロパティを持たないオブジェクトも受け取れる関数宣言 
const fn2 = (obj: Book1 | Book2) => {
    // Book2型にはpruceはないのでコンパイルエラー
    // console.log(obj.price);

    // priceを持つことを保証すればOK
    if ('price' in obj) {
        console.log(obj.price);
    }
};

// 型アサーション------------------------------------------
// 型アサーション（stringであること（nullではないこと）を明示）
// 戻り値がnullかもしれない関数の宣言と実行
const getTitle2 = (): string | null => 'abc';
const title2: string | null = getTitle() as string; // 型アサーション
console.log(title2.toUpperCase()); // 型ガード不要

// 型アサーション（stringであること（numberではなこと）を明示）
// 戻り値がstringかnumberの関数の宣言と実行
const getValue2 = (): string | number => 'abc';
const value2: string | number = getValue() as string; // 型アサーション
console.log(value2.toUpperCase()); // 型ガード不要

// 型アサーション（Bookであることを明示）
// Bookクラス型とCarクラス型の両方を受け取れる関数宣言
const fn3 = (obj: Book | Car) => {
    const book = obj as Book; // 型アサーション
    book.showInfo(); // 型ガード不要
};

// 型アサーション（Book1であることを明示）
// priceプロパティを持たないオブジェクトを受け取るかもしれない関数宣言
const fn4 = (obj: Book1 | Book2) => {
    const book = obj as Book1; // 型アサーション
    console.log(book.price); // 型ガード不要
};





