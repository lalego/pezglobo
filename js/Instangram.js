(function() {

function Instangram(orientationStr, size) {
	this.Container_constructor();
	
	this.name = "instangram";
	
	this.smallInstangram = null;
	this.smallMediumInstangram = null;
	this.mediumInstangram = null;
	this.mediumBigInstangram = null;
	this.bigInstangram = null;
	
	this.smallInstangramOver = null;
	this.smallMediumInstangramOver = null;
	this.mediumInstangramOver = null;
	this.mediumBigInstangramOver = null;
	this.bigInstangramOver = null;
	
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
				this.addBitmap(this.smallInstangram, this.smallInstangramOver, van.smallVan);
			}
			else
			{
				this.smallInstangram = new createjs.Bitmap("images/instangram34x26.png").set({name: "smallInstangram", cursor: "pointer"});
				this.smallInstangramOver = new createjs.Bitmap("images/instangramOver34x26.png").set({name: "smallInstangramOver", cursor: "pointer"});
				this.smallInstangramOver.visible = false;
				this.smallInstangram.image.onload = this.handleInstangramLoad;
			}
			break;
		case "smallMedium":
			if (this.smallMediumInstangram)
			{
				this.addBitmap(this.smallMediumInstangram, this.smallMediumInstangramOver, van.smallMediumVan);
			}
			else
			{
				this.smallMediumInstangram = new createjs.Bitmap("images/instangram50x38.png").set({name: "smallMediumInstangram", cursor: "pointer"});
				this.smallMediumInstangramOver = new createjs.Bitmap("images/instangramOver50x38.png").set({name: "smallMediumInstangramOver", cursor: "pointer"});
				this.smallMediumInstangramOver.visible = false;
				this.smallMediumInstangram.image.onload = this.handleInstangramLoad;
			}
			break;
		case "medium":
			if (this.mediumInstangram)
			{
				this.addBitmap(this.mediumInstangram, this.mediumInstangramOver, van.mediumVan);
			}
			else
			{
				this.mediumInstangram = new createjs.Bitmap("images/instangram67x51.png").set({name: "mediumInstangram", cursor: "pointer"});
				this.mediumInstangramOver = new createjs.Bitmap("images/instangramOver67x51.png").set({name: "mediumInstangramOver", cursor: "pointer"});
				this.mediumInstangramOver.visible = false;
				this.mediumInstangram.image.onload = this.handleInstangramLoad;
			}
			break;
		case "mediumBig":
			if (this.mediumBigInstangram)
			{
				this.addBitmap(this.mediumBigInstangram, this.mediumBigInstangramOver, van.mediumBigVan);
			}
			else
			{
				this.mediumBigInstangram = new createjs.Bitmap("images/instangram87x66.png").set({name: "mediumBigInstangram", cursor: "pointer"});
				this.mediumBigInstangramOver = new createjs.Bitmap("images/instangramOver87x66.png").set({name: "mediumBigInstangramOver", cursor: "pointer"});
				this.mediumBigInstangramOver.visible = false;
				this.mediumBigInstangram.image.onload = this.handleInstangramLoad;
			}
			break;
		case "large":
			if (this.bigInstangram)
			{
				this.addBitmap(this.bigInstangram, this.bigInstangramOver, van.bigVan);
			}
			else
			{
				this.bigInstangram = new createjs.Bitmap("images/instangram134x102.png").set({name: "bigInstangram", cursor: "pointer"});
				this.bigInstangramOver = new createjs.Bitmap("images/instangramOver134x102.png").set({name: "bigInstangramOver", cursor: "pointer"});
				this.bigInstangramOver.visible = false;
				this.bigInstangram.image.onload = this.handleInstangramLoad;
			}
			break;
	}
} ;

p.addBitmap = function (bitmap, bitmapOver, bitmapVan) {
	this.addChild(bitmap, bitmapOver);
	this.resizeIcon(bitmap, bitmapOver, bitmapVan);
	this.createButton(bitmap, bitmapOver);
} ;

p.handleInstangramLoad = function (event) {
	var instangram = van.getChildByName("instangram");
	
	switch (size) {
		case "small":
			instangram.addBitmap(instangram.smallInstangram, instangram.smallInstangramOver, van.smallVan);
			break;
		case "smallMedium":
			instangram.addBitmap(instangram.smallMediumInstangram, instangram.smallMediumInstangramOver, van.smallMediumVan);
			break;
		case "medium":
			instangram.addBitmap(instangram.mediumInstangram, instangram.mediumInstangramOver, van.mediumVan);
			break;
		case "mediumBig":
			instangram.addBitmap(instangram.mediumBigInstangram, instangram.mediumBigInstangramOver, van.mediumBigVan);
			break;
		case "large":
			instangram.addBitmap(instangram.bigInstangram, instangram.bigInstangramOver, van.bigVan);
			break;
	}
} ;

p.resizeIcon = function (bitmap, bitmapOver, bitmapVan) {
	if(orientationStr == 'Landscape')
	{
		bitmap.x = bitmapVan.x + (59.23 * bitmapVan.image.width/100);
		bitmap.y = bitmapVan.y + (33.43 * bitmapVan.image.height/100);
		bitmap.rotation = 0;
		
		bitmapOver.x = bitmapVan.x + (59.23 * bitmapVan.image.width/100);
		bitmapOver.y = bitmapVan.y + (33.43 * bitmapVan.image.height/100);
		bitmapOver.rotation = 0;
	}
	else
	{
		bitmap.x = bitmapVan.x + (55.6 * bitmapVan.image.width/100);
		bitmap.y = bitmapVan.y + (48.36 * bitmapVan.image.height/100);
		bitmap.rotation = 9;
		
		bitmapOver.x = bitmapVan.x + (55.6 * bitmapVan.image.width/100);
		bitmapOver.y = bitmapVan.y + (48.36 * bitmapVan.image.height/100);
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
	window.location = "https://instagram.com/pezglobobeachbar/";
} ;	

window.Instangram = createjs.promote(Instangram, "Container");
}());