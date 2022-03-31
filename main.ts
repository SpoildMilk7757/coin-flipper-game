input.onButtonPressed(Button.A, function () {
    basic.showNumber(p1)
    basic.showString("-")
    basic.showNumber(p2)
})
input.onGesture(Gesture.Shake, function () {
    coin1 = randint(0, 1)
    coin2 = randint(0, 1)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    }
    if (coin1 == 0 && coin2 == 0) {
        music.playMelody("F B B - - - - - ", 200)
        basic.showString("2 H, P1 wins")
        p1 += 1
    } else if (coin1 == 1 && coin2 == 1) {
        music.playMelody("F B B - - - - - ", 200)
        basic.showString("2 T, P1 wins")
        p1 += 1
    } else {
        music.playMelody("B F F - - - - - ", 200)
        basic.showString("1 H 1 T, P2 wins")
        p2 += 1
    }
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
})
let coin2 = 0
let coin1 = 0
let p1 = 0
let p2 = 0
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
p2 = 0
p1 = 0
