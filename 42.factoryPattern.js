// this pattern is used to not duplicate any kind of object oriented

var creatCircle = function (width, height, radius) {
    return {
        width: width,
        height: height,
        radius: radius,
        draw: function () {
            console.log("I'm a circle")
            this.circleProperties()
        },
        circleProperties: function () {
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.height)
            console.log('My radius is ' + this.radius)
        }
    }
}

var circle1 = creatCircle(100, 300, 40)
circle1.draw()

var circle2 = creatCircle(200, 400, 70)
circle2.draw()