const database = {
    governors: [
        { id: 1, name: "Cheezus Crust", activeStatus: true, colonyId: 1 },
        { id: 2, name: "Thomas Basil", activeStatus: true, colonyId: 1 },
        { id: 3, name: "Joe Dirt", activeStatus: true, colonyId: 1 },
        { id: 4, name: "Asap Rocky Road", activeStatus: true, colonyId: 2 },
        { id: 5, name: "Chicken Corbon Bleu", activeStatus: true, colonyId: 2 },
        { id: 6, name: "Mandy Smore", activeStatus: true, colonyId: 3 },
        { id: 7, name: "Will-Eye Spam", activeStatus: true, colonyId: 2 },
        { id: 8, name: "Reeses Witherspoon", activeStatus: true, colonyId: 2 },
        { id: 9, name: "Demi Thomato", activeStatus: true, colonyId: 4 },
        { id: 10, name: "Caramel Anthony", activeStatus: true, colonyId: 4 },
        { id: 11, name: "Robert Browney Jr.", activeStatus: true, colonyId: 5 },
        { id: 12, name: "Robert Browney Sr.", activeStatus: true, colonyId: 5 }
    ],
    colonies: [
        { id: 1, name: "Mars" },
        { id: 2, name: "Earth" },
        { id: 3, name: "Pluto" },
        { id: 4, name: "Uranus" },
        { id: 5, name: "Solaris" }
    ],
    facilities: [
        { id: 1, name: "Twitter", activeStatus: true },
        { id: 2, name: "Faceplace", activeStatus: true },
        { id: 3, name: "Snapcat", activeStatus: true },
        { id: 4, name: "Instaglam", activeStatus: true },
        { id: 5, name: "TicTac", activeStatus: true },
        { id: 6, name: "Gloogle", activeStatus: true },
        { id: 7, name: "Amazonia", activeStatus: true },
        { id: 8, name: "Fender", activeStatus: true },
        { id: 9, name: "NSS", activeStatus: true },
    ],
    minerals: [
        { id: 1, name: "Iron", amount: 100 },
        { id: 2, name: "Krypton", amount: 100 },
        { id: 3, name: "Cheezonium", amount: 100 },
        { id: 4, name: "Caramelite", amount: 100 },
        { id: 5, name: "Taconite", amount: 100 },
        { id: 6, name: "Goosecreekite", amount: 100 },
        { id: 7, name: "Pedialite", amount: 100 },
        { id: 8, name: "Budlite", amount: 100 },
        { id: 9, name: "Spendanite", amount: 100 },
        { id: 10, name: "Nachonite", amount: 100 },
        { id: 11, name: "Snoozonium", amount: 100 },
        { id: 12, name: "Dolomite", amount: 100 }
    ],
    mineralFacilities: [
        { id: 1, amount: 55, facilityId: 1, mineralId: 1 }
    ],
    colonyMinerals: [
        { id: 1, amount: 55, colonyId: 1, mineralId: 1 }
    ],

    transientState: {

    }
}

// document.dispatchEvent( new CustomEvent("stateChanged") )

export const setFacility = (Id) => {
    database.transientState.facilityId = Id
}
export const setGovernors = (Id) => {
    database.transientState.governorId = Id
}
export const setColonies = (Id) => {
    database.transientState.colonyId = Id
}
export const setMinerals = (Id) => {
    database.transientState.mineralId = Id
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}
export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}
export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}
export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

export const purchaseMineral = () => {
    const newOrder = { ...database.transientState } // Taking a copy of user clicks and putting it into an object. New Order = Shopping Cart
    if (database.colonyMinerals.length === 0) { // Setting an ID for every new item that goes into the minerals table. 
        database.transientState.id = 1
    } else {
        const lastIndex = database.colonyMinerals.length - 1 //Once number 1 has been found, this will add a Unique ID to any new "orders" input into the colony minerals. 
        const newID = database.colonyMinerals[lastIndex].id + 1
        database.transientState.id = newID
    }
    // Add the new order object to custom orders state
    database.colonyMinerals.push(newOrder)

    // Reset the temporary state for user choices
    database.transientState = {}
    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"))
}



