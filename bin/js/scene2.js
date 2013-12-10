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
(lib.scene2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{WAIT:0,START:1,STAY:10,REMOVE:11});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.nextScene = "";
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
		this.parent.changeScene(this.nextScene);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(10).call(this.frame_20).wait(1));

	// レイヤー 1
	this.contents = new lib.contents();
	this.contents.setTransform(256,186);
	this.contents.alpha = 0;
	this.contents._off = true;

	this.timeline.addTween(cjs.Tween.get(this.contents).wait(1).to({_off:false},0).to({x:450,alpha:1},9,cjs.Ease.get(1)).to({x:644,alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// symbols:
(lib.contents = function() {
	this.initialize();

	// レイヤー 1
	this.text = new cjs.Text("シーン2です!", "18px 'HiraginoKaku'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 160;
	this.text.setTransform(-2,-11.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4WYXMAAAgwtMAwtAAAMAAAAwtg");

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-156,-156,312,312);

})(lib_scene2 = lib_scene2||{}, images = images||{}, createjs = createjs||{});
var lib_scene2, images, createjs;