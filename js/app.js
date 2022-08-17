const discount = document.querySelector(".discount");
const toggle = document.querySelector("input[type='checkbox'");
const range = document.querySelector("input[type='range']");
const discountValue = 0.25;
const prices = [8,12,16,24,36]; 

const loadInitialRangeValue = () => {
    rangePosition = document.querySelector("input[type='range']").value;
    const price = document.querySelector(".price-number");
    const views = document.querySelector(".views-number");
    switch (rangePosition){
        case "0":
            views.innerHTML = "10"; 
            document.querySelector(".views-letter").innerHTML = "K"; 
            price.innerHTML = prices[0].toFixed(2).toString(); 
            break;
        case "25":
            views.innerHTML = "50"; 
            document.querySelector(".views-letter").innerHTML = "K"; 
            price.innerHTML = prices[1].toFixed(2).toString(); 
            break;
        case "50":
            views.innerHTML = "100"; 
            document.querySelector(".views-letter").innerHTML = "K"; 
            price.innerHTML = prices[2].toFixed(2).toString(); 
            break;
        case "75":
            views.innerHTML = "500"; 
            document.querySelector(".views-letter").innerHTML = "K"; 
            price.innerHTML = prices[3].toFixed(2).toString(); 
            break;
        case "100":
            views.innerHTML = "1"; 
            document.querySelector(".views-letter").innerHTML = "M"; 
            price.innerHTML = prices[4].toFixed(2).toString(); 
            break;
    }
}

loadInitialRangeValue();

// initial value of range if reload
toggle.checked = false;

toggle.addEventListener("change", e => {
    if (e.target.checked){
        discount.style.display = "inline-block"
        applyDiscount();
    }
    else{
        discount.style.display = "none"
        removeDiscount(); 
    } 
});

range.addEventListener("change", e => {
    
    const views = document.querySelector(".views-number");
    const price = document.querySelector(".price-number");

    switch (e.target.value){
        case "0":
            views.innerHTML = "10"; 
            document.querySelector(".views-letter").innerHTML = "K";
            if(!toggle.checked){
                price.innerHTML = prices[0].toFixed(2).toString();
                break;
            }
            price.innerHTML = ((prices[0] - (prices[0] * discountValue)).toFixed(2)).toString();
            break;

        case "25":
            views.innerHTML = "50"; 
            document.querySelector(".views-letter").innerHTML = "K";
            if(!toggle.checked){
                price.innerHTML = prices[1].toFixed(2).toString();
                break;
            }
            price.innerHTML = ((prices[1] - (prices[1] * discountValue)).toFixed(2)).toString();
            break;

        case "50":
            views.innerHTML = "100"; 
            document.querySelector(".views-letter").innerHTML = "K";
            if(!toggle.checked){
                price.innerHTML = prices[2].toFixed(2).toString();
                break;
            }
            price.innerHTML = ((prices[2] - (prices[2] * discountValue)).toFixed(2)).toString();
            break;

        case "75":
            views.innerHTML = "500"; 
            document.querySelector(".views-letter").innerHTML = "K";
            if(!toggle.checked){
                price.innerHTML = prices[3].toFixed(2).toString();
                break;
            }
            price.innerHTML = ((prices[3] - (prices[3] * discountValue)).toFixed(2)).toString();
            break;

        case "100":
            views.innerHTML = "1"; 
            document.querySelector(".views-letter").innerHTML = "M";  
            if(!toggle.checked){
                price.innerHTML = prices[4].toFixed(2).toString();
                break;
            }
            price.innerHTML = ((prices[4] - (prices[4] * discountValue)).toFixed(2)).toString();
            break;
    }
})


const applyDiscount = () => {
    let price = document.querySelector(".price-number");
    let priceCastedToNumber = Number(price.innerHTML);
    let newPrice = ( (priceCastedToNumber - (priceCastedToNumber * discountValue)).toFixed(2) ).toString(); 
    price.innerHTML = newPrice; 
}

const removeDiscount = () => {
    const price = document.querySelector(".price-number");
    const rangePosition = range.value;
    
    switch (rangePosition){
        case "0":
            price.innerHTML = prices[0].toFixed(2).toString(); 
            break;
        case "25":
            price.innerHTML = prices[1].toFixed(2).toString(); 
            break;
        case "50":
            price.innerHTML = prices[2].toFixed(2).toString(); 
            break;
        case "75":
            price.innerHTML = prices[3].toFixed(2).toString(); 
            break;
        case "100":
        price.innerHTML = prices[4].toFixed(2).toString(); 
        break;
    }

}


