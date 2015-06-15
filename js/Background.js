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
			if (this.smallMediumHorizontal)
			{
				this.addBitmap(this.smallMediumHorizontal);
			}
			else
			{
				this.smallHorizontal = new createjs.Bitmap("images/horizontalv480x320.jpg");
				this.smallHorizontal.image.onload = this.handleHorizontalLoad;
				this.smallHorizontal.name = "smallHorizontal";
			}
			
			if (this.smallVertical)
			{
				this.addBitmap(this.smallVertical);
			}
			else
			{
				this.smallVertical = new createjs.Bitmap("images/verticalv320x480.jpg");
				this.smallVertical.image.onload = this.handleVerticalLoad;
				this.smallVertical.name = "smallVertical";
			}
			break;
		case "smallMedium":
			if (this.smallMediumHorizontal)
			{
				this.addBitmap(this.smallMediumHorizontal);
			}
			else
			{
				this.smallMediumHorizontal = new createjs.Bitmap("images/horizontalv720x480.jpg");
				this.smallMediumHorizontal.image.onload = this.handleHorizontalLoad;
				this.smallMediumHorizontal.name = "smallMediumHorizontal";
			}
			
			if (this.smallMediumVertical)
			{
				this.addBitmap(this.smallMediumVertical);
			}
			else
			{
				this.smallMediumVertical = new createjs.Bitmap("images/verticalv480x720.jpg");
				this.smallMediumVertical.image.onload = this.handleVerticalLoad;
				this.smallMediumVertical.name = "smallMediumVertical";
			}
			break;
		case "medium":
			if (this.mediumHorizontal)
			{
				this.addBitmap(this.mediumHorizontal);
			}
			else
			{
				this.mediumHorizontal = new createjs.Bitmap("images/horizontalv960x640.jpg");
				this.mediumHorizontal.image.onload = this.handleHorizontalLoad;
				this.mediumHorizontal.name = "mediumHorizontal";
			}
			
			if (this.mediumVertical)
			{
				this.addBitmap(this.mediumVertical);
			}
			else
			{
				this.mediumVertical = new createjs.Bitmap("images/verticalv640x960.jpg");
				this.mediumVertical.image.onload = this.handleVerticalLoad;
				this.mediumVertical.name = "mediumVertical";
			}
			break;
		case "mediumBig":
			if (this.mediumBigHorizontal)
			{
				this.addBitmap(this.mediumBigHorizontal);
			}
			else
			{
				this.mediumBigHorizontal = new createjs.Bitmap("images/horizontalv1248x832.jpg");
				this.mediumBigHorizontal.image.onload = this.handleHorizontalLoad;
				this.mediumBigHorizontal.name = "mediumBigHorizontal";
			}
			
			if (this.mediumBigVertical)
			{
				this.addBitmap(mediumBigVertical);
			}
			else
			{
				this.mediumBigVertical = new createjs.Bitmap("images/verticalv832x1248.jpg");
				this.mediumBigVertical.image.onload = this.handleVerticalLoad;
				this.mediumBigVertical.name = "mediumBigVertical";
			}
			break;
		case "large":
			if (this.bigHorizontal)
			{
				this.addBitmap(this.bigHorizontal);
			}
			else
			{
				this.bigHorizontal = new createjs.Bitmap("images/horizontalv1920x1280.jpg");
				this.bigHorizontal.image.onload = this.handleHorizontalLoad;
				this.bigHorizontal.name = "bigHorizontal";
			}
			
			if (this.bigVertical)
			{
				this.addBitmap(this.bigVertical);
			}
			else
			{
				this.bigVertical = new createjs.Bitmap("images/verticalv1240x1860.jpg");
				this.bigVertical.image.onload = this.handleVerticalLoad;
				this.bigVertical.name = "bigVertical";
			}
			break;
	}
} ;

p.addBitmap = function (bitmap) {
	this.addChild(bitmap);
	createIcons();
} ;

p.handleHorizontalLoad = function (event) {
	if(orientationStr == "Landscape")
	{
		switch (size) {
			case "small":
				bg.addBitmap(bg.smallHorizontal);
				break;
			case "smallMedium":
				bg.addBitmap(bg.smallMediumHorizontal);
				break;
			case "medium":
				bg.addBitmap(bg.mediumHorizontal);
				break;
			case "mediumBig":
				bg.addBitmap(bg.mediumBigHorizontal);
				break;
			case "large":
				bg.addBitmap(bg.bigHorizontal);
				break;
		}
	}
} ;

p.handleVerticalLoad = function (event) {
	if(orientationStr == "Portrait")
	{
		switch (size) {
			case "small":
				bg.addBitmap(bg.smallVertical);
				break;
			case "smallMedium":
				bg.addBitmap(bg.smallMediumVertical);
				break;
			case "medium":
				bg.addBitmap(bg.mediumVertical);
				break;
			case "mediumBig":
				bg.addBitmap(bg.mediumBigVertical);
				break;
			case "large":
				bg.addBitmap(bg.bigVertical);
				break;
		}
	}
} ;

p.changeHorizontal = function () {		
	switch (size) {
			case "small":
				console.log("cambio a horizontal pequeño");
				this.changeContainer(this.smallHorizontal);
				break;
			case "smallMedium":
				console.log("cambio a horizontal medio pequeño");
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
			console.log("cambio a vertical pequeño");
			this.changeContainer(this.smallVertical);
			break;
		case "smallMedium":
			console.log("cambio a vertical medio pequeño");
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
		this.addBitmap(background);
	}
	else
	{
		this.setup();
	}
} ;

window.Background = createjs.promote(Background, "Container");
}());