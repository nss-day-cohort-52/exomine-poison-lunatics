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
            setMineral(parseInt(event.target.value))
        }
    }
)

export const facilityMineral = () => {
    let html = "<h3>"
    
    for (const facility of facilities) {
        if (transient.length > 0) {
            html += `Facility Minerals for ${facility.name}`
        } else {
            html += "Facility Minerals"
        }
    }

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



