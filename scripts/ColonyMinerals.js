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
    
    html += htmlHeader

    html += "</h2>"


    


    html += "<ul>"
  
    
  
        for (const colMineral of cMinerals) {
            if (transient.mineralId === colMineral.id) {
                for (const mineral of minerals) {
                    if (colMineral.id === mineral.id){
                        html += `<li
                        name="mineralCount" value="${mineral.id}" /> ${colMineral.amount} tons of ${mineral.name}
                        </li>`
                    }
                }
            }
            
        }
 
    html += "</ul>"
    return html
}



