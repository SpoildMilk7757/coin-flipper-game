input.onGesture(Gesture.Shake, function () {
    coin1 = randint(0, 1)
    coin2 = randint(0, 1)
    if (coin1 == 0 && coin2 == 0) {
        basic.showString("2 heads, P1 wins")
    }
    if (coin1 == 1 && coin2 == 1) {
        basic.showString("2 tails, P1 wins")
    }
    if (coin1 == 1 && coin2 == 0 || coin1 == 0 && coin2 == 1) {
        basic.showString("1 heads 1 tails, P2 wins")
    }
})
let coin2 = 0
let coin1 = 0
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `)
