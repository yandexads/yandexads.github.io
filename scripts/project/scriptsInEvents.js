


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

	async Emenu_Event1_Act13(runtime, localVars)
	{
		const script = document.createElement('script');
		   script.src = "https://telegram.org/js/telegram-web-app.js";
		   document.head.appendChild(script);
	},

	async Emenu_Event1_Act14(runtime, localVars)
	{
		const script = document.createElement('script');
		   script.src = "https://w.tads.me/widget.js";
		   document.head.appendChild(script);
	},

	async Emenu_Event1_Act15(runtime, localVars)
	{
		const initTadsWidget = (id, debug, onShowReward, onClickReward, onAdsNotFound) => {
		       const adController = window.tads.init({ widgetId: id, debug: false, onShowReward, onClickReward, onAdsNotFound });
		       adController.loadAd()
		           .then(() => adController.showAd())
		           .catch((result) => {
		               console.log(result);
		           });
		   };
		
		   // Callbacks
		   const onShowRewardCallback = (result) => {
		       console.log('Показан рекламный контент, вознаградите пользователя:', result);
		   };
		
		   const onClickRewardCallback = (result) => {
		       console.log('Клик на рекламу, вознаградите пользователя:', result);
		   };
		
		   const onAdsNotFound = () => {
		       console.log('Не удалось найти рекламу для показа');
		   };
		
		   // Функция для показа рекламы
		   function showAd() {
		       initTadsWidget('308', true, onShowRewardCallback, onClickRewardCallback, onAdsNotFound);
		   }
		
		   // Показ рекламы
		   showAd();
	},

	async Emenu_Event2_Act1(runtime, localVars)
	{
		// Создание элемент div с id "tads-container-308"
		var tadsContainer = document.createElement('div');
		tadsContainer.id = "tads-container-308";
		
		// Применение стилей, если нужно
		tadsContainer.style.width = "100%";
		tadsContainer.style.height = "200px"; // Установите нужные размеры
		tadsContainer.style.backgroundColor = "#f0f0f0"; // Применение фона
		
		// Добавление элемента в документ
		document.body.appendChild(tadsContainer);
	},

	async Emenu_Event2_Act3(runtime, localVars)
	{
		const div = document.createElement('div');
		   div.id = 'tads-container-308'; // Замените на ваш идентификатор
		   document.body.appendChild(div);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

