input.onButtonPressed(Button.A, function () {
    parar = 0
})
input.onGesture(Gesture.Shake, function () {
    parar += 1
})
let parar = 0
parar = 0
basic.forever(function () {
    if (input.lightLevel() > 125 && parar == 0) {
        music.playMelody("C D E F G A B C5 ", 120)
    }
})
