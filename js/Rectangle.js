/**
 * 矩形类，可以移动
 * 属性：宽度、高度、横坐标、纵坐标、横向速度、纵向速度、对应的dom对象
 * xSpeed：横向速度，单位（像素/秒），正数是向右，负数向左
 * ySpeed：纵向速度，单位（像素/秒），正数是向下，负数向上
 */

class Rectangle {
	constructor(width , height , left , top , xSpeed , ySpeed , dom)  {
		this.width = width
		this.height = height
		this.left = left
		this.top = top
		this.xSpeed = xSpeed
		this.ySpeed = ySpeed
		this.dom = dom
		this.rander()
	}
	

	// 渲染位置
	rander() {
		this.dom.style.width = this.width + 'px'
		this.dom.style.height = this.height + 'px'
		this.dom.style.left = this.left + 'px'
		this.dom.style.top = this.top + 'px'
	}

	// 移动  计算移动位置
	move(time) {
		let newLeft = this.xSpeed * time / 1000
		let newTop = this.ySpeed * time / 1000
		this.left = this.left + newLeft
		this.top += newTop
	
		// 是否有特殊要求要判断
		if (this.onMove) {
			this.onMove()
		}

		this.rander()
	}
}
