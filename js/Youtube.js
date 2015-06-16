(function() {

function Youtube(orientationStr, size) {
	this.Container_constructor();
	
	this.name = "youtube";
	
	this.smallYoutube = null;
	this.smallMediumYoutube = null;
	this.mediumYoutube = null;
	this.mediumBigYoutube = null;
	this.bigYoutube = null;
	
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
				this.addBitmap(this.smallYoutube, van.smallVan);
			}
			else
			{
				this.smallYoutube = new createjs.Bitmap("images/youtube35x27.png");
				this.smallYoutube.image.onload = this.handleYoutubeLoad;
				this.smallYoutube.name = "smallYoutube";
			}
			break;
		case "smallMedium":
			if (this.smallMediumYoutube)
			{
				this.addBitmap(this.smallMediumYoutube, van.smallMediumVan);
			}
			else
			{
				this.smallMediumYoutube = new createjs.Bitmap("images/youtube52x41.png");
				this.smallMediumYoutube.image.onload = this.handleYoutubeLoad;
				this.smallMediumYoutube.name = "smallMediumYoutube";
			}
			break;
		case "medium":
			if (this.mediumYoutube)
			{
				this.addBitmap(this.mediumYoutube, van.mediumVan);
			}
			else
			{
				this.mediumYoutube = new createjs.Bitmap("images/youtube69x54.png");
				this.mediumYoutube.image.onload = this.handleYoutubeLoad;
				this.mediumYoutube.name = "mediumYoutube";
			}
			break;
		case "mediumBig":
			if (this.mediumBigYoutube)
			{
				this.addBitmap(this.mediumBigYoutube, van.mediumBigVan);
			}
			else
			{
				this.mediumBigYoutube = new createjs.Bitmap("images/youtube90x70.png");
				this.mediumBigYoutube.image.onload = this.handleYoutubeLoad;
				this.mediumBigYoutube.name = "mediumBigYoutube";
			}
			break;
		case "large":
			if (this.bigYoutube)
			{
				this.addBitmap(this.bigYoutube, van.bigVan);
			}
			else
			{
				this.bigYoutube = new createjs.Bitmap("images/youtube138x108.png");
				this.bigYoutube.image.onload = this.handleYoutubeLoad;
				this.bigYoutube.name = "bigYoutube";
			}
			break;
	}
} ;

p.addBitmap = function (bitmap, bitmapVan) {
	this.addChild(bitmap);
	this.resizeIcon(bitmap, bitmapVan);
} ;

p.handleYoutubeLoad = function (event) {
	var youtube = van.getChildByName("youtube");
	
	switch (size) {
		case "small":
			youtube.addBitmap(youtube.smallYoutube, van.smallVan);
			break;
		case "smallMedium":
			youtube.addBitmap(youtube.smallMediumYoutube, van.smallMediumVan);
			break;
		case "medium":
			youtube.addBitmap(youtube.mediumYoutube, van.mediumVan);
			break;
		case "mediumBig":
			youtube.addBitmap(youtube.mediumBigYoutube, van.mediumBigVan);
			break;
		case "large":
			youtube.addBitmap(youtube.bigYoutube, van.bigVan);
			break;
	}
} ;

p.resizeIcon = function (bitmap, bitmapVan) {
	if(orientationStr == 'Landscape')
	{
		bitmap.x = bitmapVan.x + 337.8;
		bitmap.y = bitmapVan.y + 112.5;
		bitmap.rotation = 0;
	}
	else
	{
		bitmap.x = bitmapVan.x + 148;
		bitmap.y = bitmapVan.y + 130;
		bitmap.rotation = 9;
	}
} ;

p.changeVertical = function () {
	
}

p.changeContainer = function (youtube) {		
	
}

window.Youtube = createjs.promote(Youtube, "Container");
}());