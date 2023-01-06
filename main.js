function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.lenth > 0) {
        console.log(results);
    }

    leftwristX = results[0].pose.leftwrist.X;
    wrightristX = results [0].pose.wrightrist.X;
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!')
}

function draw() {
    background('0066FF');
    textSize(10);
        fill('#0567fa');
        stroke('#20f5d5');
        text('Dilean', 50, 400)
        }