
const $canvas = document.querySelector('canvas')
const $c = $canvas.getContext('2d')

$canvas.width = window.innerWidth
$canvas.height = window.innerHeight

let x = 50
let y = 100

function drawCar() {
  requestAnimationFrame(drawCar)
  $c.clearRect(0, 0, $canvas.width, $canvas.height)

  $c.fillRect(x, y, 50, 30)

  $c.beginPath()
  $c.arc(x + 10, y + 30, 7, 0, Math.PI, false)
  $c.closePath()
  $c.fill()

  $c.beginPath()
  $c.arc(x + 40, y + 30, 7, 0, Math.PI, false)
  $c.closePath()
  $c.fill()

  $c.beginPath()
  $c.arc(x + 10, y, 7, 0, Math.PI, true)
  $c.closePath()
  $c.fill()

  $c.beginPath()
  $c.arc(x + 40, y, 7, 0, Math.PI, true)
  $c.closePath()
  $c.fill()

  x += 1
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

class Car {
  constructor(direction, speed, location) {
    this.direction = direction
    this.speed = speed
    this.location = location
  }

  turn(direction) {
    this.direction = direction
  }

  accelerate(amount) {
    this.speed += amount
  }

  move() {
    switch (this.direction) {
      case 'north':
        this.location[1] -= this.speed
        break
      case 'south':
        this.location[1] += this.speed
        break
      case 'east':
        this.location[0] += this.speed
        break
      case 'west':
        this.location[0] -= this.speed
        break
    }
  }

  static start(car) {
    setInterval(function () {
      car.move()
    }, 10000)
  }
}

const car1 = new Car('north', 10, [30, 30])

Car.start(car1)
