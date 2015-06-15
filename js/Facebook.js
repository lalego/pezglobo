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
			smallFacebook = new createjs.Bitmap("images/facebook35x27.png");
			smallFacebook.image.onload = this.handleFacebookLoad;
			break;
		case "smallMedium":
			smallMediumFacebook = new createjs.Bitmap("images/facebook53x41.png");
			smallMediumFacebook.image.onload = this.handleFacebookLoad;
			break;
		case "medium":
			mediumFacebook = new createjs.Bitmap("images/facebook70x54.png");
			mediumFacebook.image.onload = this.handleFacebookLoad;
			break;
		case "mediumBig":
			mediumBigFacebook = new createjs.Bitmap("images/facebook91x70.png");
			mediumBigFacebook.image.onload = this.handleFacebookLoad;
			break;
		case "large":
			bigFacebook = new createjs.Bitmap("images/facebook140x108.png");
			bigFacebook.image.onload = this.handleFacebookLoad;
			break;
	}
} ;

p.handleFacebookLoad = function (event) {
	var facebook = van.getChildByName("facebook");
	
	switch (size) {
		case "small":
			var smallVan = van.getChildByName("smallVan");
			facebook.addChild(smallFacebook);
			facebook.resizeIcon(smallFacebook, smallVan);
			break;
		case "smallMedium":
			var smallMediumVan = van.getChildByName("smallMediumVan");
			facebook.addChild(smallMediumFacebook);
			facebook.resizeIcon(smallMediumFacebook, smallMediumVan);
			break;
		case "medium":
			var mediumVan = van.getChildByName("mediumVan");
			facebook.addChild(mediumFacebook);
			facebook.resizeIcon(mediumFacebook, mediumVan);
			break;
		case "mediumBig":
			var mediumBigVan = van.getChildByName("mediumBigVan");
			facebook.addChild(mediumBigFacebook);
			facebook.resizeIcon(mediumBigFacebook, mediumBigVan);
			break;
		case "large":
			var bigVan = van.getChildByName("bigVan");
			facebook.addChild(bigFacebook);
			facebook.resizeIcon(bigFacebook, bigVan);
			break;
	}
} ;

p.resizeIcon = function (bitmap, bitmapVan) {
	if(orientationStr == 'Landscape')
	{
		bitmap.x = bitmapVan.x + 168;
		//bitmap.x = 168;
		bitmap.y = bitmapVan.y + 106;
		//bitmap.y = 106;
		bitmap.rotation = 0;
	}
	else
	{
		bitmap.x = 0;
		bitmap.y = 0;
		bitmap.rotation = 9;
	}

}

p.changeVertical = function () {
	
}

p.changeContainer = function () {		
	
}

window.Facebook = createjs.promote(Facebook, "Container");
}());