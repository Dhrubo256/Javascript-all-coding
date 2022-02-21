var Square = function (width, height) {
    this.width = width
    this.height = height

    this.draw = function () {
        console.log("Hello I'm a square")
        this.myProperties()
    }

    this.myProperties = function () {
        console.log('My width is ' + this.width)
        console.log('My height is ' + this.height)
    }
}
var creatSquare = new Square(100, 100)
creatSquare.draw()