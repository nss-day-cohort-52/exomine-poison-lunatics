import { getFacilities, getMinerals } from "./database.js"
import { setFacility, setMinerals } from "./database.js"
import { getTransientState } from "./database.js"
import { purchaseMineral } from "./database.js"

const facilities = getFacilities()
const minerals = getMinerals()
const transient = getTransientState()

// Listens for a radio button to be pressed 
// When the radio button is pressed it sets the mineral in the transient state
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineralAmount") {
            setMinerals(parseInt(event.target.value))
        }

    }
)

export const facilityMineral = () => {
    let html = "<h3>"
    
    // Main Header
    let htmlHeader = "Facility Minerals"

    // When a facility is chosen it loops through to find the right facility
    // The header then changes by showing the facility name
    for (const facility of facilities) {
        if (transient.facilityId === facility.id) {
            htmlHeader = `Facility Minerals for ${facility.name}`
        }    
    }
    
    html += htmlHeader

    html += "</h3>"
    
    
    
    html += "<ul>"

    // for loop that lists all the minerals and amounts
    for (const mineral of minerals) {
        html += `<li>
                <input type="radio" name="mineralAmount" value="${mineral.id}" /> ${mineral.amount} tons of ${mineral.name}
                </li>`
    }
    html += "</ul>"

    return html
}

// loop through mineralfacility
// if (transient.facilityId === facility.id) 


