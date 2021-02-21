class Game {
  constructor() {
    //创建对象
    this.bird = new Bird()  
    this.sky = new Sky()
    this.land = new Land(-150)
    this.pipe = new morePipe(-150)

    this.timer = null
    this.tick = 16  //定时器时间
    this.gameover = false //游戏是否结束
  }


  //开始游戏
  start() {
    if(this.timer) {
      return
    }
    if (this.gameover) {
      //重新开始游戏
      window.location.reload()
    }
    // 游戏开始
    this.pipe.createPipes()
    this.bird.startSwing()
    this.timer = setInterval(() => {
      this.sky.move(this.tick)
      this.bird.move(this.tick)
      this.land.move(this.tick)
      this.pipe.pairs.forEach(item=> {
        item.move(this.tick)
      })
      if (this.isGameOver()) {
        this.stop()
        this.gameover = true
      }
    }, this.tick);
  }


  //停止游戏
  stop() {
    clearInterval(this.timer)
    this.timer = null
    this.pipe.stopCreate()
    this.bird.stopSwing()
  }


  //判断游戏是否结束
  isGameOver() {
    if (this.bird.top <= 0 ) {
      return true
    }
    if (this.bird.top >= this.bird.maxY) {
      return true
    }
    for (let i = 0; i < this.pipe.pairs.length; i++) {
      const pair = this.pipe.pairs[i]
      if (this.isHit(this.bird,pair.upPipe) || this.isHit(this.bird,pair.downPipe)) {
        return true
      }
    }
    return false
  }


  //判断是否相撞
  isHit(r1,r2) {
    // 横向：两个矩形的中心点的横向距离，是否小于矩形宽度之和的一半
    // 纵向：两个矩形的中心点的纵向距离，是否小于矩形高度之和的一半
    let rX1 = r1.left + r1.width / 2
    let rY1 = r1.top + r1.height / 2 
    let rX2 = r2.left + r2.width / 2
    let rY2 = r2.top + r2.height / 2
    let disX = Math.abs(rX1 - rX2)
    let disY = Math.abs(rY1 - rY2)
    if (disX < (r1.width + r2.width) / 2 && disY < (r1.height + r2.height) / 2) {
      return true
    }else {
      return false
    }
  }

  // 绑定事件
  addEvnet() {
    window.onkeydown = e => {
      if (e.key === 'Enter') {
        if (this.timer) {
          this.stop()
        }else {
          this.start()
        }
      }else if (e.key === ' ') {
        this.bird.jump()
      }
    }
  }

}

const game = new Game()
game.addEvnet()