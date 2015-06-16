(function() {

function Instangram(orientationStr, size) {
	this.Container_constructor();
	
	this.name = "instangram";
	
	this.smallInstangram = null;
	this.smallMediumInstangram = null;
	this.mediumInstangram = null;
	this.mediumBigInstangram = null;
	this.bigInstangram = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.setup();
}
var p = createjs.extend(Instangram, createjs.Container);


p.setup = function() {
	switch (size) {
		case "small":
			if (this.smallInstangram)
			{
				this.addBitmap(this.smallInstangram, van.smallVan);
			}
			else
			{
				this.smallInstangram = new createjs.Bitmap("images/instangram34x26.png");
				this.smallInstangram.image.onload = this.handleInstangramLoad;
				this.smallInstangram.name = "smallInstangram";
			}
			break;
		case "smallMedium":
			if (this.smallMediumInstangram)
			{
				this.addBitmap(this.smallMediumInstangram, van.smallMediumVan);
			}
			else
			{
				this.smallMediumInstangram = new createjs.Bitmap("images/instangram50x38.png");
				this.smallMediumInstangram.image.onload = this.handleInstangramLoad;
				this.smallMediumInstangram.name = "smallMediumInstangram";
			}
			break;
		case "medium":
			if (this.mediumInstangram)
			{
				this.addBitmap(this.mediumInstangram, van.mediumVan);
			}
			else
			{
				this.mediumInstangram = new createjs.Bitmap("images/instangram67x51.png");
				this.mediumInstangram.image.onload = this.handleInstangramLoad;
				this.mediumInstangram.name = "mediumInstangram";
			}
			break;
		case "mediumBig":
			if (this.mediumBigInstangram)
			{
				this.addBitmap(this.mediumBigInstangram, van.mediumBigVan);
			}
			else
			{
				this.mediumBigInstangram = new createjs.Bitmap("images/instangram87x66.png");
				this.mediumBigInstangram.image.onload = this.handleInstangramLoad;
				this.mediumBigInstangram.name = "mediumBigInstangram";
			}
			break;
		case "large":
			if (this.bigInstangram)
			{
				this.addBitmap(this.bigInstangram, van.bigVan);
			}
			else
			{
				this.bigInstangram = new createjs.Bitmap("images/instangram134x102.png");
				this.bigInstangram.image.onload = this.handleInstangramLoad;
				this.bigInstangram.name = "bigInstangram";
			}
			break;
	}
} ;

p.addBitmap = function (bitmap, bitmapVan) {
	this.addChild(bitmap);
	this.resizeIcon(bitmap, bitmapVan);
} ;

p.handleInstangramLoad = function (event) {
	var instangram = van.getChildByName("instangram");
	
	switch (size) {
		case "small":
			instangram.addBitmap(instangram.smallInstangram, van.smallVan);
			break;
		case "smallMedium":
			instangram.addBitmap(instangram.smallMediumInstangram, van.smallMediumVan);
			break;
		case "medium":
			instangram.addBitmap(instangram.mediumInstangram, van.mediumVan);
			break;
		case "mediumBig":
			instangram.addBitmap(instangram.mediumBigInstangram, van.mediumBigVan);
			break;
		case "large":
			instangram.addBitmap(instangram.bigInstangram, van.bigVan);
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

p.changeContainer = function (instangram) {		
	
}

window.Instangram = createjs.promote(Instangram, "Container");
}());