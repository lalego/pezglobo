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
					smallVan = new createjs.Bitmap("images/furgoneta285x168.jpg");
					smallVan.image.onload = this.handleVanLoad;
					break;
				case "smallMedium":
					smallMediumVan = new createjs.Bitmap("images/furgoneta427x251.jpg");
					smallMediumVan.image.onload = this.handleVanLoad;
					break;
				case "medium":
					mediumVan = new createjs.Bitmap("images/furgoneta569x335.jpg");
					mediumVan.image.onload = this.handleVanLoad;
					break;
				case "mediumBig":
					mediumBigVan = new createjs.Bitmap("images/furgoneta740x436.jpg");
					mediumBigVan.image.onload = this.handleVanLoad;
					break;
				case "large":
					bigVan = new createjs.Bitmap("images/furgoneta1138x670.jpg");
					bigVan.image.onload = this.handleVanLoad;
					break;
			}
} ;

p.handleVanLoad = function (event) {
	switch (size) {
		case "small":
			content.addChild(smallVan);
			handleImageLoad();
			break;
		case "smallMedium":
			content.addChild(smallMediumVan);
			handleImageLoad();
			break;
		case "medium":
			content.addChild(mediumVan);
			handleImageLoad();
			break;
		case "mediumBig":
			content.addChild(mediumBigVan);
			handleImageLoad();
			break;
		case "large":
			content.addChild(bigVan);
			handleImageLoad();
			break;
	}
} ;

p.handleVerticalLoad = function (event) {
	if(orientationStr == "Landscape")
	{
		
	}
	else if(orientationStr == "Portrait")
	{
	
	}
} ;

p.changeHorizontal = function () {		
	
}

p.changeVertical = function () {
	
}

p.changeContainer = function (van) {		
	
}

window.Van = createjs.promote(Van, "Container");
}());