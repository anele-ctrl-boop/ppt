let Mão = 0
input.onGesture(Gesture.Shake, function () {
    Mão = randint(1, 3)
    if (Mão == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        music.playMelody("C5 B A G G A B C5 ", 120)
    } else {
        if (Mão == 2) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                # # . # #
                # # . # #
                `)
        }
    }
})
