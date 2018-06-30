//Pixel Art Board V1.0
//Author : Rudy Menekam
//Last Release : I am not yet done :)
$(document).ready(function() {

    const canvas = document.getElementById("pixelCanvas")
    const ctx = canvas.getContext("2d")
    let grid_width = 0
    let grid_height = 0
    let colorinput

    $(document).on("click", "#make-grid", function(event) {
        event.preventDefault()
        height = $('#sizePicker').find('input:first').val()
        width = $('#sizePicker').find('input:nth-child(2)').val()
        //Given canvas (graph paper) length and width equals 600 
        //We need to calculate size (length and width) of each grid
        grid_width = 600 / width
        grid_height = 600 / height
        makeGrid(width, height)
    });


    canvas.addEventListener('click', function(event) {

        colorinput = $("#colorPicker").val()
        pos = getMousePos(canvas, event, grid_width, grid_height)
        ctx.fillStyle = colorinput;
        ctx.fillRect(parseInt(Math.floor(pos.x) * grid_width), parseInt(Math.floor(pos.y) * grid_height), grid_width, grid_height);
        ctx.stroke();
        console.log("x :" + parseInt(Math.floor(pos.x) * grid_width))
        console.log("y :" + parseInt(Math.floor(pos.y) * grid_height))
    }, false);



    function makeGrid() {

        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "black";

        for (let i = 0; i <= 600; i = i + grid_width) {
            for (let j = 0; j <= 600; j = j + grid_height) {

                ctx.rect(i, j, grid_width, grid_height);
                ctx.stroke();

            }
        }

    }

    function getMousePos(canvas, evt, grid_width, grid_height) {
        let rect = canvas.getBoundingClientRect(), // abs. size of element
            scaleX = canvas.width / grid_width, // relationship bitmap vs. element for X
            scaleY = canvas.height / grid_height; // relationship bitmap vs. element for Y

        return {
            x: ((evt.clientX - rect.left) * scaleX) / 600, // scale mouse coordinates after they have
            y: ((evt.clientY - rect.top) * scaleY) / 600 // been adjusted to be relative to element
        }
    }




});