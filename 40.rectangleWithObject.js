var rect = {
    width: 200,
    height: 100,
    draw: function () {
        console.log('My name is rectangle')
        console.log('My width is ' + rect.width)
        console.log('My height is ' + rect.height)
    }
}

rect.draw()//call the draw function