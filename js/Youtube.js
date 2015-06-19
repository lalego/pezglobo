(function() {

function Youtube(orientationStr, size) {
	this.Container_constructor();
	
	this.name = "youtube";
	
	this.smallYoutube = null;
	this.smallMediumYoutube = null;
	this.mediumYoutube = null;
	this.mediumBigYoutube = null;
	this.bigYoutube = null;
	
	this.smallYoutubeOver = null;
	this.smallMediumYoutubeOver = null;
	this.mediumYoutubeOver = null;
	this.mediumBigYoutubeOver = null;
	this.bigYoutubeOver = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.setup();
}
var p = createjs.extend(Youtube, createjs.Container);


p.setup = function() {
	switch (size) {
		case "small":
			if (this.smallYoutube)
			{
				this.addBitmap(this.smallYoutube, this.smallYoutubeOver, van.smallVan);
			}
			else
			{
				this.smallYoutube = new createjs.Bitmap("images/youtube35x27.png").set({name: "smallYoutube", cursor: "pointer"});
				this.smallYoutubeOver = new createjs.Bitmap("images/youtubeOver35x27.png").set({name: "smallYoutubeOver", cursor: "pointer"});
				this.smallYoutubeOver.visible = false;
				this.smallYoutube.image.onload = this.handleYoutubeLoad;
			}
			break;
		case "smallMedium":
			if (this.smallMediumYoutube)
			{
				this.addBitmap(this.smallMediumYoutube, this.smallMediumYoutubeOver, van.smallMediumVan);
			}
			else
			{
				this.smallMediumYoutube = new createjs.Bitmap("images/youtube52x41.png").set({name: "smallMediumYoutube", cursor: "pointer"});
				this.smallMediumYoutubeOver = new createjs.Bitmap("images/youtubeOver52x41.png").set({name: "smallMediumYoutubeOver", cursor: "pointer"});
				this.smallMediumYoutubeOver.visible = false;
				this.smallMediumYoutube.image.onload = this.handleYoutubeLoad;
			}
			break;
		case "medium":
			if (this.mediumYoutube)
			{
				this.addBitmap(this.mediumYoutube, this.mediumYoutubeOver, van.mediumVan);
			}
			else
			{
				this.mediumYoutube = new createjs.Bitmap("images/youtube69x54.png").set({name: "mediumYoutube", cursor: "pointer"});
				this.mediumYoutubeOver = new createjs.Bitmap("images/youtubeOver69x54.png").set({name: "mediumYoutubeOver", cursor: "pointer"});
				this.mediumYoutubeOver.visible = false;
				this.mediumYoutube.image.onload = this.handleYoutubeLoad;
			}
			break;
		case "mediumBig":
			if (this.mediumBigYoutube)
			{
				this.addBitmap(this.mediumBigYoutube, this.mediumBigYoutubeOver, van.mediumBigVan);
			}
			else
			{
				this.mediumBigYoutube = new createjs.Bitmap("images/youtube90x70.png").set({name: "mediumBigYoutube", cursor: "pointer"});
				this.mediumBigYoutubeOver = new createjs.Bitmap("images/youtubeOver90x70.png").set({name: "mediumBigYoutubeOver", cursor: "pointer"});
				this.mediumBigYoutubeOver.visible = false;
				this.mediumBigYoutube.image.onload = this.handleYoutubeLoad;
			}
			break;
		case "large":
			if (this.bigYoutube)
			{
				this.addBitmap(this.bigYoutube, this.bigYoutubeOver, van.bigVan);
			}
			else
			{
				this.bigYoutube = new createjs.Bitmap("images/youtube138x108.png").set({name: "bigYoutube", cursor: "pointer"});
				this.bigYoutubeOver = new createjs.Bitmap("images/youtubeOver138x108.png").set({name: "bigYoutubeOver", cursor: "pointer"});
				this.bigYoutubeOver.visible = false;
				this.bigYoutube.image.onload = this.handleYoutubeLoad;
			}
			break;
	}
} ;

p.addBitmap = function (bitmap, bitmapOver, bitmapVan) {
	this.addChild(bitmap, bitmapOver);
	this.resizeIcon(bitmap, bitmapOver, bitmapVan);
	this.createButton(bitmap, bitmapOver);
} ;

p.handleYoutubeLoad = function (event) {
	var youtube = van.getChildByName("youtube");
	
	switch (size) {
		case "small":
			youtube.addBitmap(youtube.smallYoutube, youtube.smallYoutubeOver, van.smallVan);
			break;
		case "smallMedium":
			youtube.addBitmap(youtube.smallMediumYoutube, youtube.smallMediumYoutubeOver, van.smallMediumVan);
			break;
		case "medium":
			youtube.addBitmap(youtube.mediumYoutube, youtube.mediumYoutubeOver, van.mediumVan);
			break;
		case "mediumBig":
			youtube.addBitmap(youtube.mediumBigYoutube, youtube.mediumBigYoutubeOver, van.mediumBigVan);
			break;
		case "large":
			youtube.addBitmap(youtube.bigYoutube, youtube.bigYoutubeOver, van.bigVan);
			break;
	}
} ;

p.resizeIcon = function (bitmap, bitmapOver, bitmapVan) {
	if(orientationStr == 'Landscape')
	{
		bitmap.x = bitmapVan.x + (74.50 * bitmapVan.image.width/100);
		bitmap.y = bitmapVan.y + (33.13 * bitmapVan.image.height/100);
		bitmap.rotation = 0;
		
		bitmapOver.x = bitmapVan.x + (74.50 * bitmapVan.image.width/100);
		bitmapOver.y = bitmapVan.y + (33.13 * bitmapVan.image.height/100);
		bitmapOver.rotation = 0;
	}
	else
	{
		bitmap.x = bitmapVan.x + (70.65 * bitmapVan.image.width/100);
		bitmap.y = bitmapVan.y + (52.54 * bitmapVan.image.height/100);
		bitmap.rotation = 9;
		
		bitmapOver.x = bitmapVan.x + (70.65 * bitmapVan.image.width/100);
		bitmapOver.y = bitmapVan.y + (52.54 * bitmapVan.image.height/100);
		bitmapOver.rotation = 9;
	}
} ;

p.createButton = function (bitmap, bitmapOver) {
	bitmap.addEventListener("mouseover", this.handleMouseover);
	bitmapOver.addEventListener("mouseout", this.handleMouseout);
	bitmapOver.addEventListener("mousedown", this.handleMousedown);
} ;

p.handleMouseover = function (evt) {
	var parent = evt.target.parent;
	var bitmapOver = evt.target.name + "Over";
	parent[bitmapOver].visible = true;
} ;

p.handleMouseout = function (evt) {
	evt.target.visible = false;
} ;

p.handleMousedown = function (evt) {
	window.location = "https://www.youtube.com/channel/UC8bt_Ie61WhJVWY6nNJFnpQ";
} ;	

window.Youtube = createjs.promote(Youtube, "Container");
}());