(function() {

function Facebook(orientationStr, size) {
	this.Container_constructor();
	
	this.smallFacebook = null;
	this.smallMediumFacebook = null;
	this.mediumFacebook = null;
	this.mediumBigFacebook = null;
	this.bigFacebook = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.setup();
}
var p = createjs.extend(Facebook, createjs.Container);


p.setup = function() {
	switch (size) {
				case "small":
					smallFacebook = new createjs.Bitmap("images/facebook35x27.png");
					smallFacebook.image.onload = this.handleFacebookLoad;
					break;
				case "smallMedium":
					smallMediumFacebook = new createjs.Bitmap("images/facebook53x41.png");
					smallMediumFacebook.image.onload = this.handleFacebookLoad;
					break;
				case "medium":
					mediumFacebook = new createjs.Bitmap("images/facebook70x54.png");
					mediumFacebook.image.onload = this.handleFacebookLoad;
					break;
				case "mediumBig":
					mediumBigFacebook = new createjs.Bitmap("images/facebook91x70.png");
					mediumBigFacebook.image.onload = this.handleFacebookLoad;
					break;
				case "large":
					bigFacebook = new createjs.Bitmap("images/facebook140x108.png");
					bigFacebook.image.onload = this.handleFacebookLoad;
					break;
			}
} ;

p.handleFacebookLoad = function (event) {
	switch (size) {
		case "small":
			facebook.addChild(smallFacebook);
			facebook.resizeIcons();
			break;
		case "smallMedium":
			facebook.addChild(smallMediumFacebook);
			facebook.resizeIcons();
			break;
		case "medium":
			facebook.addChild(mediumFacebook);
			facebook.resizeIcons();
			break;
		case "mediumBig":
			facebook.addChild(mediumBigFacebook);
			facebook.resizeIcons();
			break;
		case "large":
			facebook.addChild(bigFacebook);
			facebook.resizeIcons();
			break;
	}
} ;

p.resizeIcons = function () {
	switch (size) {
		case "small":
			this.resizeIcon(this.smallFacebook, 53.9, 64.2, 43.1, 29.3);
			break;
		case "smallMedium":
			this.resizeIcon(smallMediumFacebook, 53.9, 64.2, 43.1, 29.3);
			break;
		case "medium":
			this.resizeIcon(this.mediumFacebook, 53.9, 64.2, 43.1, 29.3);
			break;
		case "mediumBig":
			this.resizeIcon(this.mediumBigFacebook, 53.9, 64.2, 43.1, 29.3);
			break;
		case "large":
			this.resizeIcon(this.bigFacebook, 53.9, 64.2, 43.1, 29.3);
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

p.changeContainer = function () {		
	
}

window.Facebook = createjs.promote(Facebook, "Container");
}());