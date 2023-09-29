var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// クラス ----------------------
var Book = /** @class */ (function () {
    function Book(title) {
        this._title = title;
    }
    Object.defineProperty(Book.prototype, "title", {
        // getter
        get: function () {
            return this._title;
        },
        // setter
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    return Book;
}());
// Bookのインスタンス化
var book = new Book('恋空');
book.title = '君の名は'; // setter
console.log(book.title); // getter
// utilクラス ----------------------
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.printHello = function () {
        console.log('Util hello');
    };
    return Util;
}());
Util.printHello(); // staticメンバの利用
// 抽象クラス ----------------------
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
// 継承
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.walk = function () {
        console.log('てくてく歩く');
    };
    Dog.prototype.smell = function () {
        console.log('クンクン嗅ぐ');
    };
    return Dog;
}(Animal));
// 親クラス型に代入
var dog = new Dog();
dog.walk();
// 実装クラス
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.drive = function () {
        console.log('バスが走る');
    };
    return Bus;
}());
// インターフェース型に代入
var bus = new Bus();
bus.drive();
// ポリモーフィズム ----------------------
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.drive = function () {
        console.log('タクシーが走ります');
    };
    return Taxi;
}());
var taxi = new Taxi();
var cars = [bus, taxi];
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    car.drive();
}
// Enum ----------------------
var Subjects;
(function (Subjects) {
    Subjects[Subjects["Japanese"] = 0] = "Japanese";
    Subjects[Subjects["English"] = 1] = "English";
    Subjects[Subjects["Math"] = 2] = "Math";
})(Subjects || (Subjects = {}));
var fn = function (sub) {
    switch (sub) {
        case Subjects.Japanese:
            return '国語';
        case Subjects.English:
            return '英語';
        case Subjects.Math:
            return '数学';
    }
};
console.log(fn(Subjects.Japanese));
console.log(Subjects.English); // 0
