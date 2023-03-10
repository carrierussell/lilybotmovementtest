//%color=#00008b icon="\uf48b"
namespace Lilybot.movement {
    //%blockId=Lilybot_MovementB
    //%block="Backward at $motorSpeedB speed for $motorTimeB sec"
    //%motorSpeedB.min=0 motorSpeedB.max=100
    //%motorTimeB.min=0 motorTimeB.max=10 
    //% color=#00008b
export function goBackward(motorSpeedB: number, motorTimeB: number) {
    pins.analogWritePin(AnalogPin.P0, motorSpeedB*10.23)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P1, motorSpeedB*10.23)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(motorTimeB*1000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}
 //%blockId=Lilybot_MovementF
    //%block="Forward at $motorSpeedF speed for $motorTimeF sec"
    //%motorSpeedF.min=0 motorSpeedF.max=100
    //%motorTimeF.min=0 motorTimeF.max=10 
     //% color=#00008b
export function goForward(motorSpeedF: number, motorTimeF: number) {
    pins.analogWritePin(AnalogPin.P0, motorSpeedF*10.23)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P1, motorSpeedF*10.23)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(motorTimeF*1000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}
//%blockId=Lilybot_MovementR
    //%block="Right at $motorSpeedR speed for $motorTimeR sec"
    //%motorSpeedR.min=0 motorSpeedR.max=100
    //%motorTimeR.min=0 motorTimeR.max=10 
     //% color=#00008b
export function goRight(motorSpeedR: number, motorTimeR: number) {
    pins.analogWritePin(AnalogPin.P0, motorSpeedR*10.23)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P1, motorSpeedR*10.23)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(motorTimeR*1000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
}
    //%blockId=Lilybot_MovementL
    //%block="Left at $motorSpeedL speed for $motorTimeL sec"
    //%motorSpeedL.min=0 motorSpeedL.max=100
    //%motorTimeL.min=0 motorTimeL.max=10 
     //% color=#00008b
    export function goLeft(motorSpeedL: number, motorTimeL: number) {
        pins.analogWritePin(AnalogPin.P0, motorSpeedL*10.23)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P1, motorSpeedL*10.23)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        basic.pause(motorTimeL*1000)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
    }
    //%blockId=Lilybot_MovementS
    //%block="Stop Robot"
    //% color=#00008b
    export function stop() {
        pins.analogWritePin(AnalogPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
    }

    //%blockId=Lilybot_MovementD
    //%block="show ultrasonic distance"
    //% color=#00008b
    export function getDistance() {
        
        pins.setPull(DigitalPin.P2, PinPullMode.PullNone)
        pins.digitalWritePin(DigitalPin.P2, 0)
        control.waitMicros(2)
        pins.digitalWritePin(DigitalPin.P2, 1)
        control.waitMicros(10)
        pins.digitalWritePin(DigitalPin.P2, 0)

         let distance=(Math.round(pins.pulseIn(DigitalPin.P3, PulseValue.High)/ 58))
        //basic.showNumber(distance)
            
        return distance
    }
    
 }

