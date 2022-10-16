bluetooth.startUartService()

basic.showIcon(IconNames.Square)

bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})

bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})

basic.forever(function() {
    let out = [
        input.runningTime(),
        input.lightLevel()
    ]

    bluetooth.uartWriteString(out.join(',') + '\n')
    basic.pause(500)
})