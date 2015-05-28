(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1349,
	height: 667,
	fps: 24,
	color: "#FBC301",
	manifest: [
		{src:"images/furgoneta.png", id:"furgoneta"},
		{src:"images/olas.png", id:"olas"},
		{src:"images/olaSuelta.png", id:"olaSuelta"},
		{src:"images/poste.png", id:"poste"}
	]
};

// stage content:
(lib.pezgobo1js = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.furgoneta();
	this.instance.setTransform(553.8,294.9);

	this.instance_1 = new lib.olaSuelta();
	this.instance_1.setTransform(163.8,473.3);

	this.instance_2 = new lib.poste();
	this.instance_2.setTransform(117.8,232.3);

	this.instance_3 = new lib.olas();
	this.instance_3.setTransform(57.7,36.6);

	this.instance_4 = new lib.olas();
	this.instance_4.setTransform(0,0,0,0);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(674.5,333.5,1286.7,667.6);


// symbols:
(lib.furgoneta = function() {
	this.initialize(img.furgoneta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,624,366);


(lib.olas = function() {
	this.initialize(img.olas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1229,631);


(lib.olaSuelta = function() {
	this.initialize(img.olaSuelta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,464,193);


(lib.poste = function() {
	this.initialize(img.poste);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,435);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;