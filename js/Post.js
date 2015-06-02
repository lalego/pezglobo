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
					smallPost = new createjs.Bitmap("images/postepez86x230.png");
					smallPost.image.onload = this.handlePostLoad;
					break;
				case "smallMedium":
					smallMediumPost = new createjs.Bitmap("images/postepez128x342.png");
					smallMediumPost.image.onload = this.handlePostLoad;
					break;
				case "medium":
					mediumPost = new createjs.Bitmap("images/postepez171x457.png");
					mediumPost.image.onload = this.handlePostLoad;
					break;
				case "mediumBig":
					mediumBigPost = new createjs.Bitmap("images/postepez222x593.png");
					mediumBigPost.image.onload = this.handlePostLoad;
					break;
				case "large":
					bigPost = new createjs.Bitmap("images/postepez342x914.png");
					bigPost.image.onload = this.handlePostLoad;
					break;
			}
} ;

p.handlePostLoad = function (event) {
	switch (size) {
		case "small":
			post.addChild(smallPost);
			post.resizeIcon(smallPost);
			break;
		case "smallMedium":
			post.addChild(smallMediumPost);
			post.resizeIcon(smallMediumPost);
			break;
		case "medium":
			post.addChild(mediumPost);
			post.resizeIcon(mediumPost);
			break;
		case "mediumBig":
			post.addChild(mediumBigPost);
			post.resizeIcon(mediumBigPost);
			break;
		case "large":
			post.addChild(bigPost);
			post.resizeIcon(bigPost);
			break;
	}
} ;

p.resizeIcon = function (bitmap) {		
	if(orientationStr == 'Landscape')
	{
		bitmap.x = 86;
		bitmap.y = 220;
	}
	else
	{
		bitmap.x = 18;
		bitmap.y = 503;
	}

}

p.changeVertical = function () {
	
}

p.changeContainer = function (post) {		
	
}

window.Post = createjs.promote(Post, "Container");
}());