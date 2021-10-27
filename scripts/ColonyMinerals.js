import { getColonies, setColonies, getMinerals } from "./database.js";

const colonies = getColonies()
const minerals = getMinerals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineralCount") {
            setColonies(parseInt(event.target.value))
        }
    }
)

export const colonyMineral = () => {
    let html = "<h2>"
    
    for (const colony of colonies) {
        if (transient.length > 0) {
            html += `Facility Minerals for ${colony.name}`
        } else {
            html += "Facility Minerals"
        }
    }

    html += "</h2>"
    
    
    
    html += "<ul>"

    for (const mineral of minerals) {
        html += `<li>
                <name="mineralCount" value="${mineral.id}" /> ${mineral.amount} tons of ${mineral.name}
                </li>`
    }
    html += "</ul>"

    return html
}
