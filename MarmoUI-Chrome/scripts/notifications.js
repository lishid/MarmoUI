// Notifications which have not been closed yet
var activeNotifications = {};

chrome.runtime.onMessage.addListener(function(request, sender) {

	if (request.type == "notification") {
		// Check if we have permission
		chrome.notifications.getPermissionLevel(function(level) {
			if(level == "denied") {
				console.warn("Notification suppressed; Permission denied.")
				return;
			}

			chrome.windows.get(sender.tab.windowId, function(win) {
				// Don't show notification if user is still on marmoset
				if (win.focused && sender.tab.active) return;

				chrome.notifications.create('', request.notification,
					function(notificationId) {
						// Add URL to activeNotifications so we can access it
						// on button click
						request.sender = sender;
						activeNotifications[notificationId] = request;
				});
			});
		});
	}
});

// Button handler for "View Results"
function openResults(notificationId, buttonIndex) {

	// Open a new tab with the results
	chrome.tabs.create(activeNotifications[notificationId].options, function(tab) {

		// Focus new tab's window
		chrome.windows.update(tab.windowId, {focused: true}, function (){ });
	});

	// Close notification
	chrome.notifications.clear(notificationId, function() {});
}

function notificationDeactivated(notificationId) {
	delete activeNotifications[notificationId];
}

function focusMarmoUI(notificationId) {
	var windowId = activeNotifications[notificationId].sender.tab.windowId;
	var tabId = activeNotifications[notificationId].sender.tab.id;
	var pageUrl = activeNotifications[notificationId].sender.url;

	//check if window still exists
	chrome.windows.get(windowId, function() {
		if(!chrome.runtime.lastError) {
			// focus
			chrome.windows.update(windowId, {focused: true}, function (){});
		}
	});

	// check if tab still exists
	chrome.tabs.get(tabId, function() {
		if(!chrome.runtime.lastError) {
			// set active
			chrome.tabs.update(tabId, {active: true}, function () {});
		} else {
			// otherwise open results at previous url
			chrome.tabs.create({url: pageUrl}, function(tab) {
				// Focus new tab's window
				chrome.windows.update(tab.windowId, {focused: true}, function (){ });
			});
		}
	});

	// Close notification
	chrome.notifications.clear(notificationId, function() {});
}

// Registering listeners
chrome.notifications.onButtonClicked.addListener(openResults)
chrome.notifications.onClosed.addListener(notificationDeactivated);
chrome.notifications.onClicked.addListener(focusMarmoUI);