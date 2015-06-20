(function() {

function Rrd(orientationStr, size) {
	this.Container_constructor();
	
	this.smallRrd = null;
	this.smallMediumRrd = null;
	this.mediumRrd = null;
	this.mediumBigRrd = null;
	this.bigRrd = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.unfloatY = null;
	this.unfloatX = null;
	
	this.setup();
}
var p = createjs.extend(Rrd, createjs.Container);


p.setup = function() {
	switch (size) {
		case "small":
			if (this.smallRrd)
			{
				this.addBitmap(this.smallRrd);
			}
			else
			{
				this.smallRrd = new createjs.Bitmap("images/rrd6x63.png").set({name: "smallRrd", cursor: "pointer"});
				this.smallRrd.image.onload = this.handleRrdLoad;
			}
			break;
		case "smallMedium":
			if (this.smallMediumRrd)
			{
				this.addBitmap(this.smallMediumRrd);
			}
			else
			{
				this.smallMediumRrd = new createjs.Bitmap("images/rrd9x95.png").set({name: "smallMediumRrd", cursor: "pointer"});
				this.smallMediumRrd.image.onload = this.handleRrdLoad;
			}
			break;
		case "medium":
			if (this.mediumRrd)
			{
				this.addBitmap(this.mediumRrd);
			}
			else
			{
				this.mediumRrd = new createjs.Bitmap("images/rrd.png").set({name: "mediumRrd", cursor: "pointer"});
				this.mediumRrd.image.onload = this.handleRrdLoad;
			}
			break;
		case "mediumBig":
			if (this.mediumBigRrd)
			{
				this.addBitmap(this.mediumBigRrd);
			}
			else
			{
				this.mediumBigRrd = new createjs.Bitmap("images/rrd16x168.png").set({name: "mediumBigRrd", cursor: "pointer"});
				this.mediumBigRrd.image.onload = this.handleRrdLoad;
			}
			break;
		case "large":
			if (this.bigRrd)
			{
				this.addBitmap(this.bigRrd);
			}
			else
			{
				this.bigRrd = new createjs.Bitmap("images/rrd24x252.png").set({name: "bigRrd", cursor: "pointer"});
				this.bigRrd.image.onload = this.handleRrdLoad;
			}
			break;
	}
} ;

p.addBitmap = function (bitmap) {
	this.addChild(bitmap);
	this.resizeIcon(bitmap);
	this.createLink(bitmap);
	this.floatIcon();
} ;

p.handleRrdLoad = function (event) {
	switch (size) {
		case "small":
			rrd.addBitmap(rrd.smallRrd);
			break;
		case "smallMedium":
			rrd.addBitmap(rrd.smallMediumRrd);
			break;
		case "medium":
			rrd.addBitmap(rrd.mediumRrd);
			break;
		case "mediumBig":
			rrd.addBitmap(rrd.mediumBigRrd);
			break;
		case "large":
			rrd.addBitmap(rrd.bigRrd);
			break;
	}
} ;

p.resizeIcon = function (bitmap) {		
	if(orientationStr == 'Landscape')
	{
		bitmap.x = 98.02 * calculatedWidth/100;
		bitmap.y = 63.25 * calculatedHeight/100;
	}
	else
	{
		bitmap.x = 97.14 * calculatedWidth/100;
		bitmap.y = 78.58 * calculatedHeight/100;
	}
	
	this.unfloatX = bitmap.x;
	this.unfloatY = bitmap.y;
} ;

p.createLink = function (bitmap) {
	bitmap.addEventListener("mousedown", this.handleMousedown);
} ;

p.handleMousedown = function (evt) {
	window.location = "https://www.behance.net/RamonRoselloDesign";
} ;	

p.floatIcon = function () {
	var bitmap = this.getChildAt(0);
	var newHeight = screenHeight - calculatedHeight; 
	if(orientationStr == 'Landscape')
	{
		//bitmap.y = bitmap.y + centerY;
	}
	else
	{
		bitmap.x = this.unfloatX - centerX;
		/*bitmap.x = 6.86 * calculatedWidth/100;
		bitmap.y = 13.5 * calculatedHeight/100;
		bitmap.rotation = 9;*/
	}
} ;

window.Rrd = createjs.promote(Rrd, "Container");
}());