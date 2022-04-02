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
	// 定义实例属性
	readonly name: string = '孙悟空'

	// 在属性前使用static关键字可以定义类属性(静态属性)
	static readonly age: number = 18

	// 定义方法
	sayHello() {
		console.log(`我的名字是：${this.name}`)
	}

	static sayHelloWorld() {
		console.log('你好世界')
	}
}
const p2 = new Person()
console.log(p2.name)
console.log(Person.age)
p2.sayHello()
Person.sayHelloWorld()
