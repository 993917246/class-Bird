const landDom = document.querySelector('.land')
const landStyle = getComputedStyle(landDom)
const landHeight = parseFloat(landStyle.height)
const landWidth = parseFloat(landStyle.width)
const landTop = parseFloat(landStyle.top) 
const landLeft = parseFloat(landStyle.left)

class Land extends Rectangle {
  constructor(speed) {
    // width , height , left , top , xSpeed , ySpeed , dom
    super(landWidth , landHeight , landLeft , landTop , speed , 0 , landDom)
  }

  onMove() {
    // 判断是否移动了一半，如果是返回原点
    if (this.left <= (-this.width / 2)) {
      this.left = 0
    }
  }
}

// let land = new Land(-150)

// setInterval(() => {
//   land.move(16)
// }, 16);