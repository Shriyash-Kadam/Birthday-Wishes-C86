var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL(src="https://i.pinimg.com/474x/47/10/d3/4710d33a0c0539312afa15a87b572d56.jpg", function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    });
}

function playSound(){
	x.play();
}
