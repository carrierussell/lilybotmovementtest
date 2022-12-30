def goBackward(motorSpeed: number, motorTime: number):
    pins.analog_write_pin(AnalogPin.P0, motorSpeed)
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.digital_write_pin(DigitalPin.P13, 1)
    pins.analog_write_pin(AnalogPin.P1, motorSpeed)
    pins.digital_write_pin(DigitalPin.P15, 0)
    pins.digital_write_pin(DigitalPin.P16, 1)
    basic.pause(motorTime)
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.digital_write_pin(DigitalPin.P9, 0)
    pins.analog_write_pin(AnalogPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P15, 0)
    pins.digital_write_pin(DigitalPin.P16, 0)
    pins.analog_write_pin(AnalogPin.P1, 0)
def goForward(motorSpeed2: number, motorTime2: number):
    pins.analog_write_pin(AnalogPin.P0, motorSpeed2)
    pins.digital_write_pin(DigitalPin.P8, 1)
    pins.digital_write_pin(DigitalPin.P13, 0)
    pins.analog_write_pin(AnalogPin.P1, motorSpeed2)
    pins.digital_write_pin(DigitalPin.P15, 1)
    pins.digital_write_pin(DigitalPin.P16, 0)
    basic.pause(motorTime2)
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.digital_write_pin(DigitalPin.P9, 0)
    pins.analog_write_pin(AnalogPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P15, 0)
    pins.digital_write_pin(DigitalPin.P16, 0)
    pins.analog_write_pin(AnalogPin.P1, 0)

def on_button_pressed_a():
    goForward(1, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def goRight(motorSpeed3: number, motorTime3: number):
    pins.analog_write_pin(AnalogPin.P0, motorSpeed3)
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.digital_write_pin(DigitalPin.P13, 1)
    pins.analog_write_pin(AnalogPin.P1, motorSpeed3)
    pins.digital_write_pin(DigitalPin.P15, 1)
    pins.digital_write_pin(DigitalPin.P16, 0)
    basic.pause(motorTime3)
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.digital_write_pin(DigitalPin.P9, 0)
    pins.analog_write_pin(AnalogPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P15, 0)
    pins.digital_write_pin(DigitalPin.P16, 0)
    pins.analog_write_pin(AnalogPin.P1, 0)

def on_forever():
    basic.show_leds("""
        . . # . .
                . . . . .
                # . . . #
                . # . # .
                . . # . .
    """)
basic.forever(on_forever)
