const database = {
    governors: [
        { id: 1, name: "Cheezus Crust", activeStatus: false, colonyId: 1 },
        { id: 2, name: "Thomas Basil", activeStatus: true, colonyId: 1 },
        { id: 3, name: "Joe Dirt", activeStatus: false, colonyId: 1 },
        { id: 4, name: "Asap Rocky Road", activeStatus: true, colonyId: 2 },
        { id: 5, name: "Chicken Corbon Bleu", activeStatus: false, colonyId: 2 },
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
        { id: 1, name: "Twitter", activeStatus: false },
        { id: 2, name: "Faceplace", activeStatus: true },
        { id: 3, name: "Snapcat", activeStatus: true },
        { id: 4, name: "Instaglam", activeStatus: true },
        { id: 5, name: "TicTac", activeStatus: true },
        { id: 6, name: "Gloogle", activeStatus: false },
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
        { id: 1, amount: 55, facilityId: 1, mineralId: 1 },
        { id: 2, amount: 70, facilityId: 2, mineralId: 4 },
        { id: 3, amount: 45, facilityId: 3, mineralId: 3 },
        { id: 4, amount: 50, facilityId: 4, mineralId: 6 },
        { id: 5, amount: 30, facilityId: 5, mineralId: 9 },
        { id: 6, amount: 50, facilityId: 6, mineralId: 10 },
        { id: 7, amount: 80, facilityId: 7, mineralId: 12},
        { id: 8, amount: 70, facilityId: 8, mineralId: 7},

    ],
    
    colonyMinerals: [
        { id: 1, amount: 0, colonyId: 1, mineralId: 1 },
        { id: 2, amount: 0, colonyId: 1, mineralId: 1 },
        { id: 3, amount: 0, colonyId: 3, mineralId: 1 }
    ],

    transientState: {

    },

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
export const setAddedAmount = (value) => {
    database.transientState.added = value
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

export const getTransientState = () => {
    return database.transientState
}

export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMinerals => ({ ...colonyMinerals }))
}




const transient = getTransientState()

const minerals = database.mineralFacilities

export const purchaseMineral = () => {
    // setAddedAmount(parseInt(5))
    const findGovernor = database.governors.find(
        (governor) => {
            return governor.id === transient.governorId
        })

    if (findGovernor) { // Govenor matches setGovernor
        const findColony = database.colonies.find(
            (colony) => {
                return colony.id === findGovernor.colonyId
                // Colony matches governor
            }) 
            // Find the facility mineral that was chosen by the users
            const mineralPurchasedObject = database.mineralFacilities.find(
                (mineralFacilityObject) => {
                    return transientState.mineralId === mineralFacilityObject.id
                }
            )

            // Decrement tha object quantity property by one 
                mineralPurchasedObject.amount--

            // Find the colony mineral that should be incremented by one
            const colonyPurchasedObject = database.colonyMinerals.find(
                (colMineral) => {
                    return transientState.colonyId === colMineral.id
                    //Colony matches colonyMinerals
                })
                colonyPurchasedObject.amount++
    }
   



    document.dispatchEvent(new CustomEvent("stateChanged"))
}



