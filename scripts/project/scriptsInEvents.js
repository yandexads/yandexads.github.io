const scriptsInEvents = {

	async Egame_Event217_Act2(runtime, localVars)
	{
		// Попробуем инициировать и показать баннер
		try {
		    // Инициализация Adsgram и показ баннера
		    await window.Adsgram.init({ blockId: "int-7184" }).show();
		} catch (error) {
		    // Обработка ошибок: ничего не делаем или выполняем другие действия
		    console.error("Ошибка при показе рекламы:", error);
		}
	},

	async Egame_Event239_Act8(runtime, localVars)
	{
		// Попробуем инициировать и показать баннер
		try {
		    // Инициализация Adsgram и показ баннера
		    await window.Adsgram.init({ blockId: "int-7184" }).show();
		} catch (error) {
		    // Обработка ошибок: ничего не делаем или выполняем другие действия
		    console.error("Ошибка при показе рекламы:", error);
		}
	},

	async Egame_Event279_Act2(runtime, localVars)
	{
		// Попробуем инициировать и показать баннер
		try {
		    // Инициализация Adsgram и показ баннера
		    await window.Adsgram.init({ blockId: "int-7184" }).show();
		} catch (error) {
		    // Обработка ошибок: ничего не делаем или выполняем другие действия
		    console.error("Ошибка при показе рекламы:", error);
		}
	},

	async Emenu_Event1_Act12(runtime, localVars)
	{
		const script = document.createElement('script');
		script.src = "https://telegram.org/js/telegram-web-app.js";
		document.head.appendChild(script);
	},

	async Emenu_Event1_Act13(runtime, localVars)
	{
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = "https://w.tads.me/widget.js";
			script.onload = () => {
				// После загрузки скрипта, ждем инициализации виджета
				const checkWidget = setInterval(() => {
					if (window.TadsWidget) {
						clearInterval(checkWidget);
						resolve();
					}
				}, 100);
			};
			script.onerror = reject;
			document.head.appendChild(script);
		});
	},

	async Emenu_Event2_Act1(runtime, localVars)
	{
		return new Promise((resolve, reject) => {
			const div = document.createElement('div');
			div.id = 'tads-container-308';
			document.body.appendChild(div);

			// Ждем, пока виджет полностью загрузится
			const checkWidget = setInterval(() => {
				const container = document.getElementById('tads-container-308');
				if (container && container.children.length > 0) {
					clearInterval(checkWidget);
					// Добавляем стили для видимости
					container.style.display = 'block';
					container.style.opacity = '1';
					resolve();
				}
			}, 100);

			// Таймаут на случай, если виджет не загрузится
			setTimeout(() => {
				clearInterval(checkWidget);
				reject(new Error('Tads.me widget loading timeout'));
			}, 10000);
		});
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

