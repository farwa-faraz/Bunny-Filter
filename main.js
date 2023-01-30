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
}

function snapshot()
{
    save("clown.png")
}

function modelLoaded()
{
    console.log("poseNet is initialised");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("x value of nose"+ results[0].pose.nose.x);
        console.log("y value of nose"+ results[0].pose.nose.y);
    }
}