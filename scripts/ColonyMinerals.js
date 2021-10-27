import { getColonies, setColonies, getMinerals, purchaseMineral, getGovernors } from "./database.js";
import { Governors } from "./Governors.js";

const colonies = getColonies()
const minerals = getMinerals()
const governors = getGovernors()

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
