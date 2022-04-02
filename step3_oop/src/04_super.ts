/**
 * 父类也叫做超类
 * super代表父类
 */

;(function () {
	class Animal {
		name: string
		constructor(name: string) {
			this.name = name
		}
		syaHello() {
			console.log('动物在叫~')
		}
	}

	class Dog extends Animal {
		age: number
		constructor(name: string, age: number) {
			// 如果在子类中写了构造函数, 子类的构造函数必须对父类的构造函数进行调用
			super(name) // 调用父类的构造函数
			this.name = name
			this.age = age
		}
		syaHello() {
			// 在类的方法中super表示当前类的父类
			// super.syaHello()

			console.log('汪汪汪汪汪!')
		}
	}

	let dog = new Dog('旺财', 3)
	console.log(dog)
})()
