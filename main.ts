/**
 * Si se toca el timbre que suene la puerta
 */
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.lightLevel()))
    basic.pause(2000)
})
/**
 * Si la temperatura es mayor a 15°C, encender el aire acondicionado (turbina de computadora)
 */
/**
 * Si el nivel de luz es inferior a 127 enciende luz de del frente
 */
basic.forever(function () {
    if (input.temperature() >= 25) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    if (input.lightLevel() <= 100) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
