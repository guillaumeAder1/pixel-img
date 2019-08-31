
export const processImg = (img, canvas, cellHeight, cellWidth, numberCells) => {
  canvas.width = img.width;
  canvas.height = img.height;
  canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
  const res = []
  let c = document.createElement('canvas')
  c.width =  canvas.width
  c.height = canvas.height
  document.body.appendChild(c)
  c = c.getContext('2d')

  for (let i = 0 ; i < numberCells ; i ++) {
    for (let j = 0 ; j < numberCells ; j ++) {
      let x = cellWidth * i 
      let y = cellHeight * j
      let src = canvas.getContext('2d').getImageData(x, y, cellWidth, cellHeight).data
      res.push({src, x, y})
    }
  }
  const colors = []
  const total = res[0].src.length
  for (let i = 0 ; i < res.length ; i ++) {
    const obj = { 
      r: 0, 
      g: 0,
      b: 0,
      a: 0
    }
    for (let j = 0 ; j < res[i].src.length; j += 4) {
      obj.r += res[i].src[j]
      obj.g += res[i].src[j+1]
      obj.b += res[i].src[j+2]
    }
    const formated = Object.keys(obj).map(e => {
      return Math.floor(obj[e] / (total/4))
    })
    colors.push(formated)
  }
  return colors
}
