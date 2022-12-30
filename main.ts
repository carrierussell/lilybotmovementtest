namespace Lilybot.movement {
    //%blockId=Lilybot_MovementB
    //%block="Backward at $index speed for"
    //%index.min=0 index.max=100
    //% "$secindex "
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
 //%blockId=Lilybot_MovementF
    //%block="Forward at $index speed for"
    //%index.min=0 index.max=100
    //% "$secindex "
    //%secindex.min=0 secindex.max=10 
export function goForward(motorSpeed2: number, motorTime2: number) {
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
//%blockId=Lilybot_MovementR
    //%block="Right at $index speed for"
    //%index.min=0 index.max=100
    //% "$secindex "
    //%secindex.min=0 secindex.max=10 
export function goRight(motorSpeed3: number, motorTime3: number) {
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
    //%blockId=Lilybot_MovementL
    //%block="Left at $index speed for"
    //%index.min=0 index.max=100
    //% "$secindex "
    //%secindex.min=0 secindex.max=10 
    export function goLeft(motorSpeed3: number, motorTime3: number) {
        pins.analogWritePin(AnalogPin.P0, motorSpeed3)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P1, motorSpeed3)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(motorTime3)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
    }
}

