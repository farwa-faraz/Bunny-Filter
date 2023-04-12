function preload()
{
    left_ear = loadImage('https://i.postimg.cc/WzbWx9bx/Right-ear-removebg-preview.png');
    right_ear = loadImage('https://i.postimg.cc/6qpcMY9q/Left-ear-removebg-preview.png');
    glasses = loadImage('https://i.postimg.cc/FKvBjbJd/Glasses-removebg-preview.png');
}

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();
    webcam = createCapture(VIDEO);
    webcam.hide();
    poseNet = ml5.poseNet(webcam, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    image(webcam, 0, 0, 400, 400);
    fill("red");
    stroke("red");
    //circle(left_earx, left_eary, 20);
    image(left_ear, left_earx, left_eary, 160, 160);
    image(right_ear, right_earx, right_eary, 160, 160);
    image(glasses, glasses_x, glasses_y, 180, 180);
}

function snapshot()
{
    save("bunny.png")
}

function modelLoaded()
{
    console.log("poseNet is initialised");
}

left_earx = 0
left_eary = 0

right_earx = 0
right_eary = 0

glasses_x = 0
glasses_y = 0

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("x value of left_ear"+ results[0].pose.leftEar.x);
        console.log("y value of left_ear"+ results[0].pose.leftEar.y);
        left_earx = results[0].pose.leftEar.x - 260;
        left_eary = results[0].pose.leftEar.y - 280;

        console.log("x value of right_ear"+ results[0].pose.rightEar.x);
        console.log("y value of right_ear"+ results[0].pose.rightEar.y);
        right_earx = results[0].pose.rightEar.x - 170;
        right_eary = results[0].pose.rightEar.y - 275;

        console.log("x value of leftEye"+ results[0].pose.leftEye.x);
        console.log("y value of leftEye"+ results[0].pose.leftEye.y);
        glasses_x = results[0].pose.leftEye.x - 280;
        glasses_y = results[0].pose.leftEye.y - 135;
    }
}

