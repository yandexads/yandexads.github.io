


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
		// Событие: Настройка
		function onStart() {
		    const script1 = document.createElement('script');
		    script1.src = 'https://telegram.org/js/telegram-web-app.js';
		    script1.onload = onScriptLoad; 
		    document.head.appendChild(script1);
		    
		    const script2 = document.createElement('script');
		    script2.src = 'https://w.tads.me/widget.js';
		    document.head.appendChild(script2);
		}
		
		function onScriptLoad() {
		    initTadsWidget(308, true, onShowReward, onClickReward, onAdsNotFound);
		}
		
		function showAd() {
		    // Проверяем, есть ли определенная функция для показа рекламы
		    if (typeof window.showRewardAd === 'function') {
		        window.showRewardAd(); // Функция, запускающая показ рекламы
		    } else {
		        console.log("Функция показа рекламы не определена.");
		    }
		}
		
		// Обработчики колбеков
		function onShowReward(result) {
		    console.log('Show ads, reward user:', result);
		}
		
		function onClickReward(result) {
		    console.log('Click on ad, reward user:', result);
		}
		
		function onAdsNotFound() {
		    console.log('Callback which calls if no ads found to show');
		}
		
		// Событие: На клик по спрайту AdTrigger
		function onAdTriggerClicked() {
		    showAd();
		}
	},

	async Emenu_Event2_Act1(runtime, localVars)
	{
		function showAd() {
		    const adController = window.tads.init({
		        widgetId: widgetId,
		        debug: false,
		        onShowReward: onShowReward,
		        onClickReward: onClickReward,
		        onAdsNotFound: onAdsNotFound
		    });
		    
		    adController.loadAd()
		        .then(() => adController.showAd())
		        .catch((result) => {
		            console.log("Ошибка при показе рекламы: ", result);
		        });
		}
		
		// Вызываем функцию showAd при инициализации или в нужный момент игры
		showAd();
	},

	async Emenu_Event3_Act2(runtime, localVars)
	{
		function onScriptLoad() {
		    initTadsWidget(308, true, onShowReward, onClickReward, onAdsNotFound);
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

