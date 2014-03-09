window.App = window.App || {};

//var LeapManager = require('leap-events').LeapManager;
var LeapManager = require('leap-events').LeapManager,
    FrameState  = require('leap-events').FrameState,
    PuxClient   = require('pux-node');

FrameState.screenSize = { width: 1280, height: 1080};
FrameState.leapFrameSize = { width: 300, height: 250};

App.conductorServer = App.conductorServer || new ConductorServer();

App.leapManager = new LeapManager({
});

App.puxClient = new PuxClient();

document.getElementById("Video1").play();

var canvas = document.getElementById("a_canvas");
var context = canvas.getContext("2d");

App.clearLines = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);
};

App.leapManager.start();
