//Element Selectors
const paceSelect = document.getElementById('pace-select');
const distanceSelect = document.getElementById('distance-select');
const terrainSelect = document.getElementById("terrain-select");
const nameEl = document.getElementById("fname");

// Matches Page
const matchField = document.getElementById("matches");

// Function that creates a dictionary with the properties of the consumer
let consumerProps = {name: '', pace: '', terrain: '', distance:''};



const submit = document.getElementById("submitName");
submit.addEventListener("click", ()=>{
    
    // Getting properties of the consumer
    if(nameEl.value != '' && paceSelect.value!=-1 && terrainSelect.value!='t0' && distanceSelect.value!='d0'){
        consumerProps['name'] = nameEl.value;
        consumerProps['pace'] = paceSelect.value;
        consumerProps['terrain'] = terrainSelect.value;
        consumerProps['distance'] = distanceSelect.value;
        console.log(consumerProps);

        // Finding matches
        const matches = findMatches(consumerProps);
        console.log(matches);

        localStorage.setItem("matches", JSON.stringify(matches));
        // Open Page 2
        window.open("matches.html", "_self");
                
    }
    else{
        // If one or more parameter is missing
        document.getElementById("error").style.display = "block";
        var missingValueError = document.createElement("h2");
        missingValueError.textContent = "Values of one or more fields are missing!";
        //missingValueError.setAttribute("class", "error");
        document.getElementById("error").appendChild(missingValueError);
    }


});


const findMatches = (profile) => {

    const result = [];

    for(let i=0; i<mockUsers.length; i++){
        
        let currentDict = mockUsers[i];
        let hasCommon = false;
        
        for(const key in currentDict){
            if(key!='name' && currentDict[key] == profile[key]){
                hasCommon = true;
                break;
            }
        }
        if (hasCommon) {
            result.push(currentDict);
        }
    }

    return result;
}

// Array of dictionaries describing mock users on the app
var mockUsers = [
    {name: 'Lottie', pace: '-3:59', distance: '2km', terrain: 'Track'},
    {name: 'Jessica', pace: '5:00-5:29', distance: '5km', terrain: 'Mountain'},
    {name: 'Aryan', pace: '5:00-5:29', distance: '15km', terrain: 'Road'},
    {name: 'Kirsten', pace: '4:30-4:59', distance: '21km (Half Marathon)', terrain: 'Track'},
    {name: 'Mandipa', pace: '8:00+', distance: '10km', terrain: 'Trail'},
    {name: 'Mohammad', pace: '7:00-7:29', distance: '42km (Marathon)', terrain: 'Treadmill'},
    {name: 'Mayden', pace: '6:30-6:59', distance: '5km', terrain: 'Trail'},
    {name: 'Fisher', pace: '6:00-6:29', distance: '10km', terrain: 'Road'},
    {name: 'Fivium', pace: '5:30-6:59', distance: '42km (Marathon)', terrain: 'Treadmill'}
];



