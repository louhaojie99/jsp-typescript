import { MAX_LIFE } from '../config/global'

// 定义积分牌类
export default class ScorePanel {
	public score: number = 0
	public level: number = 1
	public scoreEle: HTMLElement
	public levelEle: HTMLElement
	public maxLevel: number = MAX_LIFE
	public upScore: number

	constructor(maxLevel: number = 10, upScore: number = 10) {
		this.scoreEle = document.getElementById('score')!
		this.levelEle = document.getElementById('level')!
		this.maxLevel = maxLevel
		this.upScore = upScore
	}
	// 设置一个加分方法
	addScore() {
		this.scoreEle.innerText = ++this.score + ''
		this.score % 10 === 0 && this.levelUp()
	}
	// 提升等级的方法
	levelUp() {
		this.level < this.maxLevel && (this.levelEle.innerText = ++this.level + '')
	}
}
