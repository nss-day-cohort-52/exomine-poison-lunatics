import { getFacility, setFacility } from "./database.js" //importing the getInterior function which is a function that creates a copy of the original
//interior array from the database


//creating a variable that equals the function getInterior which creates a copy of the interior array from the database invoked function
const facilities = getFacility()


document.addEventListener( // 
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "facilities") {  //change event target is facilities
            setFacility(parseInt(changeEvent.target.value))
                
               
            
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
    let html = " "  // html element name facilities 
    html += '<select id="facilities">'// using addition assignment to  
    html += '<option value="0"> Select your Facility Type </option>'

const arrayOfOptions= facilities.map ( (facility) => {
        return `<option value="${facility.id}"> ${facility.type} </option>`
    }
)

    html += arrayOfOptions.join ("")
    html += "</select>"
    return html  

}

