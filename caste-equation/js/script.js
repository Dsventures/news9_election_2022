// console.log(data);
var casteSelector = document.getElementById("caste-selector");
var chosenCaste = document.getElementById("chosenCaste");
var chosenCasteSeats = document.getElementById("chosenCasteSeats");
var submit = document.getElementById("submit");
var rangeBJP = document.getElementById("rangeBJP");
var rangeSP = document.getElementById("rangeSP");
var rangeBSP = document.getElementById("rangeBSP");
var rangeCongress = document.getElementById("rangeCongress");
var rangeOthers = document.getElementById("rangeOthers");
var selectedDataRows;

alert("test")



var countDisplay = document.getElementById("count");

// BJP - 0, SP - 1, BSP - 0, Congress -  0, Others - 0
var countTracker = [0, 0, 0, 0, 0]
// var count = 100;
countDisplay.innerHTML = 0;

function getValue(selectorId){
    var tmpVal = selectorId.value;
    return tmpVal;
}

function countFunc(){
    
}

function fdData(fdValue){
    return data.filter(function(obj){
        // console.log(obj['Caste'].length, fdValue.length);
        return obj.Caste === fdValue;
    })
}
function fdDataParty(inpdata, filterVal){
    var tmp = inpdata.filter(function(obj){
        // console.log(obj['Caste'].length, fdValue.length);
        return obj["Party"] === filterVal;
    })

    // console.log(tmp[0]["DefaultValues "]);
    return parseInt(tmp[0]["DefaultValues "])
}

function formula(){

}

// console.log(getValue(casteSelector));

casteSelector.addEventListener("change", function(e){
    console.log(e.target.value);
    console.log(fdData(e.target.value));
    selectedDataRows = fdData(e.target.value);
    var sumSeats2017 = selectedDataRows.map(function(obj){
        return obj["TotalSeats2017"];
    }).reduce(function(a, b){
        return parseInt(a) + parseInt(b);
    })
    var sumDefaults2017 = selectedDataRows.map(function(obj){
        return obj["DefaultValues "];
    }).reduce(function(a, b){
        return parseInt(a) + parseInt(b);
    })

    chosenCaste.innerHTML = e.target.value;
    chosenCasteSeats.innerHTML = sumSeats2017;

    // Populate slider with Default Values
    rangeBJP.value = fdDataParty(fdData(e.target.value), "BJP")
    rangeSP.value = fdDataParty(fdData(e.target.value), "SP")
    rangeBSP.value = fdDataParty(fdData(e.target.value), "BSP")
    rangeCongress.value = fdDataParty(fdData(e.target.value), "BSP")
    rangeOthers.value = fdDataParty(fdData(e.target.value), "BSP")


    countTracker[0] = rangeBJP.value;
    countTracker[1] = rangeSP.value;
    countTracker[2] = rangeBSP.value;
    countTracker[3] = rangeCongress.value;
    countTracker[4] = rangeOthers.value;


    // count = count - sumDefaults2017;
    countDisplay.innerHTML = countTracker.reduce(function(c1, c2){
        return c1 + c2;
    });
    
})

submit.addEventListener("click", function(e){
    // ShareofVotes => Input3 / 100 * Factor
    // ChangeinSeats => ShareofVotes / Factor * Effect
    // Changefrom2017 => ChangeinSeats - 2017Seats
    // Final Output => Changefrom2017 + TotalSeats2017
})


// console.log("selectedDataRows", selectedDataRows);