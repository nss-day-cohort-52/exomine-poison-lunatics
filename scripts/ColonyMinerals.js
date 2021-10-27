import { getColonies, setColonies, getMinerals, purchaseMineral, getGovernors, getTransientState } from "./database.js";
import { Governors } from "./Governors.js";

const colonies = getColonies()
const minerals = getMinerals()
const governors = getGovernors()
const transient = getTransientState()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "governor") {
//             setColonies(parseInt(event.target.value))

//         }
//     }
// )


export const colonyMinerals = () => {
    let html = "<h2>"
    let htmlHeader = "Colony Minerals"

    for (const governor of governors) {
        if (transient.governorId === governor.id) {
            for (const colony of colonies) {
                if (transient.colonyId === colony.id) {
                    htmlHeader = `${colony.name} Minerals`
                }
            }
        }
    }
    html += htmlHeader

    html += "</h2>"


    return html
}

    // const foundcolonies = colonies.find(
    //     (colony) => {
    //         return colony.id === governors.colonyId
    //     }
    // )




    // html += '<option value="0">Select a Governor </option>'


//     html += "<ul>"

//     for (const mineral of minerals) {
//         html += `<li>
//                 <name="mineralCount" value="${mineral.id}" /> ${mineral.amount} tons of ${mineral.name}
//                 </li>`
//     }
//     html += "</ul>"

