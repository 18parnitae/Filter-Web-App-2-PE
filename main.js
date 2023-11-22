nosex = 0;
nosey = 0;
function preload() {
   lipstick = loadImage('https://i.postimg.cc/Y0Y58gfg/lips-image.jpg');
}

function setup() {
    canvas = createCanvas(280, 280)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(280, 280);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('modelLoaded');
}

function draw() {
    image(video, 0, 0, 280, 280);
}

function take_snapshot() {
    save('myFilterImage.png');
}