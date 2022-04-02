"use strict";
/**
 * 使用class关键字定义一个类
 *
 * 对象中主要包含了两个部分
 * 属性
 * 方法
 */
// function PersonX(name, age) {
// 	this.name = name
// 	this.age = age
// }
// const p1 = new PersonX('张三', 20)
// console.log(p1)
/**
 * 只当定义的属性是实例属性, 需要通过对象的实例去访问:
 * 		const per = new Person();
 * 		per.name = '赵云'
 *
 * 使用static开头的属性是静态属性(类属性), 可以通过类直接访问
 * 		Person.age
 *
 * readonly 设置属性只能读
 *
 * 如果方法以static开头则方法就是类方法,可以直接通过类去调用
 */
class Person {
    constructor() {
        // 定义实例属性
        this.name = '孙悟空';
    }
    // 定义方法
    sayHello() {
        console.log(`我的名字是：${this.name}`);
    }
    static sayHelloWorld() {
        console.log('你好世界');
    }
}
// 在属性前使用static关键字可以定义类属性(静态属性)
Person.age = 18;
const p2 = new Person();
console.log(p2.name);
console.log(Person.age);
p2.sayHello();
Person.sayHelloWorld();
class Dog {
    constructor(name, age) {
        // 在实例方法中, this就表示当前的实例
        // 在构造函数中当前对象就是当前新建的那个对象
        // 可以通过this向新建的对象中添加属性
        console.log('构造函数执 行了~~~');
        console.log(this);
        this.name = name;
        this.age = age;
    }
    bark() {
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log('我的名字是：', this.name, ',今天' + this.age + '岁了！');
    }
}
const dog1 = new Dog('旺财', 4);
const dog2 = new Dog('小花', 2);
console.log(dog1, dog2);
dog1.bark();
dog2.bark();
/**
 * 抽象
 * 类
 * 构造函数
 * 封装
 * 继承
 * 多态
 */
;
(function () {
    // 定义一个Animal类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHi() {
            console.log('动物在叫~~~');
        }
    }
    /**
     * Dog extends Animal
     *  - 此时, Animal被称为父类, Dog被称为子类
     *  - 使用继承后, 子类将拥有父类所有的方法和属性
     *  - 通过继承可以将多个类中的共有的代码写在一个父类中
     *    这样只需要写一次即可可以让所有的子类同时拥有父类的属性和方法
     *  - 如果在子类中添加了和父类相同的方法, 则子类方法会覆盖掉父类的方法
     * 		这种子类覆盖掉父类方法的形式我们称之为方法的重写
     */
    // 定义一个表示狗的类
    class Dogs extends Animal {
        run() {
            console.log(`${this.name}在跑~~`);
        }
        sayHi() {
            console.log('汪汪！');
        }
    }
    // 定义表示猫的类
    class Cats extends Animal {
    }
    const dog = new Dogs('旺财', 5);
    const cat = new Cats('小花', 2);
    console.log(dog);
    console.log(cat);
    dog.sayHi();
    dog.run();
    cat.sayHi();
})();
/**
 * 父类也叫做超类
 * super代表父类
 */
;
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        syaHello() {
            console.log('动物在叫~');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // 如果在子类中写了构造函数, 子类的构造函数必须对父类的构造函数进行调用
            super(name); // 调用父类的构造函数
            this.name = name;
            this.age = age;
        }
        syaHello() {
            // 在类的方法中super表示当前类的父类
            // super.syaHello()
            console.log('汪汪汪汪汪!');
        }
    }
    let dog = new Dog('旺财', 3);
    console.log(dog);
})();
/**
 * 以abstract开头的类型抽象类
 *    抽象类和其他类区别不大, 只是不能用来创建对象
 *    抽象类就是专门用来被继承的类
 *
 *    抽象类中可以添加抽象方法
 */
;
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        syaHello() {
            console.log('汪汪汪汪汪!');
        }
    }
    class Cat extends Animal {
        syaHello() {
            console.log('喵喵喵喵!');
        }
    }
})();
;
(function () {
    const obj = {
        name: '小花',
        age: 18,
        gender: '男',
    };
    /**
     * 定义类时, 可以使用类去实现一个接口
     *  实现接口就是使这个类满足接口的要求
     */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('大家好~~');
        }
    }
    let m = new MyClass('小明');
})();
;
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        /**
         * getter 方法用来读取属性
         * setter 方法用来设置属性
         *    - 他们被称之为属性的存取器
         */
        // 定义方法, 用来获取name属性
        getName() {
            return this.name;
        }
        // 定义方法, 用来设置name属性
        setName(value) {
            this.name = value;
        }
        getAge() {
            return this.age;
        }
        setAge(value) {
            // 判断年龄是否合法
            value >= 0 && (this.age = value);
        }
        // TS中设置getter方法的方式
        get _name() {
            return this.name;
        }
        get _age() {
            return this.age;
        }
        set _name(v) {
            this.name = v;
        }
        set _age(v) {
            v >= 0 && (this.age = v);
            this.age = v;
        }
    }
    const per = new Person('孙悟空', 18);
    /**
     * 现在属性在对象中设置的, 属性可以任意的被修改
     */
    per.setName('猪八戒');
    per.setAge(3);
    console.log(per.getName());
    console.log(per.getAge());
    per._name = '特兰克斯';
    per._age = 500;
    console.log(per._name);
    console.log(per._age);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    class C {
        // 可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('悟饭', 111);
    console.log(c);
})();
;
(function () {
    function fn(a) {
        return a;
    }
    /**
     * 在定义函数或者类时, 遇到类型不明确的就可以使用泛型
     */
    function func(a) {
        return a;
    }
    // 可以直接调用具有泛型的函数
    let result1 = func(100); // 不指定泛型,TS可以自动对类进行推断
    let result2 = func('hello'); // 指定泛型
    function funx(a, b) {
        return a;
    }
    let result3 = funx(123, 'hello');
    // T extends Inter 表示泛型T必须是Inter实现类（子类）
    function funv(a) {
        return a.length;
    }
    funv('99999');
    class MyClass {
        constructor(name) {
            this.name = name;
        }
    }
    const mc = new MyClass('孙悟空');
})();
