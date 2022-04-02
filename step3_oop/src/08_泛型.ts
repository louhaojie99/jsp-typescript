;(function () {
	function fn(a: number): number {
		return a
	}
	/**
	 * 在定义函数或者类时, 遇到类型不明确的就可以使用泛型
	 */
	function func<T>(a: T): T {
		return a
	}
	// 可以直接调用具有泛型的函数
	let result1 = func(100) // 不指定泛型,TS可以自动对类进行推断
	let result2 = func<string>('hello') // 指定泛型

	function funx<T, K>(a: T, b: K): T {
		return a
	}
	let result3 = funx<number, string>(123, 'hello')

	interface Inter {
		length: number
	}

	// T extends Inter 表示泛型T必须是Inter实现类（子类）
	function funv<T extends Inter>(a: T): number {
		return a.length
	}
	funv('99999')

	class MyClass<T> {
		name: T
		constructor(name: T) {
			this.name = name
		}
	}
	const mc = new MyClass<string>('孙悟空')
})()
