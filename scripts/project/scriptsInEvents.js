


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

	async Emenu_Event2_Act1(runtime, localVars)
	{
		const initTadsWidget = (id, debug, onShowReward, onClickReward, onAdsNotFound) => {
		       const adController = window.tads.init({ widgetId: id, debug: debug, onShowReward, onClickReward, onAdsNotFound });
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
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

