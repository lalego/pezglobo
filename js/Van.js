(function() {

function Van(orientationStr, size) {
	this.Container_constructor();
	
	this.smallVan = null;
	this.smallMediumVan = null;
	this.mediumVan = null;
	this.mediumBigVan = null;
	this.bigVan = null;
	
	this.facebook = null;
	this.twitter = null;
	this.instangram = null;
	this.youtube = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.setup();
}
var p = createjs.extend(Van, createjs.Container);


p.setup = function() {
	switch (size) {
		case "small":
			if (this.smallVan)
			{
				this.addBitmap(this.smallVan);
			}
			else
			{
				this.smallVan = new createjs.Bitmap("images/furgoneta285x168.png");
				this.smallVan.image.onload = this.handleVanLoad;
				this.smallVan.name = "smallVan";
			}
			break;
		case "smallMedium":
			if (this.smallMediumVan)
			{
				this.addBitmap(this.smallMediumVan);
			}
			else
			{
				this.smallMediumVan = new createjs.Bitmap("images/furgoneta427x251.png");
				this.smallMediumVan.image.onload = this.handleVanLoad;
				this.smallMediumVan.name = "smallMediumVan";
			}
			break;
		case "medium":
			if (this.mediumVan)
			{
				this.addBitmap(this.mediumVan);
			}
			else
			{
				this.mediumVan = new createjs.Bitmap("images/furgoneta569x335.png");
				this.mediumVan.image.onload = this.handleVanLoad;
				this.mediumVan.name = "mediumVan";
			}
			break;
		case "mediumBig":
			if (this.mediumBigVan)
			{
				this.addBitmap(this.mediumBigVan);
			}
			else
			{
				this.mediumBigVan = new createjs.Bitmap("images/furgoneta740x436.png");
				this.mediumBigVan.image.onload = this.handleVanLoad;
				this.mediumBigVan.name = "mediumBigVan";
			}
			break;
		case "large":
			if (this.bigVan)
			{
				this.addBitmap(this.bigVan);
			}
			else
			{
				this.bigVan = new createjs.Bitmap("images/furgoneta1138x670.png");
				this.bigVan.image.onload = this.handleVanLoad;
				this.bigVan.name = "bigVan";
			}
			break;
	}
} ;

p.addBitmap = function (bitmap) {
	this.addChild(bitmap);
	this.resizeIcon(bitmap);
	this.createWindows();
} ;

p.handleVanLoad = function (event) {
	switch (size) {
		case "small":
			van.addBitmap(van.smallVan);
			break;
		case "smallMedium":
			van.addBitmap(van.smallMediumVan);
			break;
		case "medium":
			van.addBitmap(van.mediumVan);
			break;
		case "mediumBig":
			van.addBitmap(van.mediumBigVan);
			break;
		case "large":
			van.addBitmap(van.bigVan);
			break;
	}
} ;

p.createWindows = function () {		
	this.createFacebook();
	this.createTwitter();
	this.createInstangram();
	//this.createYoutube();
} ;

p.createFacebook = function () {		
	if (! this.facebook)
	{
		this.facebook = new Facebook(orientationStr, size); 
	}
	else
	{
		this.facebook.removeAllChildren();
		this.facebook.setup();
	}
	
	this.addChild(this.facebook);
} ;

p.createTwitter = function () {		
	if (! this.twitter)
	{
		this.twitter = new Twitter(orientationStr, size); 
	}
	else
	{
		this.twitter.removeAllChildren();
		this.twitter.setup();
	}
	
	this.addChild(this.twitter);
} ;

p.createInstangram = function () {		
	if (! this.instangram)
	{
		this.instangram = new Instangram(orientationStr, size); 
	}
	else
	{
		this.instangram.removeAllChildren();
		this.instangram.setup();
	}
	
	this.addChild(this.instangram);
} ;

p.createYoutube = function () {		
	if (! this.youtube)
	{
		this.youtube = new Youtube(orientationStr, size); 
	}
	else
	{
		this.youtube.removeAllChildren();
		this.youtube.setup();
	}
} ;

p.resizeIcon = function (bitmap) {		
	if(orientationStr == 'Landscape')
	{
		bitmap.x = 349.8;
		bitmap.y = 304.9;
		bitmap.rotation = 0;
	}
	else
	{
		bitmap.x = 49.3;
		bitmap.y = 129.6;
		bitmap.rotation = 9;
	}
} ;

window.Van = createjs.promote(Van, "Container");
}());