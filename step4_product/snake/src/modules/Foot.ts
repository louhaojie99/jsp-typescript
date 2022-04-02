// 定义食物
export default class Food {
	// 定义一个表示食物所对应的元素
	public element: HTMLElement

	constructor() {
		// 获取页面的food元素赋值给element
		this.element = document.getElementById('food')!
	}

	// 获取食物x轴坐标的方法
	get X() {
		return this.element.offsetLeft
	}
	// 获取食物y轴坐标的方法
	get Y() {
		return this.element.offsetTop
	}
	// 修改食物位置的方法
	change() {
		// 生成随机的位置
		// 食物的位置最小是0, 最大是290
		// 蛇移动的位置必须待是10的倍数
		let x = Math.round(Math.random() * 29) * 10
		let y = Math.round(Math.random() * 29) * 10
		this.element.style.left = x + 'px'
		this.element.style.top = y + 'px'
	}
}
