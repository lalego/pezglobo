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
	this.skull = null;
	
	this.unfloatY = null;
	this.unfloatX = null;
	
	this.bottom = null;
	
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
	this.floatIcon();
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
	this.createYoutube();
	this.createSkull();
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
	
	this.addChild(this.youtube);
} ;

p.createSkull = function () {		
	if (! this.skull)
	{
		this.skull = new Skull(orientationStr, size); 
	}
	else
	{
		this.skull.removeAllChildren();
		this.skull.setup();
	}
	
	this.addChild(this.skull);
} ;

p.resizeIcon = function (bitmap) {
	if(orientationStr == 'Landscape')
	{
		bitmap.x = 36.5 * calculatedWidth/100;
		bitmap.y = 47.64 * calculatedHeight/100;
		bitmap.rotation = 0;
	}
	else
	{
		bitmap.x = 12 * calculatedWidth/100;
		bitmap.y = 13.5 * calculatedHeight/100;
		bitmap.rotation = 9;
	}
	
	this.unfloatX = bitmap.x;
	this.unfloatY = bitmap.y;
	
	this.bottom = calculatedHeight - bitmap.y;
} ;

p.floatIcon = function () {
	var bitmap = this.getChildAt(0);
	/*var newHeight = screenHeight - imageHeight; 
	var newHeight2 = this.unfloatY + centerY/2; 
	var newHeight3 = imageHeight - this.unfloatY; */
	if(orientationStr == 'Landscape')
	{
		bitmap.y = this.unfloatY + centerY/2;
	}
	else
	{
		/*bitmap.x = 6.86 * calculatedWidth/100;
		bitmap.y = 13.5 * calculatedHeight/100;
		bitmap.rotation = 9;*/
	}
	
	this.floatWindows();
} ;

p.floatWindows = function () {
	var bitmap = this.getChildAt(0);
	if (this.facebook)
	{
		var facebookBitmap = this.facebook.getChildAt(0);
		var facebookOverBitmap = this.facebook.getChildAt(1);
		this.facebook.resizeIcon(facebookBitmap, facebookOverBitmap, bitmap);
	}
	
	if (this.twitter)
	{
		var twitterBitmap = this.twitter.getChildAt(0);
		var twitterOverBitmap = this.twitter.getChildAt(0);
		this.twitter.resizeIcon(twitterBitmap, twitterOverBitmap, bitmap);
	}
	
	if (this.instangram)
	{
		var instangramBitmap = this.instangram.getChildAt(0);
		var instangramOverBitmap = this.instangram.getChildAt(0);
		this.instangram.resizeIcon(instangramBitmap, instangramOverBitmap, bitmap);
	}
	
	if (this.youtube)
	{
		var youtubeBitmap = this.youtube.getChildAt(0);
		var youtubeOverBitmap = this.youtube.getChildAt(0);
		this.youtube.resizeIcon(youtubeBitmap, youtubeOverBitmap, bitmap);
	}
	
	if (this.skull)
	{
		var skullBitmap = this.skull.getChildAt(0);
		var skullOverBitmap = this.skull.getChildAt(0);
		this.skull.resizeIcon(skullBitmap, skullOverBitmap, bitmap);
	}
} ;

window.Van = createjs.promote(Van, "Container");
}());