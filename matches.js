


// Function to update the DOM based on data from localStorage
function updateMatches() {
    const matchDiv = document.getElementById("matches");
    // Retrieve data from localStorage
    const matches = JSON.parse(localStorage.getItem("matches"));
    console.log(matches);
    
    if (matches.length!=0) {
        console.log("ADDING HTML");
        for(let i=0; i<matches.length; i++){
            dispProfile(matches[i]);
        }
        console.log("DONE ADDING HTML");
    }

    localStorage.removeItem("matches");

}

function dispProfile(profDict){

    var profileContainer = document.createElement("div");
    profileContainer.setAttribute('class', 'profile-container');

    document.getElementById("matches").appendChild(profileContainer);

    var newMatchName = document.createElement("h2");
    newMatchName.setAttribute('class', 'profile-match-name');
    newMatchName.textContent = profDict['name'];

    profileContainer.appendChild(newMatchName);

    let isFirstProperty = true;

    // Iterate through the object
    for (const key in profDict) {
        if (isFirstProperty) {
            isFirstProperty = false;
            continue;
        }
        var newMatchProp = document.createElement("h4");
        newMatchProp.setAttribute('class', 'profile-match-name');
        let text = key.toUpperCase().toString()+": "+profDict[key].toString();
        newMatchProp.textContent = text;
        profileContainer.appendChild(newMatchProp);
    }
}

// Call updatePage2 when the page loads
updateMatches();