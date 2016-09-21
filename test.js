var Keyboard = require('./index').Keyboard

var k1 = Keyboard()
var k2 = new Keyboard()
console.log(k1)
console.log(k2)
console.log(k2 === k1)

var keyboard = new Keyboard()
var event = {
    stopImmediatePropagation: function () { },
    preventDefault: function () { },
    stopPropagation: function () { }
}
function keydown(key) {
    event.key = key
    event.type = 'keydown'
    keyboard.keydown(event)
}
function keyup(key) {
    event.key = key
    event.type = 'keyup'
    keyboard.keyup(event)
}
keyboard.registe('uk', function () {
    console.log('test uk successfully.')
}, ["Shift", "b"], ["Shift", "e"])

keydown('Shift')
keydown('e')
keyup('e')
keyup('Shift')
// > hhhhh
keydown('Shift')
keydown('b')
keyup('b')
keyup('Shift')
// > hhhhh
keydown('Shift')
keydown('e')
keyup('e')
keyup('Shift')
// > hhhhh
// output: 
// hhhhh
// hhhhh
// hhhhh