(function() {

function Youtube(orientationStr, size) {
	this.Container_constructor();
	
	this.smallYoutube = null;
	this.smallMediumYoutube = null;
	this.mediumYoutube = null;
	this.mediumBigYoutube = null;
	this.bigYoutube = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.setup();
}
var p = createjs.extend(Youtube, createjs.Container);


p.setup = function() {
	switch (size) {
				case "small":
					smallYoutube = new createjs.Bitmap("images/furgoneta285x168.png");
					smallYoutube.image.onload = this.handleYoutubeLoad;
					break;
				case "smallMedium":
					smallMediumYoutube = new createjs.Bitmap("images/furgoneta427x251.png");
					smallMediumYoutube.image.onload = this.handleYoutubeLoad;
					break;
				case "medium":
					mediumYoutube = new createjs.Bitmap("images/furgoneta569x335.png");
					mediumYoutube.image.onload = this.handleYoutubeLoad;
					break;
				case "mediumBig":
					mediumBigYoutube = new createjs.Bitmap("images/furgoneta740x436.png");
					mediumBigYoutube.image.onload = this.handleYoutubeLoad;
					break;
				case "large":
					bigYoutube = new createjs.Bitmap("images/furgoneta1138x670.png");
					bigYoutube.image.onload = this.handleYoutubeLoad;
					break;
			}
} ;

p.handleYoutubeLoad = function (event) {
	switch (size) {
		case "small":
			youtube.addChild(smallYoutube);
			youtube.resizeIcons();
			break;
		case "smallMedium":
			youtube.addChild(smallMediumYoutube);
			youtube.resizeIcons();
			break;
		case "medium":
			youtube.addChild(mediumYoutube);
			youtube.resizeIcons();
			break;
		case "mediumBig":
			youtube.addChild(mediumBigYoutube);
			youtube.resizeIcons();
			break;
		case "large":
			youtube.addChild(bigYoutube);
			youtube.resizeIcons();
			break;
	}
} ;

p.resizeIcons = function () {
	switch (size) {
		case "small":
			this.resizeIcon(this.smallYoutube, 53.9, 64.2, 43.1, 29.3);
			break;
		case "smallMedium":
			this.resizeIcon(smallMediumYoutube, 53.9, 64.2, 43.1, 29.3);
			break;
		case "medium":
			this.resizeIcon(this.mediumYoutube, 53.9, 64.2, 43.1, 29.3);
			break;
		case "mediumBig":
			this.resizeIcon(this.mediumBigYoutube, 53.9, 64.2, 43.1, 29.3);
			break;
		case "large":
			this.resizeIcon(this.bigYoutube, 53.9, 64.2, 43.1, 29.3);
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

p.changeContainer = function (youtube) {		
	
}

window.Youtube = createjs.promote(Youtube, "Container");
}());