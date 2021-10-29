import { purchaseMineral } from "./database.js"
// this page creates the html for the button "space cart" and then add's a click event for the button.
export const purchaseMineralHTML = () => {
  return `
    <button id="orderButton">Purchase Minerals</button>
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