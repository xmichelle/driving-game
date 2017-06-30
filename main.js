
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
