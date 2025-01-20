


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
		const script = document.createElement('script');
		   script.src = "https://w.tads.me/widget.js";
		   document.head.appendChild(script);
		  
	},

	async Emenu_Event2_Act1(runtime, localVars)
	{
		const WIDGET_ID = "308"; // замените на ваш ID виджета
		
		// Используйте 'true' для разработки и 'false' для продакшн
		const IS_DEBUG = false;
		
		// HTML-элемент, который будет вызывать отображение рекламы по клику
		const btnSelector = "your_clickable_selector"; // замените на селектор вашей кнопки
		
		// Callback для формата REWARDED.
		const onShowRewardCallback = (result) => {
		    console.log('Show ads, reward user:', result);
		};
		
		// Callback на случай, если рекламы нет.
		const onAdsNotFound = () => {
		    console.log('Callback which calls if no ads found to show');
		};
		
		const adController = window.tads.init({
		    widgetId: WIDGET_ID,
		    debug: IS_DEBUG,
		    onShowReward: onShowRewardCallback,
		    onAdsNotFound: onAdsNotFound,
		});
		
		// Обработчик нажатия на кнопку
		document.getElementById(btnSelector).addEventListener('click', () => {
		    adController
		        .loadAd()
		        .then(() => adController.showAd())
		        .catch((result) => {
		            console.log(result);
		        });
		});
	},

	async Emenu_Event2_Act3(runtime, localVars)
	{
		const div = document.createElement('div');
		   div.id = 'tads-container-308'; // Замените на ваш идентификатор
		   document.body.appendChild(div);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

