import { Governors } from "./Governors.js"
import { facilityMineral } from "./FacilityMinerals.js"
import { getFacilities, purchaseMineral } from "./database.js"
import { purchaseMineralHTML } from "./SpaceCart.js"
import { Facilities } from "./Facilities.js"
import { colonyMinerals } from "./ColonyMinerals.js"



document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        purchaseMineral()
    }
})

export const Exomine = () => {
    return `
        <header class="header">
            <img src="" class="logo" />
            <h1 class="title">Solar System Mining Marketplace</h1>
        </header>

        <article class="topHalf">
        <article class="governorFacility">
            <section class="governor">
                <h3>Choose a Governor</h3>
                ${Governors()}
                </section>
            
            <section class="facility">
                <h3>Choose a Facility</h3>
                ${Facilities()}
            </section>
        </article>
        
        <section class = "colonyMinerals">
          ${colonyMinerals()}
        </section>
        </article>

        <article class="facilitySpaceCart">
            <section class="facilityMinerals">
                ${facilityMineral()}
            </section>
   
            <section class="spaceCart">
                <h4>Space Cart</h4>
                ${purchaseMineralHTML()}
            </section>

        </article>

        <article class="">
            
            
        </article>
    `
}