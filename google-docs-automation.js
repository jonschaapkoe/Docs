// Press Ctrl + Shift + C
document.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': 67, 'ctrlKey': true, 'shiftKey': true}));
document.dispatchEvent(new KeyboardEvent('keyup', {'keyCode': 67, 'ctrlKey': true, 'shiftKey': true}));

// Wait for the label to load
var labelInterval = setInterval(function() {
    var label = document.getElementById('goog_1409111978.label');
    if (label) {
        console.log("hello");
        clearInterval(labelInterval);

        // Click on the label
        label.click();

        // Press Esc
        document.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': 27}));
        document.dispatchEvent(new KeyboardEvent('keyup', {'keyCode': 27}));
    }
}, 100);
