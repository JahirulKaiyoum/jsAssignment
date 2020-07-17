// Assignment problem 01 #feetToMile solution starts


function feetToMile(feet) {
    let checkFeet = feet;

    if (checkFeet < 0) {
        return "Distance can not be Negative or less than Zero ";
    }
    else {
        let getMile = feet / 5280;
        return getMile;
    }
}

let mile = feetToMile(-10);
console.log(mile);


// Assignment problem 01 #feetToMile solution ends





// Assignment problem 02  #woodCalculator solution  starts


function woodCalculator(Chair, Table, Bed) {
    const amountOfWoodForPerChair = 1;
    const amounOfWoodForPerTable = 3;
    const amounOfWoodForPerBed = 5;

    let woodNeedeForChair = amountOfWoodForPerChair * Chair;

    let woodNeedeForTable = amounOfWoodForPerTable * Table;

    let woodNeedeForBed = amounOfWoodForPerBed * Bed;

    let totalWood = woodNeedeForChair + woodNeedeForTable + woodNeedeForBed;
    return totalWood;
}

let totalAmountOfWood = woodCalculator(2, 5, 10);
console.log(totalAmountOfWood);



// Assignment problem 02  #woodCalculator solution  ends





//Assignment problem 03  #brickCalculator solution starts



let flor = 12;

function brickCalculator(n) {
    
    let total = 0;
    if (n>=1 && n <=10) {
        feet = 15;
    }
    else if (n > 10 && n <= 20) {
        feet = 12;
    }
    else {
        feet = 10;
    }
    return feet;
}

let bricksNeeded = 0;

for (let i = 1; i <=flor ; i++) {
    
    bricksNeeded =bricksNeeded + brickCalculator(i);
}

console.log(bricksNeeded * 1000);


//Assignment problem 03  #brickCalculator solution ends






//Assignment problem 04  #tinyFriend solution  starts


function tinyFriend(names) {
    let smallName = names[0];
    for (let i = 0; i < names.length; i++) {
        let currentName = names[i];
        if (currentName.length < smallName.length) {
            smallName = currentName;

        }
        
    }
    return smallName;

}

let smallestName = tinyFriend(["rashed", "khan","kk",]);
    console.log(smallestName);



//Assignment problem 04  #tinyFriend solution  starts