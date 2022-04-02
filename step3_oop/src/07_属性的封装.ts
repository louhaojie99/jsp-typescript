;(function () {
	// 定义一个表示人的类
	class Person {
		// TS可以在属性前添加属性修饰符
		/**
		 * public    修饰符的属性可以在任意位置访问（修改）默认值
		 * private   私有属性, 私有属性只能在类内部进行访问（修改）
		 * protected 受保护的属性, 只能在当前类和当前类的子类中使用
		 *    - 通过类中添加方法使得私得属性可以被外部访问
		 */
		private name: string
		private age: number
		constructor(name: string, age: number) {
			this.name = name
			this.age = age
		}
		/**
		 * getter 方法用来读取属性
		 * setter 方法用来设置属性
		 *    - 他们被称之为属性的存取器
		 */
		// 定义方法, 用来获取name属性
		getName() {
			return this.name
		}
		// 定义方法, 用来设置name属性
		setName(value: string) {
			this.name = value
		}
		getAge() {
			return this.age
		}
		setAge(value: number) {
			// 判断年龄是否合法
			value >= 0 && (this.age = value)
		}

		// TS中设置getter方法的方式
		public get _name(): string {
			return this.name
		}
		public get _age(): number {
			return this.age
		}
		public set _name(v: string) {
			this.name = v
		}
		public set _age(v: number) {
			v >= 0 && (this.age = v)
			this.age = v
		}
	}
	const per = new Person('孙悟空', 18)

	/**
	 * 现在属性在对象中设置的, 属性可以任意的被修改
	 */
	per.setName('猪八戒')
	per.setAge(3)
	console.log(per.getName())
	console.log(per.getAge())

	per._name = '特兰克斯'
	per._age = 500
	console.log(per._name)
	console.log(per._age)

	class A {
		protected num: number
		constructor(num: number) {
			this.num = num
		}
	}
	class B extends A {
		test() {
			console.log(this.num)
		}
	}
	class C {
		// 可以直接将属性定义在构造函数中
		constructor(public name: string, public age: number) {}
	}
	const c = new C('悟饭', 111)
	console.log(c)
})()
