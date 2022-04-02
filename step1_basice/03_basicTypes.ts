(function () {
	/**
	 * 基本数据类型（原始数据类型）
	 * number				  （数值类型）
	 * string				  （字符类型）
	 * boolean			  （布尔类型）
	 * undefined  null（空值类型）
	 *
	 * 基本数据类型（非原始数据类型）
	 * array					（数组类型）
	 * tuple					（元组类型）
	 * object					（对象类型）
	 * enum						（枚举类型）		     // 枚举，类似于字典概念
	 * unknown				（未知类型）			   // 表示未知类型的值，unknown类型的变量，不能直接赋值给其他变量
	 * any						（任意类型）			   // 任意类型，一个变量设置类型为any后相当于对该变量关闭了TS类型检测
	 * void						（无返回值类型）		  // 函数无返回值的
	 * never					（永不存在的值的类型） // 如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
	 * 联合类型
	 * 函数类型
	 */

	// TS中如何声明一个常量不可被改变的值
	let NUMBER: 10000;
	let CHINA: '中国';
	// NUMBER = 20000		// 不能修改常量
	// CHINA = '美国'		 // 不能修改常量

	// TS中，联合类型的概念就是多条件 |  （或者）
	/**
	 * 语法：
	 * 	let xh: number | string
	 *  可以使用 | 来链接多个类型(联合类型)
	 */
	let xh: number | string;
	xh = '20';
	xh = 20;

	// TS中，类型声明之 any
	/**
	 * 语法：
	 * 	let lhj: any
	 *  any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS类型检测
	 */
	let lhj: any;
	lhj = 10;
	lhj = 'hello';
	lhj = true;
	lhj = [];
	lhj = {};
	lhj = function () {};

	// TS中，类型声明之 unknown
	/**
	 * 语法：
	 * 	let lhj: unknown
	 *  unknown 表示未知类型的值，unknown类型的变量，不能直接赋值给其他变量
	 */
	let unk1: unknown;
	let unk2: number = 2000;
	unk1 = false;
	unk1 = 10000;
	unk1 = 'hello';
	// unk2 = unk1		// 不能直接赋值给其他变量
	// 类型保护
	if (typeof unk1 === 'string') {
		unk1.length;
	}

	// TS中，类型断言，可以用来告诉解析器变量的实际类型
	/**
	 * 语法：
	 * 	变量 as 类型		或者    <类型>变量
	 *
	 */
	let personName = '小花' as string;
	let personAge = 22 as number;
	personName = <string>'小花';
	personAge = <number>22;
	function func(num) {
		if (num > 0) {
			return true;
		} else {
			return 123;
		}
	}

	// TS中，函数无返回值，void 用来表示空，以函数为例，就表示没有返回值函数
	function funz(): void {
		console.log('你好世界');

		// return 10000  // 不能有返回值，会报错
		// return返回null或者undefined ts会认为就是返回空值,不会报错
		return null;
	}

	/**
	 * TS中，never, 类型表示永远不会有值的一种类型(很抽象是不是)
	 * 		never类型是那些总是会抛出异常或根本就不会有返回值的函数
	 * 		表达式或箭头函数表达式的返回值类型
	 */
	// 因为总是抛出异常，所以 error 将不会有返回值
	function funv(): never {
		throw new Error('报错了!'); // 抛出异常
	}
	// 因为存在死循环，所以 infiniteLoop 将不会有返回值
	function infiniteLoop(): never {
		while (true) {}
	}
})();
