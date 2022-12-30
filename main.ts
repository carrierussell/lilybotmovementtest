namespace Lilybot.movement {
    //%blockId=Lilybot_MovementB
    //%block="Backward at $motorSpeedB speed for $motorTimeB"
    //%motorSpeedB.min=0 motorSpeedB.max=100
    //%motorTimeB.min=0 motorTimeB.max=10 
export function goBackward(motorSpeedB: number, motorTimeB: number) {
    pins.analogWritePin(AnalogPin.P0, motorSpeedB)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P1, motorSpeedB)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(motorTimeB)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}
 //%blockId=Lilybot_MovementF
    //%block="Forward at $motorSpeedF speed for $motorTimeF"
    //%motorSpeedF.min=0 motorSpeedF.max=100
    //%motorTimeF.min=0 motorTimeF.max=10 
export function goForward(motorSpeedF: number, motorTimeF: number) {
    pins.analogWritePin(AnalogPin.P0, motorSpeedF)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P1, motorSpeedF)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(motorTimeF)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}
//%blockId=Lilybot_MovementR
    //%block="Right at $motorSpeedR speed for $motorTimeR sec"
    //%motorSpeedR.min=0 motorTimeR.max=100
    //%motorSpeedR.min=0 motorTimeR.max=10 
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

