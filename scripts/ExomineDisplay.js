import {Governors} from "./Governors.js"
import {facilityMineral} from "./FacilityMinerals.js"
import { purchaseMineral } from "./database.js"
import { purchaseMineralHTML } from "./SpaceCart.js"



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
        <article class="choices__base">
        <section class="choices__governer options">
            <h2>Governor</h2>
            ${Governors()}
        </section>
        <section class="choices__minerals options">
            <h2>Minerals</h2>
         
        </section>
        <section class="facilityMinerals">
            ${facilityMineral()}
        </section>
        <section class="choices__colonies options">
            <h2>Colonies</h2>
           
        </section>
    </article>
        <article>
            ${purchaseMineralHTML()}
        </article>
        <article class="">
            <h3>Minerals Bought</h3>
            
        </article>
    `
}