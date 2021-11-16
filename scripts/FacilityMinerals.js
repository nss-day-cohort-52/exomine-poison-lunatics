import { getFacilities, getMinerals } from "./database.js"
import { setFacility, setMinerals } from "./database.js"
import { getTransientState } from "./database.js"
import { purchaseMineral } from "./database.js"
import { getMineralFacilities } from "./database.js"

const facilities = getFacilities()
const minerals = getMinerals()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineralAmount") {
            setMinerals(parseInt(event.target.value))
        }

    }
)

export const facilityMineral = () => {
    const mineralFacilities = getMineralFacilities()
    
    const transient = getTransientState()
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

    for (const mineralFac of mineralFacilities) {
        if (mineralFac.facilityId === transient.facilityId) {

            for (const min of minerals) {
                if (mineralFac.mineralId === min.id) {
                    html += `<li>
                    <input type="radio" name="mineralAmount" value="${min.id}" /> 
                    ${mineralFac.amount} tons of ${min.name}
                    </li>`
                }

            }
        }
        // html += `<li>
        //         <input type="radio" name="mineralAmount" value="${mineral.id}" /> 
        //         ${mineral.amount} tons of ${mineral.name}
        //         </li>`
    }
    html += "</ul>"

    return html
}

// loop through mineralfacility
// if (transient.facilityId === facility.id) 


