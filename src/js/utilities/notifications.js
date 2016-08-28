var orderNotification = function (total) {
    // Logic to notify and confirm order
    if (total !== 0) {
        if (window.confirm('Ready to order your drinks at £' + total + ' ?')) {
            // Confirm order
            return true;
        } else {
            return false;
        }
    } else {
        // Let's check if the browser supports notifications
        if (!("Notification" in window)) {
            alert("You have nothing in your order");
        }

        // Let's check whether notification permissions have already been granted
        else if (Notification.permission === "granted") {
            // If it's okay let's create a notification
            var notification = new Notification("You have nothing in your order");
        }

        // Otherwise, we need to ask the user for permission
        else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {
                // If the user accepts, let's create a notification
                if (permission === "granted") {
                    var notification =  new Notification("You have nothing in your order");
                }
            });
        }
        // Default return
        return false
    };
}

// export module
module.exports = orderNotification;