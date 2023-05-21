console.log("Script starting..");
// Press Ctrl + Shift + C
document.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': 67, 'ctrlKey': true, 'shiftKey': true}));
document.dispatchEvent(new KeyboardEvent('keyup', {'keyCode': 67, 'ctrlKey': true, 'shiftKey': true}));
console.log("Ctrl + Shift + C");
// Wait for the label to load
var labelInterval = setInterval(function() {
    var label = document.getElementByClassName('docs-material-gm-labeled-checkbox-circle');
    if (label) {
        console.log("Button found");
        clearInterval(labelInterval);

        // Click on the label
        label.click();
        console.log("Button clicked);
        
        // Press Esc
        document.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': 27}));
        document.dispatchEvent(new KeyboardEvent('keyup', {'keyCode': 27}));
        console.log("Esc");
    }
}, 100);
