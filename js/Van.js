(function() {

function Van(orientationStr, size) {
	this.Container_constructor();
	
	this.smallVan = null;
	this.smallMediumVan = null;
	this.mediumVan = null;
	this.mediumBigVan = null;
	this.bigVan = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.setup();
}
var p = createjs.extend(Van, createjs.Container);


p.setup = function() {
	switch (size) {
				case "small":
					smallVan = new createjs.Bitmap("images/furgoneta285x168.png");
					smallVan.image.onload = this.handleVanLoad;
					break;
				case "smallMedium":
					smallMediumVan = new createjs.Bitmap("images/furgoneta427x251.png");
					smallMediumVan.image.onload = this.handleVanLoad;
					break;
				case "medium":
					mediumVan = new createjs.Bitmap("images/furgoneta569x335.png");
					mediumVan.image.onload = this.handleVanLoad;
					break;
				case "mediumBig":
					mediumBigVan = new createjs.Bitmap("images/furgoneta740x436.png");
					mediumBigVan.image.onload = this.handleVanLoad;
					break;
				case "large":
					bigVan = new createjs.Bitmap("images/furgoneta1138x670.png");
					bigVan.image.onload = this.handleVanLoad;
					break;
			}
} ;

p.handleVanLoad = function (event) {
	switch (size) {
		case "small":
			van.addChild(smallVan);
			van.resizeIcons();
			break;
		case "smallMedium":
			van.addChild(smallMediumVan);
			van.resizeIcons();
			break;
		case "medium":
			van.addChild(mediumVan);
			van.resizeIcons();
			break;
		case "mediumBig":
			van.addChild(mediumBigVan);
			van.resizeIcons();
			break;
		case "large":
			van.addChild(bigVan);
			van.resizeIcons();
			break;
	}
} ;

p.resizeIcons = function () {
	switch (size) {
		case "small":
			this.resizeIcon(this.smallVan, 53.9, 64.2, 43.1, 29.3);
			break;
		case "smallMedium":
			this.resizeIcon(smallMediumVan, 53.9, 64.2, 43.1, 29.3);
			break;
		case "medium":
			this.resizeIcon(this.mediumVan, 53.9, 64.2, 43.1, 29.3);
			break;
		case "mediumBig":
			this.resizeIcon(this.mediumBigVan, 53.9, 64.2, 43.1, 29.3);
			break;
		case "large":
			this.resizeIcon(this.bigVan, 53.9, 64.2, 43.1, 29.3);
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

p.changeContainer = function (van) {		
	
}

window.Van = createjs.promote(Van, "Container");
}());