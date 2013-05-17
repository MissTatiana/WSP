var imageArray = [
	"images/screenshots/containerapp.jpg",
	"images/screenshots/containerscene.jpg",
	"images/screenshots/containerlayers.jpg",
	"images/screenshots/containertools.jpg",
	"images/screenshots/containercolor.jpg",
	"images/screenshots/containerfolders.jpg"
];
var imageIndex = 0;

var gallery = document.getElementById("gallery");

function loadImage(){
	gallery.setAttribute("src", imageArray[imageIndex]);
};

var arrowLeft = document.getElementById("arrowLeft");
arrowLeft.onclick = function() {
	loadImage();
	
	imageIndex--;
	if(imageIndex < 0){
		imageIndex = imageArray.length -1;
	}
};

var arrowRight = document.getElementById("arrowRight");
arrowRight.onclick = function() {
	loadImage();
	
	imageIndex++;
	if(imageIndex > (imageArray.length-1)){
		imageIndex = 0;
	}
};
