function findChildren(dancingBrigade){  
    return dancingBrigade.split('') // splits string into array of single characters
            .sort( (a,b) => //sort method 
            a.localeCompare(b, 'en-US', {caseFirst: 'upper'})) //compares a to b and sorts upperCase first
            .join('') //joins array back into single string
    }