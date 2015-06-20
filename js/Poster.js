(function() {

function Poster(orientationStr, size) {
	this.Container_constructor();
	
	this.smallPoster = null;
	this.smallMediumPoster = null;
	this.mediumPoster = null;
	this.mediumBigPoster = null;
	this.bigPoster = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.unfloatY = null;
	this.unfloatX = null;
	
	this.setup();
}
var p = createjs.extend(Poster, createjs.Container);


p.setup = function() {
	switch (size) {
		case "small":
			if (this.smallPoster)
			{
				this.addBitmap(this.smallPoster);
			}
			else
			{
				this.smallPoster = new createjs.Bitmap("images/letreroflecha125x125.png");
				this.smallPoster.image.onload = this.handlePosterLoad;
				this.smallPoster.name = "smallPoster";
			}
			break;
		case "smallMedium":
			if (this.smallMediumPoster)
			{
				this.addBitmap(this.smallMediumPoster);
			}
			else
			{
				this.smallMediumPoster = new createjs.Bitmap("images/letreroflecha188x188.png");
				this.smallMediumPoster.image.onload = this.handlePosterLoad;
				this.smallMediumPoster.name = "smallMediumPoster";
			}
			break;
		case "medium":
			if (this.mediumPoster)
			{
				this.addBitmap(this.mediumPoster);
			}
			else
			{
				this.mediumPoster = new createjs.Bitmap("images/letreroflecha250x250.png");
				this.mediumPoster.image.onload = this.handlePosterLoad;
				this.mediumPoster.name = "mediumPoster";
			}
			break;
		case "mediumBig":
			if (this.mediumBigPoster)
			{
				this.addBitmap(this.mediumBigPoster);
			}
			else
			{
				this.mediumBigPoster = new createjs.Bitmap("images/letreroflecha325x325.png");
				this.mediumBigPoster.image.onload = this.handlePosterLoad;
				this.mediumBigPoster.name = "mediumPoster";
			}
			break;
		case "large":
			if (this.bigPoster)
			{
				this.addBitmap(this.bigPoster);
			}
			else
			{
				this.bigPoster = new createjs.Bitmap("images/letreroflecha500x500.png");
				this.bigPoster.image.onload = this.handlePosterLoad;
				this.bigPoster.name = "bigPoster";
			}
			break;
	}
} ;

p.addBitmap = function (bitmap) {
	this.addChild(bitmap);
	this.resizeIcon(bitmap);
	this.floatIcon();
} ;

p.handlePosterLoad = function (event) {
	switch (size) {
		case "small":
			poster.addBitmap(poster.smallPoster);
			break;
		case "smallMedium":
			poster.addBitmap(poster.smallMediumPoster);
			break;
		case "medium":
			poster.addBitmap(poster.mediumPoster);
			break;
		case "mediumBig":
			poster.addBitmap(poster.mediumBigPoster);
			break;
		case "large":
			poster.addBitmap(poster.bigPoster);
			break;
	}
} ;

p.resizeIcon = function (bitmap) {		
	if(orientationStr == 'Landscape')
	{
		bitmap.x = 50.21 * calculatedWidth/100;
		bitmap.y = 20.94 * calculatedHeight/100;
	}
	else
	{
		bitmap.x = 37.5 * calculatedWidth/100;
		bitmap.y = 1.05 * calculatedHeight/100;
	}
	
	this.unfloatX = bitmap.x;
	this.unfloatY = bitmap.y;
} ;

p.floatIcon = function () {
	var bitmap = this.getChildAt(0);
	var newHeight = screenHeight - calculatedHeight; 
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
} ;

window.Poster = createjs.promote(Poster, "Container");
}());