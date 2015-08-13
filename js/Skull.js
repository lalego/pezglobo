(function() {

function Skull(orientationStr, size) {
	this.Container_constructor();
	
	this.name = "skull";
	
	this.smallSkull = null;
	this.smallMediumSkull = null;
	this.mediumSkull = null;
	this.mediumBigSkull = null;
	this.bigSkull = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.setup();
}
var p = createjs.extend(Skull, createjs.Container);


p.setup = function() {
	switch (size) {
		case "small":
			if (this.smallSkull)
			{
				this.addBitmap(this.smallSkull, van.smallVan);
			}
			else
			{
				this.smallSkull = new createjs.Bitmap("images/calabera24x28.png").set({name: "smallSkull", regX:12, regY:14, cursor: "pointer"});
				this.smallSkull.image.onload = this.handleSkullLoad;
			}
			break;
		case "smallMedium":
			if (this.smallMediumSkull)
			{
				this.addBitmap(this.smallMediumSkull, van.smallMediumVan);
			}
			else
			{
				this.smallMediumSkull = new createjs.Bitmap("images/calabera35x41.png").set({name: "smallMediumSkull", regX:17, regY:20, cursor: "pointer"});
				this.smallMediumSkull.image.onload = this.handleSkullLoad;
			}
			break;
		case "medium":
			if (this.mediumSkull)
			{
				this.addBitmap(this.mediumSkull, van.mediumVan);
			}
			else
			{
				this.mediumSkull = new createjs.Bitmap("images/calabera47x55.png").set({name: "mediumSkull", regX:23, regY:27, cursor: "pointer"});
				this.mediumSkull.image.onload = this.handleSkullLoad;
			}
			break;
		case "mediumBig":
			if (this.mediumBigSkull)
			{
				this.addBitmap(this.mediumBigSkull, van.mediumBigVan);
			}
			else
			{
				this.mediumBigSkull = new createjs.Bitmap("images/calabera61x71.png").set({name: "mediumBigSkull", regX:30, regY:35, cursor: "pointer"});
				this.mediumBigSkull.image.onload = this.handleSkullLoad;
			}
			break;
		case "large":
			if (this.bigSkull)
			{
				this.addBitmap(this.bigSkull, van.bigVan);
			}
			else
			{
				this.bigSkull = new createjs.Bitmap("images/calabera94x110.png").set({name: "bigSkull", regX:47, regY:55, cursor: "pointer"});
				this.bigSkull.image.onload = this.handleSkullLoad;
			}
			break;
	}
} ;

p.addBitmap = function (bitmap, bitmapVan) {
	this.addChild(bitmap);
	this.resizeIcon(bitmap, bitmapVan);
	this.createTween(bitmap);
} ;

p.handleSkullLoad = function (event) {
	var skull = van.getChildByName("skull");
	
	switch (size) {
		case "small":
			skull.addBitmap(skull.smallSkull, van.smallVan);
			break;
		case "smallMedium":
			skull.addBitmap(skull.smallMediumSkull, van.smallMediumVan);
			break;
		case "medium":
			skull.addBitmap(skull.mediumSkull, van.mediumVan);
			break;
		case "mediumBig":
			skull.addBitmap(skull.mediumBigSkull, van.mediumBigVan);
			break;
		case "large":
			skull.addBitmap(skull.bigSkull, van.bigVan);
			break;
	}
} ;

p.resizeIcon = function (bitmap, bitmapVan) {
	if(orientationStr == 'Landscape')
	{
		bitmap.x = bitmapVan.x + bitmap.image.width/2 + (50.97 * bitmapVan.image.width/100);
		bitmap.y = bitmapVan.y + bitmap.image.height/2 + (54.03 * bitmapVan.image.height/100);
		bitmap.rotation = 0;
	}
	else
	{
		bitmap.x = bitmapVan.x + bitmap.image.width/2 + (45 * bitmapVan.image.width/100);
		bitmap.y = bitmapVan.y + bitmap.image.height/2 + (65.67 * bitmapVan.image.height/100);
		bitmap.rotation = 9;
	}
} ;

p.createTween = function (bitmap) {
	bitmap.addEventListener("mouseover", this.handleMouseover);
	bitmap.addEventListener("mouseout", this.handleMouseout);
} ;

p.handleMouseover = function (evt) {		
	var facebook = van.getChildByName("facebook");
	var facebookOver = facebook.getChildAt(1);
	facebookOver.visible = true;
	
	var twitter = van.getChildByName("twitter");
	var twitterOver = twitter.getChildAt(1);
	twitterOver.visible = true;
	
	var instangram = van.getChildByName("instangram");
	var instangramOver = instangram.getChildAt(1);
	instangramOver.visible = true;
	
	var youtube = van.getChildByName("youtube");
	var youtubeOver = youtube.getChildAt(1);
	youtubeOver.visible = true;
	
	var skull = van.getChildByName("skull");
	skull.runTween(evt.target);
} ;

p.runTween = function (bitmap) {
	var playing = createjs.Tween.hasActiveTweens(bitmap);
	console.log(playing);
	
	if (!playing)
	{
		console.log("no playing");
		createjs.Tween.get(bitmap,{override: true}).to({rotation:360}, 1000).call(this.handleComplete);	
	}	
	else
	{
		console.log("playing");
	}
}

p.handleComplete = function () {		
	console.log("Done...");
	tick();
}

p.handleMouseout = function (evt) {
	var facebook = van.getChildByName("facebook");
	var facebookOver = facebook.getChildAt(1);
	facebookOver.visible = false;
	
	var twitter = van.getChildByName("twitter");
	var twitterOver = twitter.getChildAt(1);
	twitterOver.visible = false;
	
	var instangram = van.getChildByName("instangram");
	var instangramOver = instangram.getChildAt(1);
	instangramOver.visible = false;
	
	var youtube = van.getChildByName("youtube");
	var youtubeOver = youtube.getChildAt(1);
	youtubeOver.visible = false;
} ;

window.Skull = createjs.promote(Skull, "Container");
}());