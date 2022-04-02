;
(function () {
    // 定义一个表示人的类
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        return Person;
    }());
    var per = new Person('孙悟空', 18);
    /**
     * 现在属性在对象中设置的, 属性可以任意的被修改
     */
    per.name = '猪八戒';
    per.age = 38;
    console.log(per);
})();
