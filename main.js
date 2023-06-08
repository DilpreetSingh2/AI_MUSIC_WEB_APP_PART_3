music1 = "";
music2 = "";

leftWristX = 0;
rightWristY = 0;
leftWristY = 0;
rightWristX = 0;


function preload() {
    music1 = loadSound("music.mp3");
    music2 = loadSound("Stronger.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes)

}

function modelLoaded() {

    console.log('poseNet is loaded')
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        console.log(leftWristX, leftWristY, rightWristX, rightWristY);
    }
}
