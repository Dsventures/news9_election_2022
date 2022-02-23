var casteSelector = document.getElementById("caste-selector");
var chosenCaste = document.getElementById("chosenCaste");
var chosenCasteSeats = document.getElementById("chosenCasteSeats");
var error = document.getElementById("error");
var inputs = [...document.querySelectorAll(".slidecontainer input")];


casteSelector.addEventListener("change", function(e){
    console.log(e.target.value);

    var filterCasteRows = data.filter(function(obj){
        return obj.Caste === e.target.value;
    })

    var sumSeats2017 = filterCasteRows.map(function(obj){
        return obj["TotalSeats2017"];
    }).reduce(function(a, b){
        return parseInt(a) + parseInt(b);
    })

    chosenCaste.innerHTML = e.target.value;
    chosenCasteSeats.innerHTML = sumSeats2017;
   

    console.log(filterCasteRows);

    error.innerHTML = "";
                    
    for (var input of inputs) {
        // console.log(input);
        input.style.pointerEvents = "auto";
        const container = input.closest(".slidecontainer");
        input.addEventListener("input", update);  

         var filterPartyRows = filterCasteRows.filter(function(obj){
            // console.log(obj['Caste'].length, fdValue.length);
            return obj.Party === input.dataset.party;
        })

        // console.log(input.dataset.party);
        // console.log(filterPartyRows[0]["DefaultValues"]);
        var chosenInputParty = filterPartyRows[0]["DefaultValues"]

        // input.value = 10;
        container.querySelector(".dfault-val").textContent = chosenInputParty+"%";
        container.querySelector(".dfault-val").style.opacity = 1;
        container.querySelector(".dfault-val").style.left = chosenInputParty+"%";
        container.querySelector(".dfault-arrow").style.left = chosenInputParty+"%";
        container.querySelector(".dfault-arrow").style.opacity = 1;
        // container.querySelector(".min").textContent = input.min = 0;
        // container.querySelector(".value").textContent = input.valueAsNumber + "%";
    }

    var sumOfAllInputs = inputs.reduce((sum, input) => sum + input.valueAsNumber, 0);

    document.querySelector("#counter").textContent = 100 - sumOfAllInputs + "%";

    // console.log(fdData(e.target.value));
    // selectedDataRows = fdData(e.target.value);
    // var sumSeats2017 = selectedDataRows.map(function(obj){
    //     return obj["TotalSeats2017"];
    // }).reduce(function(a, b){
    //     return parseInt(a) + parseInt(b);
    // })
    // var sumDefaults2017 = selectedDataRows.map(function(obj){
    //     return obj["DefaultValues "];
    // }).reduce(function(a, b){
    //     return parseInt(a) + parseInt(b);
    // })

    // chosenCaste.innerHTML = e.target.value;
    // chosenCasteSeats.innerHTML = sumSeats2017;

    // // Populate slider with Default Values
    // rangeBJP.value = fdDataParty(fdData(e.target.value), "BJP")
    // rangeSP.value = fdDataParty(fdData(e.target.value), "SP")
    // rangeBSP.value = fdDataParty(fdData(e.target.value), "BSP")
    // rangeCongress.value = fdDataParty(fdData(e.target.value), "BSP")
    // rangeOthers.value = fdDataParty(fdData(e.target.value), "BSP")


    // countTracker[0] = rangeBJP.value;
    // countTracker[1] = rangeSP.value;
    // countTracker[2] = rangeBSP.value;
    // countTracker[3] = rangeCongress.value;
    // countTracker[4] = rangeOthers.value;


    // // count = count - sumDefaults2017;
    // countDisplay.innerHTML = countTracker.reduce(function(c1, c2){
    //     return c1 + c2;
    // });
    
})



        // var inputs2 = document.querySelectorAll(".slidecontainer input");

            // console.log(inputs2, typeof(inputs2));

            for (var input of inputs) {
                const container = input.closest(".slidecontainer");
                input.style.pointerEvents = "none";
                container.style.cursor = "pointer";
                input.addEventListener("input", update);

                container.addEventListener("click", function(){
                    var tempCasteVal = casteSelector.value;
                    if(tempCasteVal === "choose"){
                        error.innerHTML = "Caste is required"
                    }
                })

                // input.addEventListener("click", function(){
                //     var tempCasteVal = casteSelector.value;
                //     console.log(tempCasteVal);
                //     if(tempCasteVal === "choose"){
                //         error.innerHTML = "Caste is required"
                //     }
                // });
                // input.value = 10;
                // container.querySelector(".min").textContent = input.min = 0;
                // container.querySelector(".value").textContent = input.valueAsNumber + "%";
            }

            update();

            function update(e) {
                // cap the value to max
                if (e && e.target.valueAsNumber > +e.target.dataset.max) {
                    e.target.value = e.target.dataset.max;
                }

                var sumOfAllInputs = inputs.reduce((sum, input) => sum + input.valueAsNumber, 0);

                document.querySelector("#counter").textContent = 100 - sumOfAllInputs + "%";

                for (var input of inputs) {
                    //const sumOfOtherInputs = sumOfAllInputs - input.valueAsNumber; 
                    const max = 100 + input.valueAsNumber - sumOfAllInputs;
                    const container = input.closest(".slidecontainer");

                    container.querySelector(".max").textContent = 100;
                    // container.querySelector(".max").textContent = max;
                    input.dataset.value = input.valueAsNumber;
                    input.dataset.max = max;

                    // container.querySelector(".line-right").style.left = max + "%";
                    container.querySelector(".value").textContent = input.valueAsNumber + "%";
                    container.querySelector(".value").style.left = input.valueAsNumber + "%";
                    container.querySelector(".value").style.opacity = 1;

                    // set the break-points for the background to visualize the range
                    input.style.setProperty("--value", input.valueAsNumber + "%");
                    input.style.setProperty("--max", max + "%");
                }
            }
document.getElementById("submit").addEventListener("click", function(){
    var tempCasteVal = casteSelector.value;
    // console.log(tempCasteVal);
    if(tempCasteVal === "choose"){
        error.innerHTML = "Caste is required"
    }else{
        var sumOfAllInputs = inputs.reduce((sum, input) => sum + input.valueAsNumber, 0);
        // console.log(sumOfAllInputs);
        console.log(inputs[0].dataset);
        if(sumOfAllInputs !== 0){
            console.log("continue to formula");
            error.innerHTML = "";
        }else{
            error.innerHTML = "Make some choices";
        }
    }
})

