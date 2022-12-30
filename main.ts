namespace Lilybot.movement{
    //%blockId=lilybot
    //%block="Backward at $index speed for $secindex seconds"
    //%index.min=0 index.max=100
    //%secindex.min=0 secindex.max=10
export function goBackward(motorSpeed: number, motorTime: number) {
    pins.analogWritePin(AnalogPin.P0, motorSpeed)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P1, motorSpeed)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(motorTime)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}

function goForward(motorSpeed2: number, motorTime2: number) {
    pins.analogWritePin(AnalogPin.P0, motorSpeed2)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P1, motorSpeed2)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(motorTime2)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    goForward(1, 1)
})
function goRight(motorSpeed3: number, motorTime3: number) {
    pins.analogWritePin(AnalogPin.P0, motorSpeed3)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P1, motorSpeed3)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(motorTime3)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}
}

