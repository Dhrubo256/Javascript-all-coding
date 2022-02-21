var circle = {
    width: 300,
    height: 300,
    radius: 50,
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

circle.draw()