// 定义蛇的元素
export default class Snake {
	// 获取一个表示蛇头的元素
	head: HTMLElement
	// 蛇的身体（包括蛇头的）
	bodies: HTMLCollection
	// 获取蛇的容器
	element: HTMLElement

	constructor() {
		this.head = document.querySelector('#snake > div')! as HTMLElement
		this.bodies = document.getElementById('snake')?.getElementsByTagName('div') as HTMLCollection
		this.element = document.getElementById('snake')!
	}
	// 获取蛇的X坐标
	get X() {
		return this.head.offsetLeft
	}
	// 获取蛇的Y坐标
	get Y() {
		return this.head.offsetTop
	}
	// 设置蛇头的坐标
	set X(value: number) {
		if (this.X === value) return
		if (value < 0 || value > 290) {
			throw new Error('蛇撞墙了!')
		}
		// 修改X时, 是在修改水平坐标, 蛇在左移动时, 不能向右边掉头, 反之亦然
		if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
			// console.log('水平方向发生了掉头。')
			// 如果发生了掉头, 蛇向反方向继续移动
			if (value > this.X) {
				// 如果新值Value大于X, 蛇在向右走此时发生掉头, 应该使蛇继续向左走
				value = this.X - 10
			} else {
				value = this.X + 10
			}
		}
		// 移动身体
		this.moveBody()
		this.head.style.left = value + 'px'
		// 检查有没有撞到自己
		this.checkHeadBody()
	}
	set Y(value: number) {
		if (this.Y === value) return
		if (value < 0 || value > 290) {
			throw new Error('蛇撞墙了!')
		}
		// 修改Y时, 是在修改垂直坐标, 蛇在上移动时, 不能向下边掉头, 反之亦然
		if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
			// console.log('水平方向发生了掉头。')
			// 如果发生了掉头, 蛇向反方向继续移动
			if (value > this.Y) {
				// 如果新值Value大于X, 蛇在向右走此时发生掉头, 应该使蛇继续向左走
				value = this.Y - 10
			} else {
				value = this.Y + 10
			}
		}
		// 移动身体
		this.moveBody()
		this.head.style.top = value + 'px'
		// 检查有没有撞到自己
		this.checkHeadBody()
	}
	// 设置蛇增加身体的方法
	addBody() {
		// 向element中添加div
		this.element.insertAdjacentHTML('beforeend', '<div></div>')
	}
	// 添加一个蛇身体移动的方法
	moveBody() {
		console.log(this.bodies.length)

		/**
		 * 将后面的身体设置为前边的身体
		 * 	举例子:
		 * 		第4节 = 第3节的位置
		 * 		第3节 = 第2节的位置
		 * 		第2节 = 第1节的位置
		 */
		// 遍历获取所有的身体
		for (let i = this.bodies.length - 1; i > 0; i--) {
			// 获取前边身体的位置
			let X = (this.bodies[i - 1] as HTMLElement).offsetLeft
			let Y = (this.bodies[i - 1] as HTMLElement).offsetTop
			// 将这个值设置到当前的身体上
			;(this.bodies[i] as HTMLElement).style.left = `${X}px`
			;(this.bodies[i] as HTMLElement).style.top = `${Y}px`
			;(this.bodies[i] as HTMLElement).style.background = '#ff0000'
		}
	}
	// 检查头和身体有没有相撞的方法
	checkHeadBody() {
		// 获取所有的身体检查其是否和蛇头的坐标发生重叠
		for (let i = 1; i < this.bodies.length; i++) {
			let bd = this.bodies[i] as HTMLElement
			if (this.X == bd.offsetLeft && this.Y == bd.offsetTop) {
				// 说明蛇头撞到了身体, 游戏结束
				throw new Error('撞到了自己~~')
			}
		}
	}
}
