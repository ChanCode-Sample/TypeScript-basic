// クラス ----------------------
class Book {
    private _title: string;
    constructor(title) {
        this._title = title;
    }

    // getter
    get title(): string {
        return this._title;
    }

    // setter
    set title(title: string) {
        this._title = title;
    }
}
// Bookのインスタンス化
const book = new Book('恋空');
book.title = '君の名は'; // setter
console.log(book.title); // getter


// utilクラス ----------------------
class Util {
    static printHello() {
        console.log('Util hello');
    }
}
Util.printHello(); // staticメンバの利用

// 抽象クラス ----------------------
abstract class Animal {
    abstract walk(): void;
}
// 継承
class Dog extends Animal {
    walk() {
        console.log('てくてく歩く');
    }
    smell() {
        console.log('クンクン嗅ぐ');
    }
}
// 親クラス型に代入
const dog: Animal = new Dog();
dog.walk();
// dog.smell(); // 子クラスのメソッドは呼び出せないのでコンパイルエラー


// インターフェース ----------------------
interface Car {
    drive(): void;
}
// 実装クラス
class Bus implements Car {
    drive() {
        console.log('バスが走る');
    }
}
// インターフェース型に代入
const bus: Car = new Bus();
bus.drive();

// ポリモーフィズム ----------------------
class Taxi implements Car {
    drive() {
        console.log('タクシーが走ります');
    }
}
// インターフェース型に代入
const taxi: Car = new Taxi();
// インターフェース型の配列にセットして繰り返し
const cars: Car[] = [bus, taxi];
for (const car of cars) {
    car.drive(); // car変数のオブジェクトによって実行内容が変化
}


// Enum ----------------------
// 科目を列挙
enum Subjects {
    Japanese,
    English,
    Math
}
// 引数にEnumの定数を受け取る関数
const fn = (sub: Subjects) => {
    switch (sub) {
        case Subjects.Japanese:
            return '国語';
        case Subjects.English:
            return '英語';
        case Subjects.Math:
            return '数学';
    }
};
console.log(fn(Subjects.Japanese)); // 国語
console.log(Subjects.English); // 0




