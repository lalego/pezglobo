(function() {

function Background(orientationStr, size) {
	this.Container_constructor();
	
	this.smallHorizontal = null;
	this.smallMediumHorizontal = null;
	this.mediumHorizontal = null;
	this.mediumBigHorizontal = null;
	this.bigHorizontal = null;
	this.smallVertical = null;
	this.smallMediumVertical = null;
	this.mediumVertical = null;
	this.mediumBigVertical = null;
	this.bigVertical = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.setup();
}
var p = createjs.extend(Background, createjs.Container);


p.setup = function() {
	switch (size) {
		case "small":
			smallHorizontal = new createjs.Bitmap("images/horizontalv480x320.jpg");
			smallHorizontal.image.onload = this.handleHorizontalLoad;
	
			smallVertical = new createjs.Bitmap("images/verticalv320x480.jpg");
			smallVertical.image.onload = this.handleVerticalLoad;
			break;
		case "smallMedium":
			smallMediumHorizontal = new createjs.Bitmap("images/horizontalv720x480.jpg");
			smallMediumHorizontal.image.onload = this.handleHorizontalLoad;
			
			smallMediumVertical = new createjs.Bitmap("images/verticalv480x720.jpg");
			smallMediumVertical.image.onload = this.handleVerticalLoad;
			break;
		case "medium":
			mediumHorizontal = new createjs.Bitmap("images/horizontalv960x640.jpg");
			mediumHorizontal.image.onload = this.handleHorizontalLoad;
			
			mediumVertical = new createjs.Bitmap("images/verticalv640x960.jpg");
			mediumVertical.image.onload = this.handleVerticalLoad;
			break;
		case "mediumBig":
			mediumBigHorizontal = new createjs.Bitmap("images/horizontalv1248x832.jpg");
			mediumBigHorizontal.image.onload = this.handleHorizontalLoad;
	
			mediumBigVertical = new createjs.Bitmap("images/verticalv832x1248.jpg");
			mediumBigVertical.image.onload = this.handleVerticalLoad;
			break;
		case "large":
			bigHorizontal = new createjs.Bitmap("images/horizontalv1920x1280.jpg");
			bigHorizontal.image.onload = this.handleHorizontalLoad;
	
			bigVertical = new createjs.Bitmap("images/verticalv1240x1860.jpg");
			bigVertical.image.onload = this.handleVerticalLoad;
			break;
	}
} ;

p.handleHorizontalLoad = function (event) {
	if(orientationStr == "Landscape")
	{
		switch (size) {
			case "small":
				bg.addChild(smallHorizontal);
				createIcons();
				break;
			case "smallMedium":
				bg.addChild(smallMediumHorizontal);
				createIcons();
				break;
			case "medium":
				bg.addChild(mediumHorizontal);
				createIcons();
				break;
			case "mediumBig":
				bg.addChild(mediumBigHorizontal);
				createIcons();
				break;
			case "large":
				bg.addChild(bigHorizontal);
				createIcons();
				break;
		}
	}
} ;

p.handleVerticalLoad = function (event) {
	if(orientationStr == "Portrait")
	{
		switch (size) {
			case "small":
				bg.addChild(smallVertical);
				createIcons();
				break;
			case "smallMedium":
				bg.addChild(smallMediumVertical);
				createIcons();
				break;
			case "medium":
				bg.addChild(mediumVertical);
				createIcons();
				break;
			case "mediumBig":
				bg.addChild(mediumBigVertical);
				createIcons();
				break;
			case "large":
				bg.addChild(bigVertical);
				createIcons();
				break;
		}
	}
} ;

p.changeHorizontal = function () {		
	switch (size) {
			case "small":
				console.log("cambio a horizontal peque�o");
				this.changeContainer(this.smallHorizontal);
				break;
			case "smallMedium":
				console.log("cambio a horizontal medio peque�o");
				this.changeContainer(this.smallMediumHorizontal);
				break;
			case "medium":
				console.log("cambio a horizontal medio");
				this.changeContainer(this.mediumHorizontal);
				break;
			case "mediumBig":
				console.log("cambio a horizontal medio grande");
				this.changeContainer(this.mediumBigHorizontal);
				break;
			case "large":
				console.log("cambio a horizontal grande");
				this.changeContainer(this.bigHorizontal);
				break;
	}
} ;

p.changeVertical = function () {
	switch (size) {
		case "small":
			console.log("cambio a vertical peque�o");
			this.changeContainer(this.smallVertical);
			break;
		case "smallMedium":
			console.log("cambio a vertical medio peque�o");
			this.changeContainer(this.smallMediumVertical);
			break;
		case "medium":
			console.log("cambio a vertical medio");
			this.changeContainer(this.mediumVertical);
			break;
		case "mediumBig":
			console.log("cambio a vertical medio grande");
			this.changeContainer(this.mediumBigVertical);
			break;
		case "large":
			console.log("cambio a vertical grande");
			this.changeContainer(this.bigVertical);
			break;
	}
} ;

p.changeContainer = function (background) {		
	this.removeAllChildren();
			
	if (background)
	{
		this.addChild(background);
	}
	else
	{
		this.setup();
	}
} ;

window.Background = createjs.promote(Background, "Container");
}());