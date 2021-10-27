import { purchaseMineral } from "./database.js"  

export const purchaseMineralHTML = () => {  
  return `
    <button id="orderButton">Purchase Mineral</button>
  `
}

document.addEventListener(
  "click",
  (theRealActualClickEvent) => {
    if (theRealActualClickEvent.target.id === "orderButton") {
      purchaseMineral()
    }
  }
)