/**
 * 抽象
 * 类
 * 构造函数
 * 封装
 * 继承
 * 多态
 */
;(function () {
	// 定义一个Animal类
	class Animal {
		name: string
		age: number
		constructor(name: string, age: number) {
			this.name = name
			this.age = age
		}
		sayHi() {
			console.log('动物在叫~~~')
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
			console.log(`${this.name}在跑~~`)
		}
		sayHi() {
			console.log('汪汪！')
		}
	}
	// 定义表示猫的类
	class Cats extends Animal {}
	const dog = new Dogs('旺财', 5)
	const cat = new Cats('小花', 2)
	console.log(dog)
	console.log(cat)
	dog.sayHi()
	dog.run()
	cat.sayHi()
})()
