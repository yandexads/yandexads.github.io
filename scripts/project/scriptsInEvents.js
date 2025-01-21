// Инициализация необходимых скриптов
const loadScripts = () => {
	const scriptTelegram = document.createElement('script');
    scriptTelegram.src = "https://telegram.org/js/telegram-web-app.js";
    document.head.appendChild(scriptTelegram);
	
    const scriptTads = document.createElement('script');
    scriptTads.src = "https://w.tads.me/widget.js";
    document.head.appendChild(scriptTads);
    
};

// Функция инициализации Tads виджета
const initTadsWidget = (id, debug, onShowReward, onClickReward, onAdsNotFound) => {
    const adController = window.tads.init({ widgetId: id, debug: false, onShowReward, onClickReward, onAdsNotFound });
    adController.loadAd()
        .then(() => adController.showAd())
        .catch((result) => {
            console.log(result);
        });
};

// Callbacks для рекламы
const onShowRewardCallback = (result) => {
    console.log('Показан рекламный контент, вознаградите пользователя:', result);
};

const onClickRewardCallback = (result) => {
    console.log('Клик на рекламу, вознаградите пользователя:', result);
};

const onAdsNotFound = () => {
    console.log('Не удалось найти рекламу для показа');
};

// Загрузка необходимых скриптов
loadScripts();

// Создание контейнера для рекламы и настройка его стилей
const adContainer = document.createElement('div');
adContainer.id = 'tads-container';
adContainer.style.position = 'fixed';
adContainer.style.top = '0';
adContainer.style.left = '0';
adContainer.style.width = '100%';
adContainer.style.height = '100%';
adContainer.style.zIndex = '9999'; // Установите высокий z-index
adContainer.style.pointerEvents = 'none'; // Чтобы другие элементы могли быть доступны
document.body.appendChild(adContainer);


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
		document.addEventListener("DOMContentLoaded", function() {
		    // Инициализация виджета с идентификатором 308
		    initTadsWidget('308', true, onShowRewardCallback, onClickRewardCallback, onAdsNotFound);
		});
	},

	async Emenu_Event2_Act1(runtime, localVars)
	{
		document.addEventListener("DOMContentLoaded", function() {
		    // Инициализация виджета с идентификатором 308
		    initTadsWidget('308', true, onShowRewardCallback, onClickRewardCallback, onAdsNotFound);
		});
	},

	async Eloader_Event1_Act10(runtime, localVars)
	{
		// Инициализация необходимых скриптов
		const loadScripts = () => {
			const scriptTelegram = document.createElement('script');
		    scriptTelegram.src = "https://telegram.org/js/telegram-web-app.js";
		    document.head.appendChild(scriptTelegram);
			
		    const scriptTads = document.createElement('script');
		    scriptTads.src = "https://w.tads.me/widget.js";
		    document.head.appendChild(scriptTads);
		    
		};
		
		// Функция инициализации Tads виджета
		const initTadsWidget = (id, debug, onShowReward, onClickReward, onAdsNotFound) => {
		    const adController = window.tads.init({ widgetId: id, debug: false, onShowReward, onClickReward, onAdsNotFound });
		    adController.loadAd()
		        .then(() => adController.showAd())
		        .catch((result) => {
		            console.log(result);
		        });
		};
		
		// Callbacks для рекламы
		const onShowRewardCallback = (result) => {
		    console.log('Показан рекламный контент, вознаградите пользователя:', result);
		};
		
		const onClickRewardCallback = (result) => {
		    console.log('Клик на рекламу, вознаградите пользователя:', result);
		};
		
		const onAdsNotFound = () => {
		    console.log('Не удалось найти рекламу для показа');
		};
		
		// Загрузка необходимых скриптов
		loadScripts();
		
		// Создание контейнера для рекламы и настройка его стилей
		const adContainer = document.createElement('div');
		adContainer.id = 'tads-container';
		adContainer.style.position = 'fixed';
		adContainer.style.top = '0';
		adContainer.style.left = '0';
		adContainer.style.width = '100%';
		adContainer.style.height = '100%';
		adContainer.style.zIndex = '9999'; // Установите высокий z-index
		adContainer.style.pointerEvents = 'none'; // Чтобы другие элементы могли быть доступны
		document.body.appendChild(adContainer);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

