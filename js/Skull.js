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
				this.smallSkull = new createjs.Bitmap("images/calabera24x28.png");
				this.smallSkull.image.onload = this.handleSkullLoad;
				this.smallSkull.name = "smallSkull";
			}
			break;
		case "smallMedium":
			if (this.smallMediumSkull)
			{
				this.addBitmap(this.smallMediumSkull, van.smallMediumVan);
			}
			else
			{
				this.smallMediumSkull = new createjs.Bitmap("images/calabera35x41.png");
				this.smallMediumSkull.image.onload = this.handleSkullLoad;
				this.smallMediumSkull.name = "smallMediumSkull";
			}
			break;
		case "medium":
			if (this.mediumSkull)
			{
				this.addBitmap(this.mediumSkull, van.mediumVan);
			}
			else
			{
				this.mediumSkull = new createjs.Bitmap("images/calabera47x55.png");
				this.mediumSkull.image.onload = this.handleSkullLoad;
				this.mediumSkull.name = "mediumSkull";
			}
			break;
		case "mediumBig":
			if (this.mediumBigSkull)
			{
				this.addBitmap(this.mediumBigSkull, van.mediumBigVan);
			}
			else
			{
				this.mediumBigSkull = new createjs.Bitmap("images/calabera61x71.png");
				this.mediumBigSkull.image.onload = this.handleSkullLoad;
				this.mediumBigSkull.name = "mediumBigSkull";
			}
			break;
		case "large":
			if (this.bigSkull)
			{
				this.addBitmap(this.bigSkull, van.bigVan);
			}
			else
			{
				this.bigSkull = new createjs.Bitmap("images/calabera94x110.png");
				this.bigSkull.image.onload = this.handleSkullLoad;
				this.bigSkull.name = "bigSkull";
			}
			break;
	}
} ;

p.addBitmap = function (bitmap, bitmapVan) {
	this.addChild(bitmap);
	this.resizeIcon(bitmap, bitmapVan);
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
		bitmap.x = bitmapVan.x + (50.97 * bitmapVan.image.width/100);
		bitmap.y = bitmapVan.y + (54.03 * bitmapVan.image.height/100);
		bitmap.rotation = 0;
	}
	else
	{
		bitmap.x = bitmapVan.x + (45 * bitmapVan.image.width/100);
		bitmap.y = bitmapVan.y + (65.67 * bitmapVan.image.height/100);
		bitmap.rotation = 9;
	}
} ;

p.changeVertical = function () {
	
}

p.changeContainer = function (skull) {		
	
}

window.Skull = createjs.promote(Skull, "Container");
}());