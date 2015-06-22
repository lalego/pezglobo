(function() {

function Facebook(orientationStr, size) {
	this.Container_constructor();
	
	this.name = "facebook";
	
	this.smallFacebook = null;
	this.smallMediumFacebook = null;
	this.mediumFacebook = null;
	this.mediumBigFacebook = null;
	this.bigFacebook = null;
	
	this.smallFacebookOver = null;
	this.smallMediumFacebookOver = null;
	this.mediumFacebookOver = null;
	this.mediumBigFacebookOver = null;
	this.bigFacebookOver = null;
	
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
				this.addBitmap(this.smallFacebook, this.smallFacebookOver, van.smallVan);
			}
			else
			{
				this.smallFacebook = new createjs.Bitmap("images/facebook35x27.png").set({name: "smallFacebook", cursor: "pointer"});
				this.smallFacebookOver = new createjs.Bitmap("images/facebookOver35x27.png").set({name: "smallFacebookOver", cursor: "pointer"});
				this.smallFacebookOver.visible = false;
				this.smallFacebook.image.onload = this.handleFacebookLoad;

			}
			break;
		case "smallMedium":
			if (this.smallMediumFacebook)
			{
				this.addBitmap(this.smallMediumFacebook, this.smallMediumFacebookOver, van.smallMediumVan);
			}
			else
			{
				this.smallMediumFacebook = new createjs.Bitmap("images/facebook53x41.png").set({name: "smallMediumFacebook", cursor: "pointer"});
				this.smallMediumFacebookOver = new createjs.Bitmap("images/facebookOver53x41.png").set({name: "smallMediumFacebookOver", cursor: "pointer"});
				this.smallMediumFacebookOver.visible = false;
				this.smallMediumFacebook.image.onload = this.handleFacebookLoad;
			}
			break;
		case "medium":
			if (this.mediumFacebook)
			{
				this.addBitmap(this.mediumFacebook, this.mediumFacebookOver, van.mediumVan);
			}
			else
			{
				this.mediumFacebook = new createjs.Bitmap("images/facebook70x54.png").set({name: "mediumFacebook", cursor: "pointer"});
				this.mediumFacebookOver = new createjs.Bitmap("images/facebookOver70x54.png").set({name: "mediumFacebookOver", cursor: "pointer"});
				this.mediumFacebookOver.visible = false;
				this.mediumFacebook.image.onload = this.handleFacebookLoad;
			}
			break;
		case "mediumBig":
			if (this.mediumBigFacebook)
			{
				this.addBitmap(this.mediumBigFacebook, this.mediumBigFacebookOver, van.mediumBigVan);
			}
			else
			{
				this.mediumBigFacebook = new createjs.Bitmap("images/facebook91x70.png").set({name: "mediumBigFacebook", cursor: "pointer"});
				this.mediumBigFacebookOver = new createjs.Bitmap("images/facebookOver91x70.png").set({name: "mediumBigFacebookOver", cursor: "pointer"});
				this.mediumBigFacebookOver.visible = false;
				this.mediumBigFacebook.image.onload = this.handleFacebookLoad;
			}
			break;
		case "large":
			if (this.bigFacebook)
			{
				this.addBitmap(this.bigFacebook, this.bigFacebookOver, van.bigVan);
			}
			else
			{
				this.bigFacebook = new createjs.Bitmap("images/facebook140x108.png").set({name: "bigFacebook", cursor: "pointer"});
				this.bigFacebookOver = new createjs.Bitmap("images/facebookOver140x108.png").set({name: "bigFacebookOver", cursor: "pointer"});
				this.bigFacebookOver.visible = false;
				this.bigFacebook.image.onload = this.handleFacebookLoad;
			}
			break;
	}
} ;

p.addBitmap = function (bitmap, bitmapOver, bitmapVan) {
	this.addChild(bitmap, bitmapOver);
	this.resizeIcon(bitmap, bitmapOver, bitmapVan);
	this.createButton(bitmap, bitmapOver);
} ;

p.handleFacebookLoad = function (event) {
	var facebook = van.getChildByName("facebook");
	
	switch (size) {
		case "small":
			facebook.addBitmap(facebook.smallFacebook, facebook.smallFacebookOver, van.smallVan);
			break;
		case "smallMedium":
			facebook.addBitmap(facebook.smallMediumFacebook, facebook.smallMediumFacebookOver, van.smallMediumVan);
			break;
		case "medium":
			facebook.addBitmap(facebook.mediumFacebook, facebook.mediumFacebookOver, van.mediumVan);
			break;
		case "mediumBig":
			facebook.addBitmap(facebook.mediumBigFacebook, facebook.mediumBigFacebookOver, van.mediumBigVan);
			break;
		case "large":
			facebook.addBitmap(facebook.bigFacebook, facebook.bigFacebookOver, van.bigVan);
			break;
	}
} ;

p.resizeIcon = function (bitmap, bitmapOver, bitmapVan) {
	if(orientationStr == 'Landscape')
	{
		bitmap.x = bitmapVan.x + (29.53 * bitmapVan.image.width/100);
		bitmap.y = bitmapVan.y + (31.64 * bitmapVan.image.height/100);
		bitmap.rotation = 0;
		
		bitmapOver.x = bitmapVan.x + (29.53 * bitmapVan.image.width/100);
		bitmapOver.y = bitmapVan.y + (31.64 * bitmapVan.image.height/100);
		bitmapOver.rotation = 0;
	}
	else
	{
		bitmap.x = bitmapVan.x + (26 * bitmapVan.image.width/100);
		bitmap.y = bitmapVan.y + (38.80 * bitmapVan.image.height/100);
		bitmap.rotation = 9;
		
		bitmapOver.x = bitmapVan.x + (26 * bitmapVan.image.width/100);
		bitmapOver.y = bitmapVan.y + (38.80 * bitmapVan.image.height/100);
		bitmapOver.rotation = 9;
	}
} ;

p.createButton = function (bitmap, bitmapOver) {
	bitmap.addEventListener("mouseover", this.handleMouseover);
	bitmap.addEventListener("mousedown", this.handleMousedown);
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
	window.location = "https://www.facebook.com/PezGloboBeachBar";
} ;	

window.Facebook = createjs.promote(Facebook, "Container");
}());