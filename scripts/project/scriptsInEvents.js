const scriptsInEvents = {

	async Emenu_Event1_Act12(runtime, localVars)
	{
		const script = document.createElement('script');
		script.src = "https://telegram.org/js/telegram-web-app.js";
		document.head.appendChild(script);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

let isAdFullyLoaded = false;
let isAdContainerReady = false;

window.addEventListener('load', () => {
	checkContainerReady();
});

