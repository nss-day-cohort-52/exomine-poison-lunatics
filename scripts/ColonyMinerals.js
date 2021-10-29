import { getColonies, setColonies, getMinerals, purchaseMineral, getGovernors, getTransientState } from "./database.js";
import { Governors } from "./Governors.js";
import { setAddedAmount } from "./database.js";
import { getColonyMinerals } from "./database.js";
import { getHtml } from "./database.js";


const colonies = getColonies()
const minerals = getMinerals()
const governors = getGovernors()




export const colonyMinerals = () => {

    const transient = getTransientState()
    const cMinerals = getColonyMinerals()
    const getHtml = getHtml()

    let html = "<h2>"
    let htmlHeader = "Colony Minerals"

    html += getHtml
    
    html += htmlHeader

    html += "</h2>"



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


