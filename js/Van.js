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
			this.resizeIcon(smallVan, 36.44, 47.64, 15, 13.5);
			break;
		case "smallMedium":
			this.resizeIcon(smallMediumVan, 36.44, 47.64, 15, 13.5);
			break;
		case "medium":
			this.resizeIcon(mediumVan, 36.44, 47.64, 15, 13.5);
			break;
		case "mediumBig":
			this.resizeIcon(mediumBigVan, 36.44, 47.64, 15, 13.5);
			break;
		case "large":
			this.resizeIcon(bigVan, 36.44, 47.64, 15, 13.5);
			break;
	}
} ;

p.resizeIcon = function (bitmap, horizontalWidth, horizontalHeight, verticalWidth, verticalHeight) {		
	var bitmapWidth = 427;
	var bitmapHeight = 251

	//bitmap.scaleX = scale;
	//bitmap.scaleY = scale;
	
	if(orientationStr == 'Landscape')
	{
		var totalX = (calculatedWidth * horizontalWidth/100);
		var totalY = (calculatedHeight * horizontalHeight/100);
		
		var prX = 349.8;
		var prY = 304.9;
		
		bitmap.x = totalX;
		bitmap.y = totalY;
		bitmap.rotation = 0;
	}
	else
	{
		bitmap.x = (calculatedWidth * verticalWidth/100);
		bitmap.y = (calculatedHeight * verticalHeight/100);
		bitmap.rotation = 9;
	}

}

p.changeVertical = function () {
	
}

p.changeContainer = function (van) {		
	
}

window.Van = createjs.promote(Van, "Container");
}());