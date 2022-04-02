(function () {
	/**
	 * 基本数据类型（原始数据类型）
	 * number				  （数值类型）
	 * string				  （字符类型）
	 * boolean			  （布尔类型）
	 * undefined  null（空值类型）
	 * symbol					（唯一类型）
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

	/**
	 * object 表示一个js对象
	 */
	let a: object;
	a = {};
	a = [];
	a = function () {};

	/**
	 * object 使用场景
	 * {} 用来指定对象中可以包含哪些属性
	 * 语法：{ 属性名: 属性值,... }
	 * 在属性名字后面追加?，表示属性是可选的
	 * [propName: string]: any 表示任意类型的属性
	 */
	let b: { name: string; age: number; sex?: string };
	b = { name: '小花', age: 20, sex: '男' };

	let c: { name: string; [propName: string]: any };
	c = { name: '猪八戒', age: 20, sex: '男', color: 'white' };

	// 设置函数结构的类型声明
	// 语法：(形参: 类型, 形参: 类型, ...) => 返回值
	let d: (num1: number, num2: number) => number;
	d = function (n1, n2): number {
		return n1 + n2;
	};

	/**
	 * [] 数组，使用场景
	 * string[]  表示字符串数组
	 * number[]  表示数组值数组
	 * boolean[] 表示布尔值数组
	 * ...
	 */
	let e: string[];
	// let e: number[]
	// let e: boolean[]
	e = ['1', '2', '3', '4', '5'];
	let g1: Array<number> = [1, 2, 3, 4, 5];
	let g2: Array<string>;
	g2 = ['1', '2', '3', '4', '5'];

	/**
	 * 元组，元组就是固定长度的数组
	 */
	let h: [string, string];
	h = ['hello', 'ts'];

	/**
	 * enum 枚举，类似于字典概念
	 */
	enum Gender {
		Male = '男',
		Female = '女',
	}
	let i: { name: string; gender: Gender };
	i = {
		name: '孙悟空',
		gender: Gender.Male, // 'male'
	};
	// console.log(i.gender === Gender.Male)

	// & 表示且，同时
	// | 表示或，或者
	let j: { name: string } & { age: number };
	j = { name: '孙悟空', age: 500 };

	// 类型的别名
	type myType = 1 | 2 | 3 | 4 | 5;
	let k: 1 | 2 | 3 | 4 | 5;
	let l: myType;
	let m: myType;
})();
