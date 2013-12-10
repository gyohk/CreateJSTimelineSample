(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 430,
	fps: 30,
	color: "#003399",
	manifest: [
		{src:"sounds/hit.mp3", id:"hit"}
	]
};

// stage content:
(lib.base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _self = this;
		var _current_scene = null;
		var _menu = null;
		var flg_change = 0;
		
		this.setNextScene = function(scene_name){
			if(flg_change == 0 && scene_name != _current_scene.name){
				flg_change = 1;
				_current_scene.nextScene = scene_name;
				_current_scene.gotoAndPlay("REMOVE");
			}
		}
		
		this.changeScene = function(scene_name){
			var manifest = [
				{ src: "js/" + scene_name + ".js", id: scene_name }
			];
			if(!window.lib_menu){
				manifest.push({src: "js/menu.js", id: "menu"});
			}
			
			var queue = new createjs.LoadQueue(false);
			var handleProgress = function(event) {
			}
			var handleComplete = function(event) {
				queue.addEventListener("progress", handleProgress);
				queue.addEventListener("complete", handleComplete);
				queue.addEventListener("fileload", handleFileLoad);
			}
			var handleFileLoad = function(event) {
				switch (event.item.type) {
					case createjs.LoadQueue.JAVASCRIPT:
						document.body.appendChild(event.result);
					default:
						break;
				}
			}
			
			var handleEnterFrame = function(event){
				if(queue.progress > _self.loading_line.scaleX){
					_self.loading_line.scaleX += 0.1;
					if(_self.loading_line.scaleX > 1){
						_self.loading_line.scaleX = 1;
					}
				}
				if(_self.loading_line.scaleX >= 1){
					_self.loading_line.alpha -= 0.2;
					if(_self.loading_line.alpha <= 0){
						_self.loading_line.scaleX = 0;
						createjs.Ticker.removeEventListener("tick", handleEnterFrame);
						showScene();
					}
				}
			}
			
			var showScene = function(){
				var scene = eval("new window.lib_" + scene_name + "." + scene_name + "()");
				scene.name = scene_name;
				_self.removeChild(_current_scene);
				_self.addChild(scene);
				scene.gotoAndPlay("START");
				_current_scene = scene;
				flg_change = 0;
				
				if(!_menu){
					_menu = new window.lib_menu.menu();
					_self.addChild(_menu);
				}
			}
			
			if(window[scene_name]){
				showScene();
			}else{
				_self.loading_line.scaleX = 0;
				_self.loading_line.alpha = 1;
				queue.addEventListener("progress", handleProgress);
				queue.addEventListener("complete", handleComplete);
				queue.addEventListener("fileload", handleFileLoad);
				queue.loadManifest(manifest);
				createjs.Ticker.addEventListener("tick", handleEnterFrame);
			}	
		
		}
		
		window.stage.enableMouseOver();
		this.changeScene("scene1");
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// レイヤー 6
	this.loading_line = new lib.loading_line();
	this.loading_line.setTransform(-1,215);

	this.timeline.addTween(cjs.Tween.get(this.loading_line).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(448,429,902,2);


// symbols:



(lib.loading_line = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("EhGSAAAMCMlAAA");
	this.shape.setTransform(450,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,902,2);

})(lib_base = lib_base||{}, images = images||{}, createjs = createjs||{});
var lib_base, images, createjs;