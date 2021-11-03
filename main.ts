input.onButtonPressed(Button.A, function () {
    basic.showString("lets walk!")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . # . .
        `)
    basic.showString("tip doe een elastiekje om je been en doe de microbit tegen je been aan")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        `)
    basic.showString("error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
})
input.onGesture(Gesture.ThreeG, function () {
    stap += 1
    basic.showString("amogus")
    basic.showLeds(`
        . . # # #
        . # # . .
        . # # # #
        . # # # #
        . . # . #
        `)
})
let stap = 0
basic.showLeds(`
    # . . . #
    # # # # #
    # . # . #
    # # # # #
    # # # # #
    `)
basic.showString("welcome to cat bit!")
