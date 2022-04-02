/**
 * 父类也叫做超类
 * super代表父类
 */
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
;
(function () {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.syaHello = function () {
            console.log('动物在叫~');
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, age) {
            var _this = 
            // 如果在子类中写了构造函数, 子类的构造函数必须对父类的构造函数进行调用
            _super.call(this, name) // 调用父类的构造函数
             || this;
            _this.name = name;
            _this.age = age;
            return _this;
        }
        Dog.prototype.syaHello = function () {
            // 在类的方法中super表示当前类的父类
            // super.syaHello()
            console.log('汪汪汪汪汪!');
        };
        return Dog;
    }(Animal));
    var dog = new Dog('旺财', 3);
    console.log(dog);
})();
