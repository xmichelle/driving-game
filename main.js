
const $canvas = document.querySelector('canvas')
const $c = $canvas.getContext('2d')

$canvas.width = window.innerWidth
$canvas.height = window.innerHeight

function drawCar() {
  $c.fillRect(30, 30, 50, 30)

  $c.beginPath()
  $c.arc(40, 60, 7, 0, Math.PI, false)
  $c.closePath()
  $c.fillStyle = '#8B4513'
  $c.fill()

  $c.beginPath()
  $c.arc(70, 60, 7, 0, Math.PI, false)
  $c.closePath()
  $c.fillStyle = '#8B4513'
  $c.fill()

  $c.beginPath()
  $c.arc(40, 30, 7, 0, Math.PI, true)
  $c.closePath()
  $c.fillStyle = '#8B4513'
  $c.fill()

  $c.beginPath()
  $c.arc(70, 30, 7, 0, Math.PI, true)
  $c.closePath()
  $c.fillStyle = '#8B4513'
  $c.fill()
}

drawCar()

window.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 38:  // up arrow
      // do something
      break
    case 40:  // down arrow
      // do something
      break
    case 37:  // left arrow
      // do something
      break
    case 39:  // right arrow
      // do something
  }
})
