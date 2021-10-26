import { getColonies, getFacilities, getGovernors, getMinerals } from "./database.js";


const colonies = getColonies()
const minerals = getMinerals()
const facilities = getFacilities()

// document.addEventListener(
//     "change", 
//     (event) => {
//         if (event.target.name === "colonyMineral") {
//             setSize(parseInt(event.target.value))
//         }
//     }
// )

// this export will show the colony minerals on the page once the user has selected minerals to send to the colony. "still building"
export const colonyMinerals = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = colonies.map(colony => {
        return `<li>
            <name="colonyMineral" value=" has ${minerals.amount}" /> tons of ${minerals.name}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}