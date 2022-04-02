class Dog {
	// name: string = '旺财'
	// age: number = 6000

	// bark() {
	// 	console.log('汪汪汪!')
	// }

	/**
	 * constructor 被称为构造函数
	 * 构造函数会在对象创建时调用
	 */
	name: string
	age: number
	constructor(name: string, age: number) {
		// 在实例方法中, this就表示当前的实例
		// 在构造函数中当前对象就是当前新建的那个对象
		// 可以通过this向新建的对象中添加属性
		console.log('构造函数执 行了~~~')
		console.log(this)
		this.name = name
		this.age = age
	}

	bark() {
		// 在方法中可以通过this来表示当前调用方法的对象
		console.log('我的名字是：', this.name, ',今天' + this.age + '岁了！')
	}
}
const dog1 = new Dog('旺财', 4)
const dog2 = new Dog('小花', 2)
console.log(dog1, dog2)
dog1.bark()
dog2.bark()
