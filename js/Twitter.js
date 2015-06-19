(function() {

function Twitter(orientationStr, size) {
	this.Container_constructor();
	
	this.name = "twitter";
	
	this.smallTwitter = null;
	this.smallMediumTwitter = null;
	this.mediumTwitter = null;
	this.mediumBigTwitter = null;
	this.bigTwitter = null;
	
	this.smallTwitterOver = null;
	this.smallMediumTwitterOver = null;
	this.mediumTwitterOver = null;
	this.mediumBigTwitterOver = null;
	this.bigTwitterOver = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.setup();
}
var p = createjs.extend(Twitter, createjs.Container);


p.setup = function() {
	switch (size) {
		case "small":
			if (this.smallTwitter)
			{
				this.addBitmap(this.smallTwitter, this.smallTwitterOver, van.smallVan);
			}
			else
			{
				this.smallTwitter = new createjs.Bitmap("images/twitter34x27.png").set({name: "smallTwitter", cursor: "pointer"});
				this.smallTwitterOver = new createjs.Bitmap("images/twitterOver34x27.png").set({name: "smallTwitterOver", cursor: "pointer"});
				this.smallTwitterOver.visible = false;
				this.smallTwitter.image.onload = this.handleTwitterLoad;
			}
			break;
		case "smallMedium":
			if (this.smallMediumTwitter)
			{
				this.addBitmap(this.smallMediumTwitter, this.smallMediumTwitterOver, van.smallMediumVan);
			}
			else
			{
				this.smallMediumTwitter = new createjs.Bitmap("images/twitter51x41.png").set({name: "smallMediumTwitter", cursor: "pointer"});
				this.smallMediumTwitterOver = new createjs.Bitmap("images/twitterOver51x41.png").set({name: "smallMediumTwitterOver", cursor: "pointer"});
				this.smallMediumTwitterOver.visible = false;
				this.smallMediumTwitter.image.onload = this.handleTwitterLoad;
			}
			break;
		case "medium":
			if (this.mediumTwitter)
			{
				this.addBitmap(this.mediumTwitter, this.mediumTwitterOver, van.mediumVan);
			}
			else
			{
				this.mediumTwitter = new createjs.Bitmap("images/twitter68x54.png").set({name: "mediumTwitter", cursor: "pointer"});
				this.mediumTwitterOver = new createjs.Bitmap("images/twitterOver68x54.png").set({name: "mediumTwitterOver", cursor: "pointer"});
				this.mediumTwitterOver.visible = false;
				this.mediumTwitter.image.onload = this.handleTwitterLoad;
			}
			break;
		case "mediumBig":
			if (this.mediumBigTwitter)
			{
				this.addBitmap(this.mediumBigTwitter, this.mediumBigTwitterOver, van.mediumBigVan);
			}
			else
			{
				this.mediumBigTwitter = new createjs.Bitmap("images/twitter88x70.png").set({name: "mediumBigTwitter", cursor: "pointer"});
				this.mediumBigTwitterOver = new createjs.Bitmap("images/twitterOver88x70.png").set({name: "mediumBigTwitterOver", cursor: "pointer"});
				this.mediumBigTwitterOver.visible = false;
				this.mediumBigTwitter.image.onload = this.handleTwitterLoad;
			}
			break;
		case "large":
			if (this.bigTwitter)
			{
				this.addBitmap(this.bigTwitter, this.bigTwitterOver, van.bigVan);
			}
			else
			{
				this.bigTwitter = new createjs.Bitmap("images/twitter136x108.png").set({name: "bigTwitter", cursor: "pointer"});
				this.bigTwitterOver = new createjs.Bitmap("images/twitterOver136x108.png").set({name: "bigTwitterOver", cursor: "pointer"});
				this.bigTwitterOver.visible = false;
				this.bigTwitter.image.onload = this.handleTwitterLoad;
			}
			break;
	}
} ;

p.addBitmap = function (bitmap, bitmapOver, bitmapVan) {
	this.addChild(bitmap, bitmapOver);
	this.resizeIcon(bitmap, bitmapOver, bitmapVan);
	this.createButton(bitmap, bitmapOver);
} ;

p.handleTwitterLoad = function (event) {
	var twitter = van.getChildByName("twitter");
	
	switch (size) {
		case "small":
			twitter.addBitmap(twitter.smallTwitter, twitter.smallTwitterOver, van.smallVan);
			break;
		case "smallMedium":
			twitter.addBitmap(twitter.smallMediumTwitter, twitter.smallMediumTwitterOver, van.smallMediumVan);
			break;
		case "medium":
			twitter.addBitmap(twitter.mediumTwitter, twitter.mediumTwitterOver, van.mediumVan);
			break;
		case "mediumBig":
			twitter.addBitmap(twitter.mediumBigTwitter, twitter.mediumBigTwitterOver, van.mediumBigVan);
			break;
		case "large":
			twitter.addBitmap(twitter.bigTwitter, twitter.bigTwitterOver, van.bigVan);
			break;
	}
} ;

p.resizeIcon = function (bitmap, bitmapOver, bitmapVan) {		
	if(orientationStr == 'Landscape')
	{
		bitmap.x = bitmapVan.x + (44.64 * bitmapVan.image.width/100);
		bitmap.y = bitmapVan.y + (31.94 * bitmapVan.image.height/100);
		bitmap.rotation = 0;
		
		bitmapOver.x = bitmapVan.x + (44.64 * bitmapVan.image.width/100);
		bitmapOver.y = bitmapVan.y + (31.94 * bitmapVan.image.height/100);
		bitmapOver.rotation = 0;
	}
	else
	{
		bitmap.x = bitmapVan.x + (41.12 * bitmapVan.image.width/100);
		bitmap.y = bitmapVan.y + (43.28 * bitmapVan.image.height/100);
		bitmap.rotation = 9;
		
		bitmapOver.x = bitmapVan.x + (41.12 * bitmapVan.image.width/100);
		bitmapOver.y = bitmapVan.y + (43.28 * bitmapVan.image.height/100);
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
	window.location = "https://twitter.com/pezglobobb";
} ;	

window.Twitter = createjs.promote(Twitter, "Container");
}());