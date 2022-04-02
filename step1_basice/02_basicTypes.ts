(function () {
	/**
	 * 基本数据类型（原始数据类型）
	 * number
	 * string
	 * boolean
	 * null
	 * undefined
	 * sybol
	 */

	let a: number = 100;
	let b: string = 'hello';
	let c: boolean = true;
	let d: null = null;
	let e: undefined = undefined;
	// let f: symbol = Symbol('foo') // 需要tsconfig.json target: es2015配置

	/**
	 * 由于JS的语法不严谨，声明一个变量什么类型的值都可以存放，在成维护困扰
	 * ts使用起来可以指定具体存储什么类型的数据
	 * 语法：
	 * 	let n: number = 100
	 * 	let n: string = 'hello'
	 * 	let n: boolean = true
	 *  ....
	 */

	// TS中的类型自动推断，就是不声明类型，根据存储的值来自动推断
	let num = 1000; // number
	let str = 'hello'; // string
	let flag = false; // number
	// num = flag // 不能将类型"boolean"分配给类型"number"

	// TS中函数注意事项，不声明参数类型不严谨
	function sum1(a, b) {
		return a + b;
	}
	sum1(100, 'false'); //自动类型推断的缺点（不声明参数不严谨）

	// TS中函数注意事项，正确使用声明参数类型
	function sum2(a: number, b: number) {
		return a + b;
	}
	sum2(100, 200);

	// TS中函数注意事项，函数返回值声明类型
	function sum3(a: number, b: number): number {
		return a + b;
	}
	sum3(200, 300);
})();
