function drawRectangle(y, x, w, h, lbl, iter) {
  var box = $(".box").clone();
  box.find(".box_label").text(lbl);
  box.addClass("cl" + iter);
  box.css("display", "block");
  box.css("right", x);
  box.css("top", y);
  box.css("width", w);
  box.css("height", h);
  $(".real_time").append(box);
}
var yolo_rt;
var iter = 0;
var time_start;
var time_end;
var doLoop = true;
function showWebcam() {
  var video = document.querySelector("#webcam_feed");
  if (doLoop) {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
          doLoop = true;
        })
        .catch(function (err0r) {
          console.log("Something went wrong!");
        });
    }
    yolo_rt = ml5.YOLO(document.getElementById("webcam_feed"), realTimeYOLO);
  } else {
    doLoop = true;
    realTimeYOLO();
  }
}
function realTimeYOLO() {
  //masukkan fungsi
}
