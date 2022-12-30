function getDistance () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P13, 0)
    echoTime = pins.pulseIn(DigitalPin.P14, PulseValue.High)
    calculatedDistance = echoTime / 148
    return calculatedDistance
}
function goBackward (motorSpeed: number, motorTime: number) {
    basic.showString("B")
    pins.analogWritePin(AnalogPin.P0, motorSpeed * 10.23)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P1, motorSpeed * 10.23)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(motorTime * 1000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.clearScreen()
}
function goForward (motorSpeed: number, motorTime: number) {
    basic.showString("F")
    pins.analogWritePin(AnalogPin.P0, motorSpeed * 10.23)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P1, motorSpeed * 10.23)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(motorTime * 1000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    goForward(100, 3)
    basic.showString("")
    goBackward(100, 3)
    basic.showString("")
    goRight(100, 1)
    basic.showString("")
    goLeft(100, 1)
})
function goRight (motorSpeed: number, motorTime: number) {
    basic.showString("R")
    pins.analogWritePin(AnalogPin.P0, motorSpeed * 10.23)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P1, motorSpeed * 10.23)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(motorTime * 1000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.clearScreen()
}
function goLeft (motorSpeed: number, motorTime: number) {
    basic.showString("L")
    pins.analogWritePin(AnalogPin.P0, motorSpeed * 10.23)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P1, motorSpeed * 10.23)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(motorTime * 1000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    basic.showNumber(getDistance())
})
let calculatedDistance = 0
let echoTime = 0
namespace Lilybot.movement{}
namespace Lilybot.movement{
}
basic.showString("ON")
basic.forever(function () {
	
})
