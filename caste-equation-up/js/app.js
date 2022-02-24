var casteSelector = document.getElementById("caste-selector");
var chosenCaste = document.getElementById("chosenCaste");
var chosenCasteSeats = document.getElementById("chosenCasteSeats");
var error = document.getElementById("error");
var errormsg = document.getElementById("errormessage");
// var inputs = [...document.querySelectorAll(".slidecontainer input")];
// var inputs = document.getElementsByClassName("slider");

var blackOut = document.getElementsByClassName("UPCasteEq_model_blackout")[0];
var modelBox = document.getElementsByClassName("UPCasteEq_model")[0];
var result = document.getElementById("result");
var methodology = document.getElementById("methodology");


// Initialize the App
var inputs = document.getElementsByClassName("slider");
console.log(inputs.length);

for(var i=0; i<inputs.length; i++){
    // console.log(inputs[i]);
    var container = inputs[i].closest(".slidecontainer");
    // console.log(container);
    inputs[i].style.pointerEvents = "none";
    container.style.cursor = "pointer";
    inputs[i].addEventListener("input", update);

    container.addEventListener("click", function(){
        var tempCasteVal = casteSelector.value;
        if(tempCasteVal === "choose"){
            error.innerHTML = "Caste is required"
        }
    })
}


update();

function update(e) {
    // cap the value to max
    if (e && e.target.valueAsNumber > + e.target.dataset.max) {
        e.target.value = e.target.dataset.max;
    }

    var getVale = function(){
        var tempSum=0;
        for(var ii=0; ii<inputs.length; ii++){
            // console.log(inputs[ii].valueAsNumber);
            tempSum += inputs[ii].valueAsNumber;
        }
        
        return tempSum;
        
    }
    
    var sumOfAllInputs = getVale();

    document.getElementById("counter").textContent = 100 - sumOfAllInputs + "%";


    for(var i=0; i<inputs.length; i++){
        var max = 100 + inputs[i].valueAsNumber - sumOfAllInputs;
        var container = inputs[i].closest(".slidecontainer");

        container.getElementsByClassName("max")[0].textContent = 100;
        inputs[i].dataset.value = inputs[i].valueAsNumber;
        inputs[i].dataset.max = max;

        // Value Setting
        container.getElementsByClassName("value")[0].innerHTML = inputs[i].valueAsNumber + "%";
        container.getElementsByClassName("value")[0].style.left = inputs[i].valueAsNumber + "%";
        container.getElementsByClassName("value")[0].style.opacity = 1;

        // set the break-points for the background to visualize the range
        inputs[i].style.setProperty("--value", inputs[i].valueAsNumber + "%");
        inputs[i].style.setProperty("--max", max + "%");
        
    }
} // end of update function


casteSelector.addEventListener("change", function(e){
    console.log(e.target.value);
    // reset section
    //  ===========================================

    chosenCaste.innerHTML = "&nbsp;";
    chosenCasteSeats.innerHTML = "&nbsp;";
    for(var j=0; j<inputs.length; j++){
        inputs[j].style.pointerEvents = "auto";
        var container = inputs[j].closest(".slidecontainer");
        inputs[j].style.pointerEvents = "auto";
        inputs[j].value = 0;
        inputs[j].dataset.value = 0;
        inputs[j].dataset.max = 100;
        inputs[j].style.setProperty("--value", 0 + "%");
        inputs[j].style.setProperty("--max", 100 + "%");
        container.getElementsByClassName("dfault-val")[0].textContent = 0+"%";
        container.getElementsByClassName("dfault-val")[0].style.opacity = 0;
        container.getElementsByClassName("dfault-val")[0].style.left = 0+"%";
        container.getElementsByClassName("dfault-arrow")[0].style.left = 0+"%";
        container.getElementsByClassName("dfault-arrow")[0].style.opacity = 0;
        container.getElementsByClassName("min")[0].textContent = inputs[j].min = 0;
        container.getElementsByClassName("max")[0].textContent = inputs[j].max = 100;
        container.getElementsByClassName("value")[0].textContent = 0 + "%";
        container.getElementsByClassName("value")[0].style.left = 0 + "%"; 
      
    }

    // ======================================================

    var filterCasteRows = data.filter(function(obj){
        return obj.Caste === e.target.value;
    })

    var sumSeats2017 = filterCasteRows.map(function(obj){
        return obj["Effect"];
    })

    chosenCaste.innerHTML = e.target.value+"s";
    chosenCasteSeats.innerHTML = sumSeats2017[0];
   

    console.log(filterCasteRows);

    error.innerHTML = "";

    for(var i=0; i<inputs.length; i++){
        inputs[i].style.pointerEvents = "auto";
        var container = inputs[i].closest(".slidecontainer");

        inputs[i].addEventListener("input", update);  

        var filterPartyRows = filterCasteRows.filter(function(obj){
            return obj.Party === inputs[i].dataset.party;
        })
        
        var chosenInputParty = filterPartyRows[0]["DefaultValues"]


        container.getElementsByClassName("dfault-val")[0].textContent = parseFloat(chosenInputParty).toFixed(1)+"%";
        container.getElementsByClassName("dfault-val")[0].style.opacity = 1;
        container.getElementsByClassName("dfault-val")[0].style.left = chosenInputParty+"%";
        container.getElementsByClassName("dfault-arrow")[0].style.left = chosenInputParty+"%";
        container.getElementsByClassName("dfault-arrow")[0].style.opacity = 1;
        
    }
                    

    var getVale = function(){
        var tempSum=0;
        for(var ii=0; ii<inputs.length; ii++){
            // console.log(inputs[ii].valueAsNumber);
            tempSum += inputs[ii].valueAsNumber;
        }
        
        return tempSum;
        
    }
    
    var sumOfAllInputs = getVale();

    // var sumOfAllInputs = inputs.reduce((sum, input) => sum + input.valueAsNumber, 0);

    document.querySelector("#counter").textContent = 100 - sumOfAllInputs + "%";
    
}) // end of caste selector change event

document.getElementById("submit").addEventListener("click", function(){
    var tempCasteVal = casteSelector.value;

    
    // console.log(tempCasteVal);
    if(tempCasteVal === "choose"){
        blackOut.style.display = "block";
                modelBox.style.display = "block";
                errormsg.style.display = "block";
                error.innerHTML = "Caste is required"
    }else{
        // var sumOfAllInputs = inputs.reduce((sum, input) => sum + input.valueAsNumber, 0);

         var getVale = function(){
            var tempSum=0;
            for(var ii=0; ii<inputs.length; ii++){
                // console.log(inputs[ii].valueAsNumber);
                tempSum += inputs[ii].valueAsNumber;
            }
            
            return tempSum;
            
        }
        
        var sumOfAllInputs = getVale();
        // console.log(sumOfAllInputs);
        // console.log(inputs[0].dataset);
        error.innerHTML = "";

            var tmpObject = {}
            for(rr=0; rr<inputs.length; rr++){
                tmpObject[inputs[rr].dataset.party] = parseFloat(inputs[rr].dataset.value);
            }
                      
            
            var filterCasteRows = data.filter(function(obj){
                return obj.Caste === tempCasteVal;
            });
            
            // console.log(filterCasteRows);
            console.log(tmpObject);

            // var tmpObject = {
            //     "BJP": 80,
            //     "SP": 5,
            //     "BSP": 5,
            //     "Congress": 1.4,
            //     "Others": 8.6
            // }

            formula(tmpObject, filterCasteRows);
    }
}) // end of the submit event function


function formula(sliderInput, datapoints){
    
    blackOut.style.display = "block";
    modelBox.style.display = "block";
    result.style.display = "block";
    Object.keys(sliderInput).forEach(function(obj){
        // console.log(obj);
        var filterBasedParty = datapoints.filter(function(obj2){
            return obj2["Party"] === obj;
        })
        var tmpShareOfVotes = sliderInput[obj] / 100 * filterBasedParty[0]["Factor"];
        var tmpChangeInSeats = Math.round(tmpShareOfVotes / filterBasedParty[0]["Factor"] * filterBasedParty[0]["Effect"])
        var changefrom2017 = tmpChangeInSeats - parseInt(filterBasedParty[0]["2017Seats"])
        var finalOutput = changefrom2017 + parseInt(filterBasedParty[0]["TotalSeats2017"])

        var wonlost = "neutral";



        if(changefrom2017 < 0){
           wonlost = "lost";
        }else if(changefrom2017 > 0){
            wonlost = "won"; 
            changefrom2017 = "+"+changefrom2017;
        }
        // var wonlost = changefrom2017 < 0 ? "lost": "won";
        // var negpos = changefrom2017 < 0 ? "-": "+";

        var str ="<span>"+ obj + "</span> will win <span>" + finalOutput + "</span> seats in 2022 <br><small>(2017 tally: "+filterBasedParty[0]["2017Seats"]+")</small>";

        var str2 = "<h3>"+obj+"</h3><p class='precent'>"+sliderInput[obj]+"%</p><div class='seatsWrap'><p class='seats'>"+finalOutput+"<br><small>SEATS</small></p></div><div class='"+wonlost+"'><p>"+changefrom2017+"<br><span>SEATS</span></p></div>";
        // var str2 = obj+" "+sliderInput[obj]+"%, "+finalOutput+" SEATS, "+wonlost+changefrom2017+" SEATS";

        // <div id='"+obj.toLowerCase()+"'></div>
        // console.log(str);    
        // console.log(str2);    
        // console.log("");
        
        renderDataInModel(str, str2, obj.toLowerCase());
    })
} // end of formula func

function renderDataInModel(str, str2, id){
    document.getElementById(id+"str").innerHTML = str;
    document.getElementById(id).innerHTML = str2;
}


document.getElementById("closeModel").addEventListener("click", function(){
    blackOut.style.display = "none";
    modelBox.style.display = "none";
    result.style.display = "none";
    methodology.style.display = "none";
    errormsg.style.display = "none";
})
document.getElementById("closeModel2").addEventListener("click", function(){
    blackOut.style.display = "none";
    modelBox.style.display = "none";
    result.style.display = "none";
    methodology.style.display = "none";
    errormsg.style.display = "none";
})
document.getElementById("method").addEventListener("click", function(){
    blackOut.style.display = "block";
    modelBox.style.display = "block";
    result.style.display = "none";
    methodology.style.display = "block";
})
document.getElementById("reset").addEventListener("click", reset)


function reset(e){
    console.log("e.target.id", e.target.id);
    if(e.target.id === "reset"){
        document.getElementById("caste-selector").selectedIndex = 0;
    }
    error.innerHTML = "";
    chosenCaste.innerHTML = "&nbsp;";
    chosenCasteSeats.innerHTML = "&nbsp;";
    for(var j=0; j<inputs.length; j++){

        inputs[j].style.pointerEvents = "none";
        var container = inputs[j].closest(".slidecontainer");
        inputs[j].style.pointerEvents = "auto";
        inputs[j].value = 0;
        inputs[j].dataset.value = 0;
        inputs[j].dataset.max = 100;
        inputs[j].style.setProperty("--value", 0 + "%");
        inputs[j].style.setProperty("--max", 100 + "%");
        container.getElementsByClassName("dfault-val")[0].textContent = 0+"%";
        container.getElementsByClassName("dfault-val")[0].style.opacity = 0;
        container.getElementsByClassName("dfault-val")[0].style.left = 0+"%";
        container.getElementsByClassName("dfault-arrow")[0].style.left = 0+"%";
        container.getElementsByClassName("dfault-arrow")[0].style.opacity = 0;
        container.getElementsByClassName("min")[0].textContent = inputs[j].min = 0;
        container.getElementsByClassName("max")[0].textContent = inputs[j].max = 100;
        container.getElementsByClassName("value")[0].textContent = 0 + "%";
        container.getElementsByClassName("value")[0].style.left = 0 + "%"; 
        container.addEventListener("click", function(){
            var tempCasteVal = casteSelector.value;
            if(tempCasteVal === "choose"){
                blackOut.style.display = "block";
                modelBox.style.display = "block";
                errormsg.style.display = "block";
                error.innerHTML = "Caste is required"
            }
        })
      
    }


}