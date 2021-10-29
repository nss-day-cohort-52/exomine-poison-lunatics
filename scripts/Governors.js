import {getGovernors, setColonies, setGovernors, getTransientState } from "./database.js";

const GovernorsArray =getGovernors()


document.addEventListener(
    "change",
    (event) => { if (event.target.name === "governor") {
     let [governorId, colonyId] = (event.target.value.split("--"))
        setColonies(parseInt(colonyId))
        setGovernors(parseInt(governorId))
        document.dispatchEvent(new CustomEvent("stateChanged")) 
    }
}
)

export const Governors = () => {
    const transient = getTransientState()
    let html = "<h2></h2>"

    html += '<select name="governor" >'
    html += '<option value="0">Select a Governor </option>'

    
    for (const governor of GovernorsArray) {
        if(governor.activeStatus === true) {
            let click = (transient.governorId === governor.id) ? `<option class="select" value="${governor.id}--${governor.colonyId}" selected>${governor.name}</option>` : 
            `<option class="select" value="${governor.id}--${governor.colonyId}" >${governor.name}</option>`
            html += click
        }
    }
        
    html += "</select>"
    return html

    }
