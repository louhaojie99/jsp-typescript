import Snake from './Snake'
import Foot from './Foot'
import ScorePanel from './ScorePanel'

// 游戏控制器, 控制其他的所有类
export default class GameControl {
	// 定义三个属性
	// 蛇
	snake: Snake
	foot: Foot
	scorePanel: ScorePanel
	// 创建一个属性存储蛇的移动方向（也就是按键的方向）
	direction: string = ''
	// 创建一个属性用来记录游戏是否结束
	isLive: boolean = true

	constructor() {
		this.snake = new Snake()
		this.foot = new Foot()
		this.scorePanel = new ScorePanel(10, 2)
		this.init()
	}

	// 游戏的初始化方法, 调用后游戏即开始
	init() {
		document.addEventListener('keydown', this.keyDownHandler.bind(this))
		// 调用run方法使蛇移动
		this.run()
	}
	// 键盘按下的响应函数
	/* 
    ArrowUp     Up     ↑
    ArrowRight  Right  →
    ArrowDown   Down   ↓
    ArrowLeft   Left   ←
  */
	keyDownHandler(event: KeyboardEvent) {
		// 需要检查event.key的值是否合法（用户按了正确验证）
		this.direction = event.key
	}

	// 创建蛇移动的一个的方法
	run() {
		/**
		 * 根据方向（this.direction）来使蛇的位置改变
		 *    向上 top    减少
		 *    向下 top    增加
		 *    向左 left   减少
		 *    向右 left   增加
		 */
		// 获取蛇现在的坐标
		let X = this.snake.X
		let Y = this.snake.Y
		switch (this.direction) {
			case 'ArrowUp':
			case 'Up':
				Y -= 10
				break
			case 'ArrowDown':
			case 'Down':
				Y += 10
				break
			case 'ArrowLeft':
			case 'Left':
				X -= 10
				break
			case 'ArrowRight':
			case 'Right':
				X += 10
				break
			default:
				break
		}

		// 检查蛇是否吃到了食物
		if (this.checkEat(X, Y)) {
			// 食物的位置需要进行重置
			this.foot.change()
			// 分数增加
			this.scorePanel.addScore()
			// 蛇增一阶
			this.snake.addBody()
		}

		try {
			this.snake.X = X
			this.snake.Y = Y
		} catch (e) {
			// 进入到catch说明出现了异常,游戏结束, 弹出一个提示信息
			alert(e + ' ' + 'GAME OVER')
			// 将isLive设置为false
			this.isLive = false
		}

		// 开启一个定时的调用
		this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
	}

	// 定义一个方法, 检查蛇是否吃到了食物
	checkEat(X: number, Y: number) {
		return X === this.foot.X && Y === this.foot.Y
	}
}
