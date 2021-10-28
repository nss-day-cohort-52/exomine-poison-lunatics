import {getGovernors, setColonies, setGovernors} from "./database.js";

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
    let html = "<h2></h2>"

    html += '<select name="governor" >'
    html += '<option value="0">Select a Governor </option>'

    
    const arrayOfOptions = GovernorsArray.map( (governor) => {
        if(governor.activeStatus === true)
        
            return `<option class="select" value="${governor.id}--${governor.colonyId}">${governor.name}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html

    }
