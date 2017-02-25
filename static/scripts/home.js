function validateForm() {
    var name = document.getElementById("nameInput").value;
    var species = document.getElementById("speciesInput").value;
    var age = document.getElementById("ageInput").value;
                                     
    if (!name.length || !species.length || !age.length) {
        alert('All fields should be filled!');
        return false;
    }
    if (!isNaN(parseInt(name)) || !isNaN(parseInt(species)) ) {
        alert('Name and species should be strings!');
        return false;
    }	
    if (parseInt(age) == 'NaN') {
        alert('Age should be a whole number!');
        return false;
    }
    
    return true;
}
// ------------------------------------------------------------------------------------ //
// ExtraCredit:
// Add an input field and button that change all of the page's text to the color entered.
// Add a button that hides everything on the page when it is clicked. (hint: look up the display style)
// ------------------------------------------------------------------------------------ //