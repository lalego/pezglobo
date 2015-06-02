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
					smallSun = new createjs.Bitmap("images/sol62x68.png");
					smallSun.image.onload = this.handleSunLoad;
					break;
				case "smallMedium":
					smallMediumSun = new createjs.Bitmap("images/sol93x102.png");
					smallMediumSun.image.onload = this.handleSunLoad;
					break;
				case "medium":
					mediumSun = new createjs.Bitmap("images/sol124x136.png");
					mediumSun.image.onload = this.handleSunLoad;
					break;
				case "mediumBig":
					mediumBigSun = new createjs.Bitmap("images/sol161x177.png");
					mediumBigSun.image.onload = this.handleSunLoad;
					break;
				case "large":
					bigSun = new createjs.Bitmap("images/sol248x272.png");
					bigSun.image.onload = this.handleSunLoad;
					break;
			}
} ;

p.handleSunLoad = function (event) {
	switch (size) {
		case "small":
			sun.addChild(smallSun);
			sun.resizeIcon(smallSun);
			break;
		case "smallMedium":
			sun.addChild(smallMediumSun);
			sun.resizeIcon(smallMediumSun);
			break;
		case "medium":
			sun.addChild(mediumSun);
			sun.resizeIcon(mediumSun);
			break;
		case "mediumBig":
			sun.addChild(mediumBigSun);
			sun.resizeIcon(mediumBigSun);
			break;
		case "large":
			sun.addChild(bigSun);
			sun.resizeIcon(bigSun);
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

p.changeVertical = function () {
	
}

p.changeContainer = function (sun) {		
	
}

window.Sun = createjs.promote(Sun, "Container");
}());