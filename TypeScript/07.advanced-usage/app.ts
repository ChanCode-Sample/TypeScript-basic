// keyof
type Book = { title: string, price: number };
type bookKeys = keyof Book; // title | price のユニオン型
const bookKey: bookKeys = 'title';


// インデックスアクセス型
// オブジェクトのプロパティの型を取り出す
type Person = { name: string, age: number };
type nameType = Person['name']; // string
// 全てのプロパティの型を取り出す
type personTypes = Person[keyof Person]; // string | number

// 配列の要素の型を取り出す
type Tuple = [string, number];
type firstType = Tuple[0]; // string
type secondType = Tuple[1]; // number


// Mapped Types
// key1とkey2プロパティを持つオブジェクト型を生成する
type Simple = {
    [K in 'key1' | 'key2']: string
};
type StringKeys = Simple;
// StringKeys型の内容
// {
//     key1: string;
//     key2: string;
// }

// T型に指定されたオブジェクト型のプロパティを全て省略可能プロパティにした型を生成する
type Optional<T> = {
    [K in keyof T]?: T[K]
};
// Book型のプロパティを全て省略可能にする
type BookOptional = Optional<Book>;
// priceプロパティを省略しても代入できる
const book2: BookOptional = { title: 'ABC' };
// BookOptional型の内容
// {
//     title?: string | undefined;
//     price?: number | undefined;
// }



// Conditional Types
// string型か判断し、true型かfalse型を取得
type IsString<T> = T extends string ? true : false;
type checkString = IsString<'Hello'>; // true型

// Book型を満たすか判断し、Book型かnever型を取得
type extendsBook<T> = T extends Book ? T : never;
type checkBook = extendsBook<Book>; // Bookを満たす
const book1: checkBook = { title: 'ABC', price: 500 };


// infer
// 関数型の戻り値の型を取得
type GetRType<T> = T extends (...args: any[]) => infer R ? R : never;

// 関数型の定義
type show = (name: string) => string; // 戻り値stringの関数
type calc = (x: number, y: number) => number; //　戻り値numberの関数

// 戻り値の型を取得
type showRType = GetRType<show>; // string
type calcRtype = GetRType<calc>; // number

// 関数型の引数の型を取得
type GetArgType<T> = T extends (...args: infer A) => any ? A : never;

// 引数の型を取得（タプル型で取得される）
type showArgType = GetArgType<show>; // [name: string]
type calcArgType = GetArgType<calc>; // [x: number, y: number]
const showArg: showArgType = ['abc'];
const calcArg: calcArgType = [1, 2];

// 配列型の個別の要素の型を取得
type GetElementType<T> = T extends (infer U)[] ? U : never;

// 配列型の定義
type Array1 = [number, string, boolean]; // タプル型
type Array2 = (number | string)[]; // ユニオン型の配列
type Array3 = string[]; // string型の配列

// ElementType を使用して個別の要素の型を取得
type Array1Types = GetElementType<Array1>; // number | string | boolean
type Array2Types = GetElementType<Array2>; // number | string 
type Array3Types = GetElementType<Array3>; // string 


// Utility Type
// Mapped Types
// 指定された型のすべてのプロパティを省略可能にする型を生成
type OptionalType = Partial<Book>;
// {
//     title?: string | undefined;
//     price?: number | undefined;
// }

// Conditional Types
// 関数型からその戻り値型を取得
type RType = ReturnType<show>; // string
// 関数型からその引数型のタプル型を取得
type ArgType = Parameters<show>; // [name: string]

