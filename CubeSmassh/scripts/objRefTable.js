const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Behaviors.Bullet,
		C3.Behaviors.MoveTo,
		C3.Behaviors.Pin,
		C3.Behaviors.solid,
		C3.Plugins.Touch,
		C3.Plugins.LocalStorage,
		C3.Plugins.Particles,
		C3.Plugins.Audio,
		C3.Behaviors.Sin,
		C3.Plugins.Button,
		C3.Plugins.Browser,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Audio.Acts.SetSilent,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.Button.Acts.SetCSSStyle,
		C3.Behaviors.MoveTo.Acts.SetMaxSpeed,
		C3.Behaviors.Pin.Acts.PinByImagePoint,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Button.Acts.SetPos,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.MoveToBottom,
		C3.Plugins.Text.Acts.SetInstanceVar,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Plugins.Text.Acts.SetPosToObject,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Plugins.Sprite.Acts.ZMoveToObject,
		C3.Plugins.Audio.Acts.Play,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Behaviors.Bullet.Acts.SetAcceleration,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Behaviors.MoveTo.Acts.MoveToPosition,
		C3.Plugins.Touch.Exps.X,
		C3.Behaviors.MoveTo.Acts.Stop,
		C3.Plugins.Sprite.Exps.AnimationFrameCount,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.SetAnimSpeed
	];
};
self.C3_JsPropNameTable = [
	{txLose: 0},
	{bRes: 0},
	{bMenu: 0},
	{txResult: 0},
	{bgCorona: 0},
	{REWARD: 0},
	{REW: 0},
	{HP: 0},
	{id: 0},
	{block: 0},
	{Bullet: 0},
	{bullet: 0},
	{moveSpeed: 0},
	{shotSpeed: 0},
	{MoveTo: 0},
	{bodyPlayer: 0},
	{txBlock: 0},
	{txMoney: 0},
	{destroyBlock: 0},
	{txCount: 0},
	{bonus: 0},
	{Pin: 0},
	{turetPlayer: 0},
	{txNameGame: 0},
	{destroyBullet: 0},
	{bgShop: 0},
	{priceSkin: 0},
	{Solid: 0},
	{turretMaket: 0},
	{bulletMaket: 0},
	{txPriceGun: 0},
	{txPriceBullet: 0},
	{bodyMaket: 0},
	{txPriceBody: 0},
	{bShopToMenu: 0},
	{bgUpgrade: 0},
	{bgUpgradeView: 0},
	{txUpgradeDamage: 0},
	{txUpgradeSpeedMove: 0},
	{txUpgradeSpeedShot: 0},
	{priceSmove: 0},
	{bUpgradeSpeedMove: 0},
	{priceSshot: 0},
	{bUpgradeSpeedShot: 0},
	{priceDmg: 0},
	{bUpgradeDamage: 0},
	{txPriceSpeedMove: 0},
	{txPriceSpeedShot: 0},
	{txPriceDamage: 0},
	{bUpToMenu: 0},
	{txTapToStart: 0},
	{bShop: 0},
	{bUpgrade: 0},
	{txBestResult: 0},
	{bSound: 0},
	{Touch: 0},
	{Wall: 0},
	{LocalStorage: 0},
	{particleDestroy: 0},
	{sound: 0},
	{Синусоида: 0},
	{press: 0},
	{бан: 0},
	{вид: 0},
	{Браузер: 0},
	{lang: 0},
	{StartGame: 0},
	{dmgPlayer: 0},
	{BlockId: 0},
	{speedBlock: 0},
	{money: 0},
	{maxCount: 0},
	{count: 0},
	{idWave: 0},
	{skinBullet: 0},
	{idBonus: 0},
	{Sound: 0},
	{offsetBlockDistance: 0}
];

self.InstanceType = {
	txLose: class extends self.ITextInstance {},
	bRes: class extends self.ISpriteInstance {},
	bMenu: class extends self.ISpriteInstance {},
	txResult: class extends self.ITextInstance {},
	bgCorona: class extends self.ISpriteInstance {},
	REWARD: class extends self.ITextInstance {},
	REW: class extends self.ITextInstance {},
	block: class extends self.ISpriteInstance {},
	bullet: class extends self.ISpriteInstance {},
	bodyPlayer: class extends self.ISpriteInstance {},
	txBlock: class extends self.ITextInstance {},
	txMoney: class extends self.ITextInstance {},
	destroyBlock: class extends self.ISpriteInstance {},
	txCount: class extends self.ITextInstance {},
	bonus: class extends self.ISpriteInstance {},
	turetPlayer: class extends self.ISpriteInstance {},
	txNameGame: class extends self.ITextInstance {},
	destroyBullet: class extends self.ISpriteInstance {},
	bgShop: class extends self.ISpriteInstance {},
	turretMaket: class extends self.ISpriteInstance {},
	bulletMaket: class extends self.ISpriteInstance {},
	txPriceGun: class extends self.ITextInstance {},
	txPriceBullet: class extends self.ITextInstance {},
	bodyMaket: class extends self.ISpriteInstance {},
	txPriceBody: class extends self.ITextInstance {},
	bShopToMenu: class extends self.ISpriteInstance {},
	bgUpgrade: class extends self.ISpriteInstance {},
	bgUpgradeView: class extends self.ISpriteInstance {},
	txUpgradeDamage: class extends self.ITextInstance {},
	txUpgradeSpeedMove: class extends self.ITextInstance {},
	txUpgradeSpeedShot: class extends self.ITextInstance {},
	bUpgradeSpeedMove: class extends self.ISpriteInstance {},
	bUpgradeSpeedShot: class extends self.ISpriteInstance {},
	bUpgradeDamage: class extends self.ISpriteInstance {},
	txPriceSpeedMove: class extends self.ITextInstance {},
	txPriceSpeedShot: class extends self.ITextInstance {},
	txPriceDamage: class extends self.ITextInstance {},
	bUpToMenu: class extends self.ISpriteInstance {},
	txTapToStart: class extends self.ITextInstance {},
	bShop: class extends self.ISpriteInstance {},
	bUpgrade: class extends self.ISpriteInstance {},
	txBestResult: class extends self.ITextInstance {},
	bSound: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Wall: class extends self.ISpriteInstance {},
	LocalStorage: class extends self.IInstance {},
	particleDestroy: class extends self.IParticlesInstance {},
	sound: class extends self.IInstance {},
	press: class extends self.ISpriteInstance {},
	бан: class extends self.IButtonInstance {},
	вид: class extends self.IButtonInstance {},
	Браузер: class extends self.IInstance {},
	lang: class extends self.ISpriteInstance {}
}