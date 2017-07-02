
const $carImage = document.createElement('img')
$carImage.setAttribute('src', 'images/car.png')
$carImage.classList.add('car')

document.body.appendChild($carImage)

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
    }, 1000)
  }
}

const car = new Car('south', 5, [5, 5])

Car.start(car)
