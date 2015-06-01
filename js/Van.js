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
			van.resizeIcon(smallVan);
			break;
		case "smallMedium":
			van.addChild(smallMediumVan);
			van.resizeIcon(smallMediumVan);
			break;
		case "medium":
			van.addChild(mediumVan);
			van.resizeIcon(mediumVan);
			break;
		case "mediumBig":
			van.addChild(mediumBigVan);
			van.resizeIcon(mediumBigVan);
			break;
		case "large":
			van.addChild(bigVan);
			van.resizeIcon(bigVan);
			break;
	}
} ;

p.resizeIcon = function (bitmap) {		
	if(orientationStr == 'Landscape')
	{
		bitmap.x = 349.8;
		bitmap.y = 304.9;
		bitmap.rotation = 0;
	}
	else
	{
		bitmap.x = 49.3;
		bitmap.y = 129.6;
		bitmap.rotation = 9;
	}

}

window.Van = createjs.promote(Van, "Container");
}());