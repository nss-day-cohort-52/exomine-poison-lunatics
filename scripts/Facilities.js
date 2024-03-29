import { getFacilities, setFacility, getTransientState} from "./database.js" //importing the getInterior function which is a function that creates a copy of the original
//interior array from the database


//creating a variable that equals the function getInterior which creates a copy of the interior array from the database invoked function
const facilities = getFacilities()



document.addEventListener( // 
    "change",
    (changeEvent) => {
        if (changeEvent.target.name === "facilities") {
              //change event target is facilities
            //   ternaryClick = (parseInt(changeEvent.target.value))
              setFacility(parseInt(changeEvent.target.value))
            // let ternaryClick = (parseInt(changeEvent.target.value))
            // This is the custom event that resets the html 
            // When the facility is clicked it stores the facility in transient state
            // Then it calls are event listener that signals that the state has changed 
            // This allows the if statement on facilityMinerals.js to know it changed
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
   }
)
// document.addEventListener( // 
//     "change",
//     (changeEvent) => {
//         if (changeEvent.target.id === "facilities") {  //change event target is paints
//             const chosenOption = changeEvent.target.value  //variable is made to equal the "paints" target
//             console.log(chosenOption)  // "1" or "2" // console log the variable chosen option
//         }
//     }
// )

export const Facilities = () => {  // creating a function that is a dropdown html element
    const transient = getTransientState()
    let html = " "  // html element name facilities 
    html += '<select name="facilities">'// using addition assignment to  
    html += '<option value="0"> Select your Facility </option>'

    // Condition to be evaluated ? code to run when condition is true : code to run when condition is false 

    for (const facility of facilities) {
        if (facility.activeStatus === true) {
            let click = (transient.facilityId === facility.id) ? `<option class="select" value="${facility.id}" selected> ${facility.name} </option>` : 
            `<option class="select" value="${facility.id}"> ${facility.name} </option>`
            html += click
        }
    }

    html += "</select>"
    return html

}

