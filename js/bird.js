const birdDom = document.querySelector('.bird')
const birdStyle = getComputedStyle(birdDom)
const birdHeight = parseFloat(birdStyle.height)
const birdWidth = parseFloat(birdStyle.width)
const birdTop = parseFloat(birdStyle.top) 
const birdLeft = parseFloat(birdStyle.left)
const maxTop = parseFloat(getComputedStyle(document.querySelector('#demo')).height) - landHeight - birdHeight



class Bird extends Rectangle {
  constructor() {
    super(birdWidth , birdHeight , birdLeft , birdTop , 0 , 0 , birdDom)
    this.g = 2 //加速度
    this.maxY = maxTop  //最大高度
    this.timer = null //煽动翅膀定时器
    this.swingIndex = 1 //煽动翅膀的index
    
    this.rander()
  }


  rander() {
    super.rander()
    this.dom.className = `bird swing${this.swingIndex}`
  }

  startSwing() {
    // 开始煽动翅膀
    if (this.timer) {
      return
    }else {
      this.timer = setInterval(() => {
        this.swingIndex = (this.swingIndex + 1) % 3 + 1
        this.rander()
      }, 200);
    }
  }

  stopSwing() {
    // 停止煽动翅膀
    clearInterval(this.timer)
  }

  move(time) {
    super.move(time)
    // 速度=加速度*时间
    this.ySpeed += this.g * time
  }

  onMove() {
    //控制坐标范围
    if (this.top <= 0 ) {
      this.top = 0
    }else if (this.top >= this.maxY) {
      this.top = this.maxY
    }
  }

  jump() {
    // 跳一下
    this.ySpeed = -500
  }

}

// let bird = new Bird
// bird.startSwing()
// setInterval(() => {
//   bird.move(16)
// }, 16);
