var casteSelector = document.getElementById("caste-selector");
var chosenCaste = document.getElementById("chosenCaste");
var chosenCasteSeats = document.getElementById("chosenCasteSeats");
var error = document.getElementById("error");
var inputs = [...document.querySelectorAll(".slidecontainer input")];

var blackOut = document.getElementsByClassName("UPCasteEq_model_blackout")[0];
var modelBox = document.getElementsByClassName("UPCasteEq_model")[0];
var result = document.getElementById("result");
var methodology = document.getElementById("methodology");


// casteSelector.addEventListener("change", function(e){
//     console.log(e.target.value);
//     // reset section
//     //  ===========================================

//     chosenCaste.innerHTML = "&nbsp;";
//     chosenCasteSeats.innerHTML = "&nbsp;";
//     for (var input of inputs) {
//         // console.log(input);
//         input.style.pointerEvents = "auto";
//         input.value = 0;
//         input.dataset.value = 0;
//         input.dataset.max = 100;
//         input.style.setProperty("--value", 0 + "%");
//         input.style.setProperty("--max", 100 + "%");
//         var container = input.closest(".slidecontainer");
//         container.querySelector(".dfault-val").textContent = 0+"%";
//         container.querySelector(".dfault-val").style.opacity = 0;
//         container.querySelector(".dfault-val").style.left = 0+"%";
//         container.querySelector(".dfault-arrow").style.left = 0+"%";
//         container.querySelector(".dfault-arrow").style.opacity = 0;
//         container.querySelector(".min").textContent = input.min = 0;
//         container.querySelector(".max").textContent = input.max = 100;
//         container.querySelector(".value").textContent = 0 + "%";
//         container.querySelector(".value").style.left = 0 + "%";  
    
//     }

//     // ======================================================

//     var filterCasteRows = data.filter(function(obj){
//         return obj.Caste === e.target.value;
//     })

//     var sumSeats2017 = filterCasteRows.map(function(obj){
//         return obj["Effect"];
//     })

//     chosenCaste.innerHTML = e.target.value;
//     chosenCasteSeats.innerHTML = sumSeats2017[0];
   

//     console.log(filterCasteRows);

//     error.innerHTML = "";
                    
//     for (var input of inputs) {
//         input.style.pointerEvents = "auto";
//         var container = input.closest(".slidecontainer");
//         input.addEventListener("input", update);  

//          var filterPartyRows = filterCasteRows.filter(function(obj){
//             return obj.Party === input.dataset.party;
//         })
        
//         var chosenInputParty = filterPartyRows[0]["DefaultValues"]


//         container.querySelector(".dfault-val").textContent = parseFloat(chosenInputParty).toFixed(1)+"%";
//         container.querySelector(".dfault-val").style.opacity = 1;
//         container.querySelector(".dfault-val").style.left = chosenInputParty+"%";
//         container.querySelector(".dfault-arrow").style.left = chosenInputParty+"%";
//         container.querySelector(".dfault-arrow").style.opacity = 1;
//     }

//     var sumOfAllInputs = inputs.reduce((sum, input) => sum + input.valueAsNumber, 0);

//     document.querySelector("#counter").textContent = 100 - sumOfAllInputs + "%";
    
// })



            for (var input of inputs) {
                var container = input.closest(".slidecontainer");
                input.style.pointerEvents = "none";
                container.style.cursor = "pointer";
                input.addEventListener("input", update);

                container.addEventListener("click", function(){
                    var tempCasteVal = casteSelector.value;
                    if(tempCasteVal === "choose"){
                        error.innerHTML = "Caste is required"
                    }
                })

            }

//             update();

//             function update(e) {
//                 // cap the value to max
//                 if (e && e.target.valueAsNumber > +e.target.dataset.max) {
//                     e.target.value = e.target.dataset.max;
//                 }

//                 var sumOfAllInputs = inputs.reduce((sum, input) => sum + input.valueAsNumber, 0);

//                 document.querySelector("#counter").textContent = 100 - sumOfAllInputs + "%";

//                 for (var input of inputs) {
//                     var max = 100 + input.valueAsNumber - sumOfAllInputs;
//                     var container = input.closest(".slidecontainer");

//                     container.querySelector(".max").textContent = 100;
//                     // container.querySelector(".max").textContent = max;
//                     input.dataset.value = input.valueAsNumber;
//                     input.dataset.max = max;

//                     // container.querySelector(".line-right").style.left = max + "%";
//                     container.querySelector(".value").textContent = input.valueAsNumber + "%";
//                     container.querySelector(".value").style.left = input.valueAsNumber + "%";
//                     container.querySelector(".value").style.opacity = 1;

//                     // set the break-points for the background to visualize the range
//                     input.style.setProperty("--value", input.valueAsNumber + "%");
//                     input.style.setProperty("--max", max + "%");
//                 }
//             }
// document.getElementById("submit").addEventListener("click", function(){
//     var tempCasteVal = casteSelector.value;

    
//     // console.log(tempCasteVal);
//     if(tempCasteVal === "choose"){
//         error.innerHTML = "Caste is required"
//     }else{
//         var sumOfAllInputs = inputs.reduce((sum, input) => sum + input.valueAsNumber, 0);
//         // console.log(sumOfAllInputs);
//         // console.log(inputs[0].dataset);
//         if(sumOfAllInputs !== 0){
//             error.innerHTML = "";

//             var tmpObject = {}
//             for (var input of inputs) {
//                 tmpObject[input.dataset.party] = parseFloat(input.dataset.value);
//             }
            
            
//             var filterCasteRows = data.filter(function(obj){
//                 return obj.Caste === tempCasteVal;
//             });
            
//             // console.log(filterCasteRows);
//             // console.log(tmpObject);

//             // var tmpObject = {
//             //     "BJP": 80,
//             //     "SP": 5,
//             //     "BSP": 5,
//             //     "Congress": 1.4,
//             //     "Others": 8.6
//             // }

//             formula(tmpObject, filterCasteRows);

//         }else{
//             error.innerHTML = "Make some choices";
//         }
//     }
// })


// function formula(sliderInput, datapoints){
//     // console.log("sliderInput", sliderInput);
//     // console.log("keynames", Object.keys(sliderInput));
//     // console.log("datapoint", datapoints);
//     blackOut.style.display = "block";
//     modelBox.style.display = "block";
//     result.style.display = "block";
//     Object.keys(sliderInput).forEach(function(obj){
//         console.log(obj);
//         var filterBasedParty = datapoints.filter(function(obj2){
//             return obj2["Party"] === obj;
//         })
//         var tmpShareOfVotes = sliderInput[obj] / 100 * filterBasedParty[0]["Factor"];
//         var tmpChangeInSeats = Math.round(tmpShareOfVotes / filterBasedParty[0]["Factor"] * filterBasedParty[0]["Effect"])
//         var changefrom2017 = tmpChangeInSeats - parseInt(filterBasedParty[0]["2017Seats"])
//         var finalOutput = changefrom2017 + parseInt(filterBasedParty[0]["TotalSeats2017"])

//         var wonlost = changefrom2017 < 0 ? "lost": "won";
//         // var negpos = changefrom2017 < 0 ? "-": "+";

//         var str ="<span>"+ obj + "</span> will win <span>" + finalOutput + "</span> seats in 2022 <br><small>(2017 tally: "+filterBasedParty[0]["2017Seats"]+")</small>";

//         var str2 = "<h3>"+obj+"</h3><p class='precent'>"+sliderInput[obj]+"%</p><div class='seatsWrap'><p class='seats'>"+finalOutput+"<br><small>SEATS</small></p></div><div class='"+wonlost+"'><p>"+changefrom2017+"<br><span>SEATS</span></p></div>";
//         // var str2 = obj+" "+sliderInput[obj]+"%, "+finalOutput+" SEATS, "+wonlost+changefrom2017+" SEATS";

//         // <div id='"+obj.toLowerCase()+"'></div>
//         console.log(str);    
//         console.log(str2);    
//         console.log("");
        
//         renderDataInModel(str, str2, obj.toLowerCase());
//     })
// }

// function renderDataInModel(str, str2, id){
//     document.getElementById(id+"str").innerHTML = str;
//     document.getElementById(id).innerHTML = str2;
// }


// document.getElementById("closeModel").addEventListener("click", function(){
//     blackOut.style.display = "none";
//     modelBox.style.display = "none";
//     result.style.display = "none";
//     methodology.style.display = "none";
// })
// document.getElementById("closeModel2").addEventListener("click", function(){
//     blackOut.style.display = "none";
//     modelBox.style.display = "none";
//     result.style.display = "none";
//     methodology.style.display = "none";
// })
// document.getElementById("method").addEventListener("click", function(){
//     blackOut.style.display = "block";
//     modelBox.style.display = "block";
//     result.style.display = "none";
//     methodology.style.display = "block";
// })
// document.getElementById("reset").addEventListener("click", reset)


// function reset(e){
//     console.log("e.target.id", e.target.id);
//     if(e.target.id === "reset"){
//         document.getElementById("caste-selector").selectedIndex = 0;
//     }
//     error.innerHTML = "";
//     chosenCaste.innerHTML = "&nbsp;";
//     chosenCasteSeats.innerHTML = "&nbsp;";
//     for (var input of inputs) {
//         // console.log(input);
//         input.style.pointerEvents = "auto";
//         input.value = 0;
//         input.dataset.value = 0;
//         input.dataset.max = 100;
//         input.style.setProperty("--value", 0 + "%");
//         input.style.setProperty("--max", 100 + "%");
//         var container = input.closest(".slidecontainer");
//         container.querySelector(".dfault-val").textContent = 0+"%";
//         container.querySelector(".dfault-val").style.opacity = 0;
//         container.querySelector(".dfault-val").style.left = 0+"%";
//         container.querySelector(".dfault-arrow").style.left = 0+"%";
//         container.querySelector(".dfault-arrow").style.opacity = 0;
//         container.querySelector(".min").textContent = input.min = 0;
//         container.querySelector(".max").textContent = input.max = 100;
//         container.querySelector(".value").textContent = 0 + "%";
//         container.querySelector(".value").style.left = 0 + "%";  
    
//     }

// }