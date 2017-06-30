
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
