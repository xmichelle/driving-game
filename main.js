
const $carImage = document.createElement('img')
$carImage.setAttribute('src', 'images/car.png')
$carImage.classList.add('car')

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
    }
  }

  static start(car) {
    setInterval(function () {
      car.move()
    }, 30)
  }
}

const car1 = new Car('east', 5, [0, 0])

function moveCar(car) {
  $carImage.style.left = car.location[0] + 'px'
  $carImage.style.top = car.location[1] + 'px'
}

window.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 38:
      Car.start(car1)
      setInterval(function () {
        moveCar(car1)
      }, 0)
      break
  }
})

document.body.appendChild($carImage)
