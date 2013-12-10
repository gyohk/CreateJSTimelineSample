(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 430,
	fps: 30,
	color: "#333333",
	manifest: []
};

// stage content:
(lib.menu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _self = this;
		window.stage.enableMouseOver();
		this.menu1.cursor = "pointer";
		this.menu2.cursor = "pointer";
		
		this.menu1.addEventListener("click", function(){
			if(_self.parent.setNextScene){
				createjs.Sound.play('hit');
				_self.parent.setNextScene("scene1");
			}
		});
		this.menu2.addEventListener("click", function(){
			if(_self.parent.setNextScene){
				createjs.Sound.play('hit');
				_self.parent.setNextScene("scene2");
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー 1
	this.menu1 = new lib.menu1();
	this.menu1.setTransform(320,377);

	this.timeline.addTween(cjs.Tween.get(this.menu1).wait(1));

	// レイヤー 6
	this.menu2 = new lib.menu2();
	this.menu2.setTransform(580,377);

	this.timeline.addTween(cjs.Tween.get(this.menu2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(690,570.5,420,41.4);


// symbols:
(lib.menu2 = function() {
	this.initialize();

	// レイヤー 2
	this.text = new cjs.Text("シーン2へ", "18px 'HiraginoKaku'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.setTransform(-2,-11.8);

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AsfDHIAAmNIY/AAIAAGNg");

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80,-20,160,40);


(lib.menu1 = function() {
	this.initialize();

	// レイヤー 2
	this.text = new cjs.Text("シーン1へ", "18px 'HiraginoKaku'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 100;
	this.text.setTransform(-2,-13.3);

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AsfDHIAAmNIY/AAIAAGNg");
	this.shape.setTransform(0,-1.4);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80,-21.4,160,40);

})(lib_menu = lib_menu||{}, images = images||{}, createjs = createjs||{});
var lib_menu, images, createjs;