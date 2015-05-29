(function() {

function Post(orientationStr, size) {
	this.Container_constructor();
	
	this.smallPost = null;
	this.smallMediumPost = null;
	this.mediumPost = null;
	this.mediumBigPost = null;
	this.bigPost = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.setup();
}
var p = createjs.extend(Post, createjs.Container);


p.setup = function() {
	switch (size) {
				case "small":
					smallPost = new createjs.Bitmap("images/furgoneta285x168.png");
					smallPost.image.onload = this.handlePostLoad;
					break;
				case "smallMedium":
					smallMediumPost = new createjs.Bitmap("images/furgoneta427x251.png");
					smallMediumPost.image.onload = this.handlePostLoad;
					break;
				case "medium":
					mediumPost = new createjs.Bitmap("images/furgoneta569x335.png");
					mediumPost.image.onload = this.handlePostLoad;
					break;
				case "mediumBig":
					mediumBigPost = new createjs.Bitmap("images/furgoneta740x436.png");
					mediumBigPost.image.onload = this.handlePostLoad;
					break;
				case "large":
					bigPost = new createjs.Bitmap("images/furgoneta1138x670.png");
					bigPost.image.onload = this.handlePostLoad;
					break;
			}
} ;

p.handlePostLoad = function (event) {
	switch (size) {
		case "small":
			post.addChild(smallPost);
			post.resizeIcons();
			break;
		case "smallMedium":
			post.addChild(smallMediumPost);
			post.resizeIcons();
			break;
		case "medium":
			post.addChild(mediumPost);
			post.resizeIcons();
			break;
		case "mediumBig":
			post.addChild(mediumBigPost);
			post.resizeIcons();
			break;
		case "large":
			post.addChild(bigPost);
			post.resizeIcons();
			break;
	}
} ;

p.resizeIcons = function () {
	switch (size) {
		case "small":
			this.resizeIcon(this.smallPost, 53.9, 64.2, 43.1, 29.3);
			break;
		case "smallMedium":
			this.resizeIcon(smallMediumPost, 53.9, 64.2, 43.1, 29.3);
			break;
		case "medium":
			this.resizeIcon(this.mediumPost, 53.9, 64.2, 43.1, 29.3);
			break;
		case "mediumBig":
			this.resizeIcon(this.mediumBigPost, 53.9, 64.2, 43.1, 29.3);
			break;
		case "large":
			this.resizeIcon(this.bigPost, 53.9, 64.2, 43.1, 29.3);
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

p.changeContainer = function (post) {		
	
}

window.Post = createjs.promote(Post, "Container");
}());