(function() {

function Twitter(orientationStr, size) {
	this.Container_constructor();
	
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
					smallTwitter = new createjs.Bitmap("images/furgoneta285x168.png");
					smallTwitter.image.onload = this.handleTwitterLoad;
					break;
				case "smallMedium":
					smallMediumTwitter = new createjs.Bitmap("images/furgoneta427x251.png");
					smallMediumTwitter.image.onload = this.handleTwitterLoad;
					break;
				case "medium":
					mediumTwitter = new createjs.Bitmap("images/furgoneta569x335.png");
					mediumTwitter.image.onload = this.handleTwitterLoad;
					break;
				case "mediumBig":
					mediumBigTwitter = new createjs.Bitmap("images/furgoneta740x436.png");
					mediumBigTwitter.image.onload = this.handleTwitterLoad;
					break;
				case "large":
					bigTwitter = new createjs.Bitmap("images/furgoneta1138x670.png");
					bigTwitter.image.onload = this.handleTwitterLoad;
					break;
			}
} ;

p.handleTwitterLoad = function (event) {
	switch (size) {
		case "small":
			twitter.addChild(smallTwitter);
			twitter.resizeIcons();
			break;
		case "smallMedium":
			twitter.addChild(smallMediumTwitter);
			twitter.resizeIcons();
			break;
		case "medium":
			twitter.addChild(mediumTwitter);
			twitter.resizeIcons();
			break;
		case "mediumBig":
			twitter.addChild(mediumBigTwitter);
			twitter.resizeIcons();
			break;
		case "large":
			twitter.addChild(bigTwitter);
			twitter.resizeIcons();
			break;
	}
} ;

p.resizeIcons = function () {
	switch (size) {
		case "small":
			this.resizeIcon(this.smallTwitter, 53.9, 64.2, 43.1, 29.3);
			break;
		case "smallMedium":
			this.resizeIcon(smallMediumTwitter, 53.9, 64.2, 43.1, 29.3);
			break;
		case "medium":
			this.resizeIcon(this.mediumTwitter, 53.9, 64.2, 43.1, 29.3);
			break;
		case "mediumBig":
			this.resizeIcon(this.mediumBigTwitter, 53.9, 64.2, 43.1, 29.3);
			break;
		case "large":
			this.resizeIcon(this.bigTwitter, 53.9, 64.2, 43.1, 29.3);
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

p.changeContainer = function (twitter) {		
	
}

window.Twitter = createjs.promote(Twitter, "Container");
}());