(function() {

function Twitter(orientationStr, size) {
	this.Container_constructor();
	
	this.name = "twitter";
	
	this.smallTwitter = null;
	this.smallMediumTwitter = null;
	this.mediumTwitter = null;
	this.mediumBigTwitter = null;
	this.bigTwitter = null;
	
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
				this.addBitmap(this.smallTwitter, van.smallVan);
			}
			else
			{
				this.smallTwitter = new createjs.Bitmap("images/twitter34x27.png");
				this.smallTwitter.image.onload = this.handleTwitterLoad;
				this.smallTwitter.name = "smallTwitter";
			}
			break;
		case "smallMedium":
			if (this.smallMediumTwitter)
			{
				this.addBitmap(this.smallMediumTwitter, van.smallMediumVan);
			}
			else
			{
				this.smallMediumTwitter = new createjs.Bitmap("images/twitter51x41.png");
				this.smallMediumTwitter.image.onload = this.handleTwitterLoad;
				this.smallMediumTwitter.name = "smallMediumTwitter";
			}
			break;
		case "medium":
			if (this.mediumTwitter)
			{
				this.addBitmap(this.mediumTwitter, van.mediumVan);
			}
			else
			{
				this.mediumTwitter = new createjs.Bitmap("images/twitter68x54.png");
				this.mediumTwitter.image.onload = this.handleTwitterLoad;
				this.mediumTwitter.name = "mediumTwitter";
			}
			break;
		case "mediumBig":
			if (this.mediumBigTwitter)
			{
				this.addBitmap(this.mediumBigTwitter, van.mediumBigVan);
			}
			else
			{
				this.mediumBigTwitter = new createjs.Bitmap("images/twitter88x70.png");
				this.mediumBigTwitter.image.onload = this.handleTwitterLoad;
				this.mediumBigTwitter.name = "mediumBigTwitter";
			}
			break;
		case "large":
			if (this.bigTwitter)
			{
				this.addBitmap(this.bigTwitter, van.bigVan);
			}
			else
			{
				this.bigTwitter = new createjs.Bitmap("images/twitter136x108.png");
				this.bigTwitter.image.onload = this.handleTwitterLoad;
				this.bigTwitter.name = "bigTwitter";
			}
			break;
	}
} ;

p.addBitmap = function (bitmap, bitmapVan) {
	this.addChild(bitmap);
	this.resizeIcon(bitmap, bitmapVan);
} ;

p.handleTwitterLoad = function (event) {
	var twitter = van.getChildByName("twitter");
	
	switch (size) {
		case "small":
			twitter.addBitmap(twitter.smallFacebook, van.smallVan);
			break;
		case "smallMedium":
			twitter.addBitmap(twitter.smallMediumTwitter, van.smallMediumVan);
			break;
		case "medium":
			twitter.addBitmap(twitter.mediumTwitter, van.mediumVan);
			break;
		case "mediumBig":
			twitter.addBitmap(twitter.mediumBigTwitter, van.mediumBigVan);
			break;
		case "large":
			twitter.addBitmap(twitter.bigTwitter, van.bigVan);
			break;
	}
} ;

p.resizeIcon = function (bitmap, bitmapVan) {		
	if(orientationStr == 'Landscape')
	{
		bitmap.x = bitmapVan.x + 254;
		bitmap.y = bitmapVan.y + 107;
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

p.changeContainer = function (twitter) {		
	
}

window.Twitter = createjs.promote(Twitter, "Container");
}());