(function() {

function Address(orientationStr, size) {
	this.Container_constructor();
	
	this.smallHorizontalAddress = null;
	this.smallMediumHorizontalAddress = null;
	this.mediumHorizontalAddress = null;
	this.mediumBigHorizontalAddress = null;
	this.bigHorizontalAddress = null;
	
	this.smallVerticalAddress = null;
	this.smallMediumAddress = null;
	this.mediumVerticalAddress = null;
	this.mediumBigVerticalAddress = null;
	this.bigVerticalAddress = null;
	
	this.orientationStr = orientationStr;
	this.size = size;
	
	this.unfloatY = null;
	this.unfloatX = null;
	
	this.setup();
}
var p = createjs.extend(Address, createjs.Container);


p.setup = function() {
	switch (size) {
		case "small":
			if (orientationStr == "Landscape")
			{
				if (this.smallHorizontalAddress)
				{
					this.addBitmap(this.smallHorizontalAddress);
				}
				else
				{
					this.smallHorizontalAddress = new createjs.Bitmap("images/direccion77x49.png").set({name: "smallHorizontalAddress", cursor: "pointer"});
					this.smallHorizontalAddress.image.onload = this.handleAddressLoad;
				}
			}
			else
			{
				if (this.smallVerticalAddress)
				{
					this.addBitmap(this.smallVerticalAddress);
				}
				else
				{
					this.smallVerticalAddress = new createjs.Bitmap("images/direccionv110x68.png").set({name: "smallVerticalAddress", cursor: "pointer"});
					this.smallVerticalAddress.image.onload = this.handleAddressLoad;
				}
			}
			break;
		case "smallMedium":
			if (orientationStr == "Landscape")
			{
				if (this.smallMediumHorizontalAddress)
				{
					this.addBitmap(this.smallMediumHorizontalAddress);
				}
				else
				{
					this.smallMediumHorizontalAddress = new createjs.Bitmap("images/direccion115x74.png").set({name: "smallMediumHorizontalAddress", cursor: "pointer"});
					this.smallMediumHorizontalAddress.image.onload = this.handleAddressLoad;
				}
			}
			else
			{
				if (this.smallMediumVerticalAddress)
				{
					this.addBitmap(this.smallMediumVerticalAddress);
				}
				else
				{
					this.smallMediumVerticalAddress = new createjs.Bitmap("images/direccionv164x102.png").set({name: "smallMediumVerticalAddress", cursor: "pointer"});
					this.smallMediumVerticalAddress.image.onload = this.handleAddressLoad;
				}
			}
			break;
		case "medium":
			if (orientationStr == "Landscape")
			{
				if (this.mediumHorizontalAddress)
				{
					this.addBitmap(this.mediumHorizontalAddress);
				}
				else
				{
					this.mediumHorizontalAddress = new createjs.Bitmap("images/direccion.png").set({name: "mediumHorizontalAddress", cursor: "pointer"});
					this.mediumHorizontalAddress.image.onload = this.handleAddressLoad;
				}
			}
			else
			{
				if (this.mediumVerticalAddress)
				{
					this.addBitmap(this.mediumVerticalAddress);
				}
				else
				{
					this.mediumVerticalAddress = new createjs.Bitmap("images/direccionv219x136.png").set({name: "mediumHorizontalAddress", cursor: "pointer"});
					this.mediumVerticalAddress.image.onload = this.handleAddressLoad;
				}
			}
			break;
		case "mediumBig":
			if (orientationStr == "Landscape")
			{
				if (this.mediumBigHorizontalAddress)
				{
					this.addBitmap(this.mediumBigHorizontalAddress);
				}
				else
				{
					this.mediumBigHorizontalAddress = new createjs.Bitmap("images/direccion199x127.png").set({name: "mediumBigHorizontalAddress", cursor: "pointer"});
					this.mediumBigHorizontalAddress.image.onload = this.handleAddressLoad;
				}
			}
			else
			{
				if (this.mediumBigVerticalAddress)
				{
					this.addBitmap(this.mediumBigVerticalAddress);
				}
				else
				{
					this.mediumBigVerticalAddress = new createjs.Bitmap("images/direccionv285x177.png").set({name: "mediumBigVerticalAddress", cursor: "pointer"});
					this.mediumBigVerticalAddress.image.onload = this.handleAddressLoad;
				}
			}
			break;
		case "large":
			if (orientationStr == "Landscape")
			{
				if (this.bigHorizontalAddress)
				{
					this.addBitmap(this.bigHorizontalAddress);
				}
				else
				{
					this.bigHorizontalAddress = new createjs.Bitmap("images/direccion306x196.png").set({name: "bigHorizontalAddress", cursor: "pointer"});
					this.bigHorizontalAddress.image.onload = this.handleAddressLoad;
				}
			}
			else
			{
				if (this.bigVerticalAddress)
				{
					this.addBitmap(this.bigVerticalAddress);
				}
				else
				{
					this.bigVerticalAddress = new createjs.Bitmap("images/direccionv438x272.png").set({name: "bigVerticalAddress", cursor: "pointer"});
					this.bigVerticalAddress.image.onload = this.handleAddressLoad;
				}
			}
			break;
	}
} ;

p.addBitmap = function (bitmap) {
	this.removeChild(0);
	this.addChild(bitmap);
	this.resizeIcon(bitmap);
	this.createLink(bitmap);
	this.floatIcon();
} ;

p.handleAddressLoad = function (event) {
	switch (size) {
		case "small":
			if (orientationStr == "Landscape")
			{
				address.addBitmap(address.smallHorizontalAddress);
			}
			else
			{
				address.addBitmap(address.smallVerticalAddress);
			}
			break;
		case "smallMedium":
			if (orientationStr == "Landscape")
			{
				address.addBitmap(address.smallMediumHorizontalAddress);
			}
			else
			{
				address.addBitmap(address.smallMediumVerticalAddress);
			}
			break;
		case "medium":
			if (orientationStr == "Landscape")
			{
				address.addBitmap(address.mediumHorizontalAddress);
			}
			else
			{
				address.addBitmap(address.mediumVerticalAddress);
			}
			break;
		case "mediumBig":
			if (orientationStr == "Landscape")
			{
				address.addBitmap(address.mediumBigHorizontalAddress);
			}
			else
			{
				address.addBitmap(address.mediumBigVerticalAddress);
			}
			break;
		case "large":
			if (orientationStr == "Landscape")
			{
				address.addBitmap(address.bigHorizontalAddress);
			}
			else
			{
				address.addBitmap(address.bigVerticalAddress);
			}
			break;
	}
} ;

p.createLink = function (bitmap) {
	bitmap.addEventListener("mousedown", this.handleMousedown);
} ;

p.handleMousedown = function (evt) {
	window.location = "https://www.google.es/maps/place/Carrer+Jos%C3%A9+Segrelles,+11,+46529+Canet+d'en+Berenguer,+Valencia/@39.6801824,-0.2064551,568m/data=!3m2!1e3!4b1!4m2!3m1!1s0xd60166833aa4fad:0xd70f1b77e3c89fbb!6m1!1e1"
} ;	

p.resizeIcon = function (bitmap) {		
	if(orientationStr == 'Landscape')
	{
		bitmap.x = 0.94 * calculatedWidth/100;
		bitmap.y = 83.44 * calculatedHeight/100;
	}
	else
	{
		bitmap.x = 21.05 * calculatedWidth/100;
		bitmap.y = 85.31 * calculatedHeight/100;
	}
	
	this.unfloatX = bitmap.x;
	this.unfloatY = bitmap.y;
} ;

p.floatIcon = function () {
	var bitmap = this.getChildAt(0);
	var newHeight = screenHeight - calculatedHeight; 
	if(orientationStr == 'Landscape')
	{
		bitmap.y = this.unfloatY + centerY/2;
	}
	else
	{
		bitmap.x = this.unfloatX - centerX;
		/*bitmap.x = 6.86 * calculatedWidth/100;
		bitmap.y = 13.5 * calculatedHeight/100;
		bitmap.rotation = 9;*/
	}
} ;

window.Address = createjs.promote(Address, "Container");
}());