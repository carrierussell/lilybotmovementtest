 //% color=#00008b 
namespace Lilybot.movement {
    //%blockId=Lilybot_MovementB
    //%block="Backward at $motorSpeedB speed for $motorTimeB sec"
    //%motorSpeedB.min=0 motorSpeedB.max=100
    //%motorTimeB.min=0 motorTimeB.max=10 
    //% color=#00008b"
export function goBackward(motorSpeedB: number, motorTimeB: number) {
    pins.analogWritePin(AnalogPin.P0, motorSpeedB*10.23)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P1, motorSpeedB*10.23)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(motorTimeB*1000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}
 //%blockId=Lilybot_MovementF
    //%block="Forward at $motorSpeedF speed for $motorTimeF sec"
    //%motorSpeedF.min=0 motorSpeedF.max=100
    //%motorTimeF.min=0 motorTimeF.max=10 
     //% color=#00008b"
export function goForward(motorSpeedF: number, motorTimeF: number) {
    pins.analogWritePin(AnalogPin.P0, motorSpeedF*10.23)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P1, motorSpeedF*10.23)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(motorTimeF*1000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}
//%blockId=Lilybot_MovementR
    //%block="Right at $motorSpeedR speed for $motorTimeR sec"
    //%motorSpeedR.min=0 motorSpeedR.max=100
    //%motorTimeR.min=0 motorTimeR.max=10 
     //% color=#00008b"
export function goRight(motorSpeedR: number, motorTimeR: number) {
    pins.analogWritePin(AnalogPin.P0, motorSpeedR*10.23)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P1, motorSpeedR*10.23)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(motorTimeR*1000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}
    //%blockId=Lilybot_MovementL
    //%block="Left at $motorSpeedL speed for $motorTimeL sec"
    //%motorSpeedL.min=0 motorSpeedL.max=100
    //%motorTimeL.min=0 motorTimeL.max=10 
     //% color=#00008b"
    export function goLeft(motorSpeedL: number, motorTimeL: number) {
        pins.analogWritePin(AnalogPin.P0, motorSpeedL*10.23)
        pins.digitalWritePin(DigitalPin.P8, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P1, motorSpeedL*10.23)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(motorTimeL*1000)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
    }
    //%blockId=Lilybot_MovementD
    //%block="ultrasonic distance"
     //% color=#00008b"
    export function getDistance(){
        pins.digitalWritePin(DigitalPin.P19,1)
        basic.pause(10)
        pins.digitalWritePin(DigitalPin.P19,0)

        let echoTime = 0
        let calculatedDistance = 0
        echoTime = pins.pulseIn(DigitalPin.P20, PulseValue.High)
        calculatedDistance = echoTime/148
        return calculatedDistance
    }

}

