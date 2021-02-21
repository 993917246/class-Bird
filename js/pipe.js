const pipeLeft = parseFloat(getComputedStyle(document.querySelector('#demo')).width)


// 单个柱子class类
class pipe extends Rectangle {
  constructor(height , top , speed , dom) {
    super(52 ,height ,pipeLeft ,top ,speed ,0 ,dom)
  }

  onMove() {
    // 移出屏幕删除dom
    if (this.left < -this.width) {
      this.dom.remove()
    }
  }
}

function getRandom(min,max) {
  return Math.floor(Math.random() * (max - min) + min)
}


// 柱子对class
class pipes {
  constructor(speed) {
    this.spaceHeight = 150 //空隙距离
    this.minHeight = 80 //柱子最小高度
    this.maxHeihgt = landTop - this.spaceHeight - this.minHeight  //柱子最大高度
    
    const upHeight = getRandom(this.minHeight,this.maxHeihgt) //上柱子高度
    const upDom = document.createElement('div') //创建上柱子结构
    upDom.className = 'pipe up'
    this.upPipe = new pipe(upHeight , 0 ,speed ,upDom)

    const downHeight = landTop - this.spaceHeight - upHeight  //下柱子高度
    const downTop = landTop - downHeight  //下柱子位置
    const downDom = document.createElement('div') //创建下柱子结构
    downDom.className = 'pipe down'
    this.downPipe = new pipe(downHeight , downTop , speed , downDom)

    document.getElementById('demo').appendChild(upDom)
    document.getElementById('demo').appendChild(downDom)
  }

  move(time) {
    this.upPipe.move(time)
    this.downPipe.move(time)
  }

  get useLess() {
    return this.upPipe.left <= -this.upPipe.left
  }

}


class morePipe {
  constructor(speed) {
    this.speed = speed
    this.pairs = []
    this.tick = 1500
    this.timer = null
  }

  // 创建pipe
  createPipes() {
    if (this.timer) {
      return
    }else {
      this.timer = setInterval(() => {
        this.pairs.push(new pipes(this.speed))
        //移除没用的柱子对
        for (let i = 0; i < this.pairs.length; i++) {
          let pair = this.pairs[i]
          if (pair.useLess) {
            //没用的柱子对
            this.pairs.splice(i,1)
            i--
          }
        }
      }, this.tick);
    }
  }

  //停止创建
  stopCreate() {
    clearInterval(this.timer)
    this.timer = null
  }
}

// const pipeDom = new morePipe(-100)
// pipeDom.createPipes()
// setInterval(() => {
//   pipeDom.pairs.forEach(pipe => {
//     pipe.move(16)
//   })
// }, 16);
