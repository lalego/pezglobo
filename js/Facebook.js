(function() {

function Facebook(orientationStr, size) {
	this.Container_constructor();
	
	this.name = "facebook";
	
	this.smallFacebook = null;
	this.smallMediumFacebook = null;
	this.mediumFacebook = null;
	this.mediumBigFacebook = null;
	this.bigFacebook = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.setup();
}
var p = createjs.extend(Facebook, createjs.Container);


p.setup = function() {
	switch (size) {
		case "small":
			if (this.smallFacebook)
			{
				this.addBitmap(this.smallFacebook, van.smallVan);
			}
			else
			{
				this.smallFacebook = new createjs.Bitmap("images/facebook35x27.png");
				this.smallFacebook.image.onload = this.handleFacebookLoad;
				this.smallFacebook.name = "smallFacebook";
			}
			break;
		case "smallMedium":
			if (this.smallMediumFacebook)
			{
				this.addBitmap(this.smallMediumFacebook, van.smallMediumVan);
			}
			else
			{
				this.smallMediumFacebook = new createjs.Bitmap("images/facebook53x41.png");
				this.smallMediumFacebook.image.onload = this.handleFacebookLoad;
				this.smallMediumFacebook.name = "smallMediumFacebook";
			}
			break;
		case "medium":
			if (this.mediumFacebook)
			{
				this.addBitmap(this.mediumFacebook, van.mediumVan);
			}
			else
			{
				this.mediumFacebook = new createjs.Bitmap("images/facebook70x54.png");
				this.mediumFacebook.image.onload = this.handleFacebookLoad;
				this.mediumFacebook.name = "mediumFacebook";
			}
			break;
		case "mediumBig":
			if (this.mediumBigFacebook)
			{
				this.addBitmap(this.mediumBigFacebook, van.mediumBigVan);
			}
			else
			{
				this.mediumBigFacebook = new createjs.Bitmap("images/facebook91x70.png");
				this.mediumBigFacebook.image.onload = this.handleFacebookLoad;
				this.mediumBigFacebook.name = "mediumBigFacebook";
			}
			break;
		case "large":
			if (this.bigFacebook)
			{
				this.addBitmap(this.bigFacebook, van.bigVan);
			}
			else
			{
				this.bigFacebook = new createjs.Bitmap("images/facebook140x108.png");
				this.bigFacebook.image.onload = this.handleFacebookLoad;
				this.bigFacebook.name = "bigFacebook";
			}
			break;
	}
} ;

p.addBitmap = function (bitmap, bitmapVan) {
	this.addChild(bitmap);
	this.resizeIcon(bitmap, bitmapVan);
} ;

p.handleFacebookLoad = function (event) {
	var facebook = van.getChildByName("facebook");
	
	switch (size) {
		case "small":
			facebook.addBitmap(facebook.smallFacebook, van.smallVan);
			break;
		case "smallMedium":
			facebook.addBitmap(facebook.smallMediumFacebook, van.smallMediumVan);
			break;
		case "medium":
			facebook.addBitmap(facebook.mediumFacebook, van.mediumVan);
			break;
		case "mediumBig":
			facebook.addBitmap(facebook.mediumBigFacebook, van.mediumBigVan);
			break;
		case "large":
			facebook.addBitmap(facebook.bigFacebook, van.bigVan);
			break;
	}
} ;

p.resizeIcon = function (bitmap, bitmapVan) {
	if(orientationStr == 'Landscape')
	{
		bitmap.x = bitmapVan.x + 168;
		bitmap.y = bitmapVan.y + 106;
		bitmap.rotation = 0;
	}
	else
	{
		bitmap.x = bitmapVan.x + 148;
		bitmap.y = bitmapVan.y + 130;
		bitmap.rotation = 9;
	}
}

p.changeVertical = function () {
	
}

p.changeContainer = function () {		
	
}

window.Facebook = createjs.promote(Facebook, "Container");
}());