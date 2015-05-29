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
					smallSun = new createjs.Bitmap("images/furgoneta285x168.png");
					smallSun.image.onload = this.handleSunLoad;
					break;
				case "smallMedium":
					smallMediumSun = new createjs.Bitmap("images/furgoneta427x251.png");
					smallMediumSun.image.onload = this.handleSunLoad;
					break;
				case "medium":
					mediumSun = new createjs.Bitmap("images/furgoneta569x335.png");
					mediumSun.image.onload = this.handleSunLoad;
					break;
				case "mediumBig":
					mediumBigSun = new createjs.Bitmap("images/furgoneta740x436.png");
					mediumBigSun.image.onload = this.handleSunLoad;
					break;
				case "large":
					bigSun = new createjs.Bitmap("images/furgoneta1138x670.png");
					bigSun.image.onload = this.handleSunLoad;
					break;
			}
} ;

p.handleSunLoad = function (event) {
	switch (size) {
		case "small":
			sun.addChild(smallSun);
			sun.resizeIcons();
			break;
		case "smallMedium":
			sun.addChild(smallMediumSun);
			sun.resizeIcons();
			break;
		case "medium":
			sun.addChild(mediumSun);
			sun.resizeIcons();
			break;
		case "mediumBig":
			sun.addChild(mediumBigSun);
			sun.resizeIcons();
			break;
		case "large":
			sun.addChild(bigSun);
			sun.resizeIcons();
			break;
	}
} ;

p.resizeIcons = function () {
	switch (size) {
		case "small":
			this.resizeIcon(this.smallSun, 53.9, 64.2, 43.1, 29.3);
			break;
		case "smallMedium":
			this.resizeIcon(smallMediumSun, 53.9, 64.2, 43.1, 29.3);
			break;
		case "medium":
			this.resizeIcon(this.mediumSun, 53.9, 64.2, 43.1, 29.3);
			break;
		case "mediumBig":
			this.resizeIcon(this.mediumBigSun, 53.9, 64.2, 43.1, 29.3);
			break;
		case "large":
			this.resizeIcon(this.bigSun, 53.9, 64.2, 43.1, 29.3);
			break;
	}
} ;

p.resizeIcon = function (bitmap, horizontalWidth, horizontalHeight, verticalWidth, verticalHeight) {		
	var bitmapWidth = 91;
	var bitmapHeight = 70;
	var screenWidth = window.innerWidth;
	var screenHeight = window.innerHeight;
	var scaleX = screenWidth / bitmapWidth;
	var scaleY = screenHeight / bitmapHeight;
	bitmap.scaleX = scale;
	bitmap.scaleY = scale;
	
	if(orientationStr == 'Landscape')
	{
		var scaledX = (calculatedWidth * horizontalWidth/100) * scale;
		var scaledY = (calculatedHeight * horizontalHeight/100) * scale;
		
		var recalculatedWidth = calculatedWidth + centerX/2;
		var recalculatedHeight = calculatedHeight + centerY/2;
		
		var totalX = (calculatedWidth * horizontalWidth/100);
		var totalY = (calculatedHeight * horizontalHeight/100);
		
		var recalculatedWidth = totalX + centerX;
		var recalculatedHeight = totalY + centerY;
		
		//var prX = 670;
		//var prY = 530;
		var prX = 670;
		var prY = 530;
		
		bitmap.x = totalX;
		bitmap.y = totalY;
		bitmap.rotation = 0;
	}
	else
	{
		bitmap.x = (calculatedWidth * verticalWidth/100) * scale; //276
		bitmap.y = (calculatedHeight * verticalHeight/100) * scale; //281
		bitmap.rotation = 9;
	}

}

p.changeVertical = function () {
	
}

p.changeContainer = function (sun) {		
	
}

window.Sun = createjs.promote(Sun, "Container");
}());