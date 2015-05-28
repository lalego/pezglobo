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
				content.addChild(smallHorizontal);
				handleImageLoad();
				break;
			case "smallMedium":
				content.addChild(smallMediumHorizontal);
				handleImageLoad();
				break;
			case "medium":
				content.addChild(mediumHorizontal);
				handleImageLoad();
				break;
			case "mediumBig":
				content.addChild(mediumBigHorizontal);
				handleImageLoad();
				break;
			case "large":
				content.addChild(bigHorizontal);
				handleImageLoad();
				break;
		}
	}
} ;

p.handleVerticalLoad = function (event) {
	if(orientationStr == "Portrait")
	{
		switch (size) {
			case "small":
				content.addChild(smallVertical);
				handleImageLoad();
				break;
			case "smallMedium":
				content.addChild(smallMediumVertical);
				handleImageLoad();
				break;
			case "medium":
				content.addChild(mediumVertical);
				handleImageLoad();
				break;
			case "mediumBig":
				content.addChild(mediumBigVertical);
				handleImageLoad();
				break;
			case "large":
				content.addChild(bigVertical);
				handleImageLoad();
				break;
		}
	}
} ;

p.handleImageLoad = function () {		
	var totalWidth = document.documentElement.clientWidth;
		var screenWidth = window.innerWidth;
		var screenHeight = window.innerHeight;
		
		if (screenWidth < totalWidth)
		{
			screenWidth = document.documentElement.clientWidth;
			screenHeight = document.documentElement.clientHeight;
		}

		//scale = screenWidth / calculatedWidth;
		var scaleX = screenWidth / calculatedWidth;
		var scaleY = screenHeight / calculatedHeight;
		console.log("scaleX: " + scaleX);
		console.log("scaleY: " + scaleY);
		
		scale = Math.max(scaleX, scaleY);
		
		var contentWidth = calculatedWidth * scale;
		var contentHeight = calculatedHeight * scale;
		
		console.log("contentWidth: " + contentWidth);
		console.log("contentHeight: " + contentHeight);
		console.log("screenWidth: " + screenWidth);
		console.log("screenHeight: " + screenHeight);
		console.log("scale: " + scale);
		
		content.scaleX = scale;
		content.scaleY = scale;
		
		centerX = screenWidth - contentWidth;
		centerY = screenHeight - contentHeight;
		
		console.log("centerX: " + centerX);
		console.log("centerY: " + centerY);
		
		content.x = (centerX)/2;
		content.y = (centerY)/2;
		
		stage.canvas.width = contentWidth;
		stage.canvas.height = contentHeight;
}

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
}

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
}

p.changeContainer = function (background) {		
	content.removeAllChildren();
			
	if (background)
	{
		content.addChild(background);
	}
	else
	{
		createContent();
	}
}

window.Background = createjs.promote(Background, "Container");
}());