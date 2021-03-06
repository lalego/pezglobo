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
	
	this.unfloatY = null;
	this.unfloatX = null;
	
	this.setup();
}
var p = createjs.extend(Post, createjs.Container);


p.setup = function() {
	switch (size) {
		case "small":
			if (this.smallPost)
			{
				this.addBitmap(this.smallPost);
			}
			else
			{
				this.smallPost = new createjs.Bitmap("images/postepez86x230.png");
				this.smallPost.image.onload = this.handlePostLoad;
				this.smallPost.name = "smallPost";
			}
			break;
		case "smallMedium":
			if (this.smallMediumPost)
			{
				this.addBitmap(this.smallMediumPost);
			}
			else
			{
				this.smallMediumPost = new createjs.Bitmap("images/postepez128x342.png");
				this.smallMediumPost.image.onload = this.handlePostLoad;
				this.smallMediumPost.name = "smallMediumPost";
			}
			break;
		case "medium":
			if (this.mediumPost)
			{
				this.addBitmap(this.mediumPost);
			}
			else
			{
				this.mediumPost = new createjs.Bitmap("images/postepez171x457.png");
				this.mediumPost.image.onload = this.handlePostLoad;
				this.mediumPost.name = "mediumPost";
			}
			break;
		case "mediumBig":
			if (this.mediumBigPost)
			{
				this.addBitmap(this.mediumBigPost);
			}
			else
			{
				this.mediumBigPost = new createjs.Bitmap("images/postepez222x593.png");
				this.mediumBigPost.image.onload = this.handlePostLoad;
				this.mediumBigPost.name = "mediumBigPost";
			}
			break;
		case "large":
			if (this.bigPost)
			{
				this.addBitmap(this.bigPost);
			}
			else
			{
				this.bigPost = new createjs.Bitmap("images/postepez342x914.png");
				this.bigPost.image.onload = this.handlePostLoad;
				this.bigPost.name = "bigPost";
			}
			break;
	}
} ;

p.addBitmap = function (bitmap) {
	this.addChild(bitmap);
	this.resizeIcon(bitmap);
	this.floatIcon();
} ;

p.handlePostLoad = function (event) {
	switch (size) {
		case "small":
			post.addBitmap(post.smallPost);
			break;
		case "smallMedium":
			post.addBitmap(post.smallMediumPost);
			break;
		case "medium":
			post.addBitmap(post.mediumPost);
			break;
		case "mediumBig":
			post.addBitmap(post.mediumBigPost);
			break;
		case "large":
			post.addBitmap(post.bigPost);
			break;
	}
} ;

p.resizeIcon = function (bitmap) {		
	if(orientationStr == 'Landscape')
	{
		bitmap.x = 8.96 * calculatedWidth/100;
		bitmap.y = 34.37 * calculatedHeight/100;
	}
	else
	{
		bitmap.x = 1.88 * calculatedWidth/100;
		bitmap.y = 60.60 * calculatedHeight/100;
	}
	
	this.unfloatX = bitmap.x;
	this.unfloatY = bitmap.y;
}

p.floatIcon = function () {
	var bitmap = this.getChildAt(0);
	var newHeight = screenHeight - calculatedHeight; 
	if(orientationStr == 'Landscape')
	{
		//bitmap.y = bitmap.y + centerY;
	}
	else
	{
		bitmap.y = this.unfloatY + centerX;
		/*bitmap.x = 6.86 * calculatedWidth/100;
		bitmap.y = 13.5 * calculatedHeight/100;
		bitmap.rotation = 9;*/
	}
} ;

window.Post = createjs.promote(Post, "Container");
}());