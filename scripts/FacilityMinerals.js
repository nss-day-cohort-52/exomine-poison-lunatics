import { getFacilities, getMinerals } from "./database.js"
import { setFacility, setMinerals } from "./database.js"
import { getTransientState } from "./database.js"


const facilities = getFacilities()
const minerals = getMinerals()
const transient = getTransientState()

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
    

    let htmlHeader = "Facility Minerals"

    for (const facility of facilities) {
        if (transient.facilityId === facility.id) {
            htmlHeader = `Facility Minerals for ${facility.name}`
        }    
    }
    
    html += htmlHeader

    html += "</h3>"
    
    
    
    html += "<ul>"

    for (const mineral of minerals) {
        html += `<li>
                <input type="radio" name="mineralAmount" value="${mineral.id}" /> ${mineral.amount} tons of ${mineral.name}
                </li>`
    }
    html += "</ul>"

    return html
}



