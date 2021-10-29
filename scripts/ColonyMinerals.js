import { getColonies, setColonies, getMinerals, purchaseMineral, getGovernors, getTransientState } from "./database.js";
import { Governors } from "./Governors.js";
import { setAddedAmount } from "./database.js";
import { getColonyMinerals } from "./database.js";



const colonies = getColonies()
const minerals = getMinerals()
const governors = getGovernors()




export const colonyMinerals = () => {

    const transient = getTransientState()
    const cMinerals = getColonyMinerals()

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

    html += getHtml
    
    html += htmlHeader

    html += "</h2>"

  
        
        for (const colMineral of minerals) {
            if (filteredMin.mineralId === mineral.id) {
                    return `<li>
                        name="mineralCount" value="${mineral.id}" /> ${filteredMin.added} tons of ${mineral.name}
                        /li>`
                    }
                }
            }
    

    // const foundcolonies = colonies.find(
    //     (colony) => {
    //         return colony.id === governors.colonyId
    //     }
    // )




    html += '<option value="0">Select a Governor </option>'


    html += "<ul>"


    

    

    




    html += "</ul>"
    return html
}


