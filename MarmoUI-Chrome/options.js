// Load Options
var opts = JSON.parse(localStorage["opts"]);

// Saves options to chrome.storage.sync.
function save_options() {

	for(var id in opts) {
		var el = document.getElementById(id);
		if(opts[id].type == 'checkbox') {
			opts[id].value = el.checked;
		}
	}
	
	localStorage["opts"] = JSON.stringify(opts);

	// Update status to let user know options were saved.
	var status = document.getElementById('status');
	status.textContent = 'Options saved.';
	setTimeout(function() {
		status.textContent = '';
	}, 1200);
}

// Restores options stored in localStorage
function restore_options() {

	var optsEl = document.getElementById('options');
	for(var id in opts) {
		var opt = opts[id];
		if(opt.type == 'checkbox') {
			// Create checkbox
			var checkbox = document.createElement('input');
			checkbox.setAttribute('type', 'checkbox');
			checkbox.id = id;
			checkbox.checked = opt.value;
			optsEl.appendChild(checkbox);
			// Create Label
			var label = document.createElement('label');
			label.setAttribute('for', id);
			label.textContent = opt.label + "\n";
			optsEl.appendChild(label);
		}
	}
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
		save_options);