function preload()
{

}

function setup()
{
    canvas = createCanvas(500,600);
    canvas.center();
}

function draw()
{
    video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console')
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log('model has loaded');
    status = true
}