(function() {

function Instangram(orientationStr, size) {
	this.Container_constructor();
	
	this.smallInstangram = null;
	this.smallMediumInstangram = null;
	this.mediumInstangram = null;
	this.mediumBigInstangram = null;
	this.bigInstangram = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.setup();
}
var p = createjs.extend(Instangram, createjs.Container);


p.setup = function() {
	switch (size) {
				case "small":
					smallInstangram = new createjs.Bitmap("images/furgoneta285x168.png");
					smallInstangram.image.onload = this.handleInstangramLoad;
					break;
				case "smallMedium":
					smallMediumInstangram = new createjs.Bitmap("images/furgoneta427x251.png");
					smallMediumInstangram.image.onload = this.handleInstangramLoad;
					break;
				case "medium":
					mediumInstangram = new createjs.Bitmap("images/furgoneta569x335.png");
					mediumInstangram.image.onload = this.handleInstangramLoad;
					break;
				case "mediumBig":
					mediumBigInstangram = new createjs.Bitmap("images/furgoneta740x436.png");
					mediumBigInstangram.image.onload = this.handleInstangramLoad;
					break;
				case "large":
					bigInstangram = new createjs.Bitmap("images/furgoneta1138x670.png");
					bigInstangram.image.onload = this.handleInstangramLoad;
					break;
			}
} ;

p.handleInstangramLoad = function (event) {
	switch (size) {
		case "small":
			instangram.addChild(smallInstangram);
			instangram.resizeIcons();
			break;
		case "smallMedium":
			instangram.addChild(smallMediumInstangram);
			instangram.resizeIcons();
			break;
		case "medium":
			instangram.addChild(mediumInstangram);
			instangram.resizeIcons();
			break;
		case "mediumBig":
			instangram.addChild(mediumBigInstangram);
			instangram.resizeIcons();
			break;
		case "large":
			instangram.addChild(bigInstangram);
			instangram.resizeIcons();
			break;
	}
} ;

p.resizeIcons = function () {
	switch (size) {
		case "small":
			this.resizeIcon(this.smallInstangram, 53.9, 64.2, 43.1, 29.3);
			break;
		case "smallMedium":
			this.resizeIcon(smallMediumInstangram, 53.9, 64.2, 43.1, 29.3);
			break;
		case "medium":
			this.resizeIcon(this.mediumInstangram, 53.9, 64.2, 43.1, 29.3);
			break;
		case "mediumBig":
			this.resizeIcon(this.mediumBigInstangram, 53.9, 64.2, 43.1, 29.3);
			break;
		case "large":
			this.resizeIcon(this.bigInstangram, 53.9, 64.2, 43.1, 29.3);
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

p.changeContainer = function (instangram) {		
	
}

window.Instangram = createjs.promote(Instangram, "Container");
}());