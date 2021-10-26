import {Governors} from "./Governors.js"



document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
            addPurchase()
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
        <section class="choices__colonies options">
            <h2>Colonies</h2>
           
        </section>
    </article>
        <article>
            <button id="purchase">Purchase Mineral</button>
        </article>
        <article class="">
            <h2>Space Cart</h2>
            
        </article>
    `
}