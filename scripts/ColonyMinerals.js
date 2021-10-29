import { getColonies, setColonies, getMinerals, purchaseMineral, getGovernors, getTransientState } from "./database.js";
import { Governors } from "./Governors.js";

const colonies = getColonies()
const minerals = getMinerals()
const governors = getGovernors()
const transient = getTransientState()

export const colonyMinerals = () => { // this will display the html header for "colony minerals" 
    let html = "<h2>"
    let htmlHeader = "Colony Minerals"
// this double loop will find which governor is selected in the drop down and then pair that goveror with their colony ID so it will show their colonies materials on the right side.
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

