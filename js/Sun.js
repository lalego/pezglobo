(function() {

function Sun(orientationStr, size) {
	this.Container_constructor();
	
	this.smallSun = null;
	this.smallMediumSun = null;
	this.mediumSun = null;
	this.mediumBigSun = null;
	this.bigSun = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.setup();
}
var p = createjs.extend(Sun, createjs.Container);


p.setup = function() {
	switch (size) {
		case "small":
			if (this.smallSun)
			{
				this.addBitmap(this.smallSun);
			}
			else
			{
				this.smallSun = new createjs.Bitmap("images/sol62x68.png");
				this.smallSun.image.onload = this.handleSunLoad;
				this.smallSun.name = "smallSun";
			}
			break;
		case "smallMedium":
			if (this.smallMediumSun)
			{
				this.addBitmap(this.smallMediumSun);
			}
			else
			{
				this.smallMediumSun = new createjs.Bitmap("images/sol93x102.png");
				this.smallMediumSun.image.onload = this.handleSunLoad;
				this.smallMediumSun.name = "smallMediumSun";
			}
			break;
		case "medium":
			if (this.mediumSun)
			{
				this.addBitmap(this.mediumSun);
			}
			else
			{
				this.mediumSun = new createjs.Bitmap("images/sol124x136.png");
				this.mediumSun.image.onload = this.handleSunLoad;
				this.mediumSun.name = "mediumSun";
			}
			break;
		case "mediumBig":
			if (this.mediumBigSun)
			{
				this.addBitmap(this.mediumBigSun);
			}
			else
			{
				this.mediumBigSun = new createjs.Bitmap("images/sol161x177.png");
				this.mediumBigSun.image.onload = this.handleSunLoad;
				this.mediumBigSun.name = "mediumSun";
			}
			break;
		case "large":
			if (this.bigSun)
			{
				this.addBitmap(this.bigSun);
			}
			else
			{
				this.bigSun = new createjs.Bitmap("images/sol248x272.png");
				this.bigSun.image.onload = this.handleSunLoad;
				this.bigSun.name = "bigSun";
			}
			break;
	}
} ;

p.addBitmap = function (bitmap) {
	this.addChild(bitmap);
	this.resizeIcon(bitmap);
} ;

p.handleSunLoad = function (event) {
	switch (size) {
		case "small":
			sun.addBitmap(sun.smallSun);
			break;
		case "smallMedium":
			sun.addBitmap(sun.smallMediumSun);
			break;
		case "medium":
			sun.addBitmap(sun.mediumSun);
			break;
		case "mediumBig":
			sun.addBitmap(sun.mediumBigSun);
			break;
		case "large":
			sun.addBitmap(sun.bigSun);
			break;
	}
} ;

p.resizeIcon = function (bitmap) {		
	if(orientationStr == 'Landscape')
	{
		bitmap.x = 837;
		bitmap.y = 0;
		bitmap.scaleX = 1;
	}
	else
	{
		bitmap.x = 62;
		bitmap.y = 0;
		bitmap.scaleX = -1;
	}

}

window.Sun = createjs.promote(Sun, "Container");
}());