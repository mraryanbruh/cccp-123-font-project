difference= 0;
rightWrist= 0;
leftWrist= 0;

function setup(){
    canvas= createCanvas(550,551);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
      console.log(results);

     leftwrist= results[0].pose.leftWrist.x;
     rightwrist=results[0].pose.rightWrist.x;
     difference= floor(leftWrist-rightWrist);
     console.log("left wrist x= "+ leftwrist + "right wrist x= "+ rightWrist +"difference= "+ difference);
    }
}

function modelLoaded(){
    console.log('poseNet is working');
}

function draw(){
    background('#969A97');
    document.getElementById("font_size").innerHTML=" size of the font will be = "+ difference+"px";
    text("aryan",225,225);
    fill("#F90093");
    stroke("#F90093");
    textSize(difference);
}