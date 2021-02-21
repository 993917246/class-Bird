const skyDom = document.querySelector('.sky')
const skyStyle = getComputedStyle(skyDom)
const skyHeight = parseFloat(skyStyle.height)
const skyWidth = parseFloat(skyStyle.width)
const skyTop = parseFloat(skyStyle.top) 
const skyLeft = parseFloat(skyStyle.left)


class Sky extends Rectangle {
  constructor() {
    // width , height , left , top , xSpeed , ySpeed , dom
    super(skyWidth , skyHeight , skyLeft , skyTop , -100 , 0 , skyDom)
  }

  onMove() {
    // 判断是否移动了一半，如果是返回原点
    if (this.left <= (-this.width / 2)) {
      this.left = 0
    }
  }
}

// let sky = new Sky

// setInterval(() => {
//   sky.move(16)
// }, 16);