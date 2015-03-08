// Initialize default options
chrome.runtime.onInstalled.addListener(function() {
	var defaults = {
		showNotifications: {
			type: "checkbox",
			label: "Display desktop notifications when testing completed",
			value: true
		}
	};

	localStorage["opts"] = JSON.stringify(defaults);
});