var Module = {
	preRun: [ ],
	postRun: [
		() => {
			const canvas = this.canvas
			const i = setInterval(function() {
				if (Module._webapi_ready()) {
					clearInterval(i)
					Module._webapi_dbg_connect() // This disables the blinking speaker icon!
					Module._webapi_load_snapshot(0);

					canvas.style.opacity = ''

					setInterval(function() {
						Module._webapi_save_snapshot(0);
					}, 5000)
				}
			}, 1)
		}
	],
	print: (function() {
		return function(text) {
			text = Array.prototype.slice.call(arguments).join(' ');
			console.log(text);
		};
	})(),
	printErr: function(text) {
		text = Array.prototype.slice.call(arguments).join(' ');
		console.error(text);
	},
	canvas: (function() {
		var canvas = document.getElementById('canvas');
		canvas.style.opacity = '0%'
		canvas.addEventListener("webglcontextlost", function(e) { alert('FIXME: WebGL context lost, please reload the page'); e.preventDefault(); }, false);
		return canvas;
	})(),
	setStatus: function(text) {
		console.log('status', text)
	},
	monitorRunDependencies: function(left) { },
}

window.onerror = function(event) {
	console.log("onerror: " + event)
}

$(function() {
	$('pre').on('dblclick', function(ev) {
		Module._webapi_input(this.innerText)
	})
})
