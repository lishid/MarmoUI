// Notifications which have not been closed yet
var activeNotifications = {};

chrome.runtime.onMessage.addListener(function(request, sender) {

	if (request.type == "notification") {
		chrome.notifications.create('', request.notification,
			function(notificationId) {
				// Add URL to activeNotifications so we can access it
				// on button click
				activeNotifications[notificationId] = {
					url: request.options.url
				}
			});
	}
});

// Button handler for "View Results"
function openResults(notificationId, buttonIndex) {
	// Open a new tab with the results
	chrome.tabs.create(activeNotifications[notificationId], function(tab) {

		// Focus new tab's window
		chrome.windows.update(tab.windowId, {focused: true}, function (){ });
	});

	// Close notification
	chrome.notifications.clear(notificationId, function() {});
}

function notificationDeactivated(notificationId) {
	delete activeNotifications[notificationId];
}

// Registering listeners
chrome.notifications.onButtonClicked.addListener(openResults)
chrome.notifications.onClosed.addListener(notificationDeactivated);