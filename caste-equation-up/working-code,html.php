
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>Counter: <span id="counter"></span></div>
    
    <div class="slidecontainer">
        <p>One <span class="value"></span></p>
        <span class="min"></span>
        <input type="range" class="slider">
        <span class="max"></span>
    </div>
    
    <div class="slidecontainer">
        <p>Two <span class="value"></span></p>
        <span class="min"></span>
        <input type="range" class="slider">
        <span class="max"></span>
    </div>
    
    <div class="slidecontainer">
        <p>Three <span class="value"></span></p>
        <span class="min"></span>
        <input type="range" class="slider">
        <span class="max"></span>
    </div>
    
    <div class="slidecontainer">
        <p>Four <span class="value"></span></p>
        <span class="min"></span>
        <input type="range" class="slider">
        <span class="max"></span>
    </div>
    
    <div class="slidecontainer">
        <p>Five <span class="value"></span></p>
        <span class="min"></span>
        <input type="range" class="slider">
        <span class="max"></span>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        var slider_indecies = ["myRangeOne", "myRangeTwo", "myRangeThree", "myRangeFour", "myRangeFive"];
        var change_order = [];
        var current_total_percentage = 0;
        var sliderValTracker = [0, 0, 0, 0, 0]

        const inputs = [...document.querySelectorAll(".slidecontainer input")];

            for (let input of inputs) {
                const container = input.closest(".slidecontainer");
                input.addEventListener("input", update);

                input.value = 0;
                container.querySelector(".min").textContent = input.min = 0;
                container.querySelector(".value").textContent = input.valueAsNumber + "%";
            }
            update();

            function update() {

                let sumOfAllInputs = inputs.reduce((sum, input) => sum + input.valueAsNumber, 0);

                console.log(sumOfAllInputs);

                let trackCount = 100 - sumOfAllInputs;

                if(trackCount >= 0){

                    document.querySelector("#counter").textContent = trackCount + "%";

                    for (let input of inputs) {
                        const max = 100 + input.valueAsNumber - sumOfAllInputs;
                        const container = input.closest(".slidecontainer");
                        container.querySelector(".max").textContent = 100;
                        // container.querySelector(".max").textContent = max;
                        
                        container.querySelector(".value").textContent = input.valueAsNumber + "%";
                        if(input.valueAsNumber >= max){
                            console.log("stop");
                            container.querySelector(".value").textContent = max + "%";
                            input.value = max;
                        }
                        console.log(input);
                    }

                }

                
            }


        // $(document).ready(function () {
            

        //     $('.slider').each(function (i, v) {
        //         var current_value = parseInt($(this).val());

        //         // calculate the total percentage on load
        //         current_total_percentage = current_total_percentage + current_value;

        //         // store the previous value for this slider
        //         $(this).attr('data-previous-value', current_value);
        //         $("#" + $(this) .data('id')).html(current_value);



        //         // we need to set a last changed slider - you might want to look into this.
        //         change_order.push($(this).attr('id'));
        //     });


        //     // use .change() if you want it to only update when the user stops sliding
        //     // .on('input') will update every time the user slides it.

        //     $('.slider').on('input', function () {
        //         var current_value = parseInt($(this).val());
        //         var previous_value = parseInt($(this).data('previous-value'));
        //         console.log(previous_value);
        //         var difference = (current_value - previous_value);
        //         // console.log($(this).data('id'));
        //         $("#"+ $(this).data('id')).html(current_value);
        //         // remove this slider from change order

        //         $("#counter").html(difference)
                

        //         // store the new previous value on the slider for next time
        //         $(this).data('previous-value', current_value);
        //     })
            

        // });
    </script>
</body>
</html>